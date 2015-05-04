//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/

var MonthTableGen =
{
    init: function () {
        $(".date-picker").datepicker();
        var table = $('#ledger_table').DataTable(
            {
                "aoColumnDefs": [
                    {'bSortable': false, 'aTargets': [4]},
                    {'bSortable': false, 'aTargets': [5]},
                    {'bSortable': false, 'aTargets': [6]}
                ]
            }
        );

        $('#ledger_table').on( 'page.dt', function () {
            var info = table.page.info();
            //alert( 'Showing page: '+info.page+' of '+info.pages );
            checkIn();
        } );
    }

}

var MonthTableGui =
{
    registerInlineEdit: function () {
        $('.inline-edit-btn').click(function () {
            var parentRow = $(this).closest('tr');

            if (parentRow.hasClass('currently-editing')) {
                var dateValue = parentRow.find('#temp-date-picker').val();
                $('#ledger_table').DataTable().row(parentRow).invalidate().draw();
                parentRow.removeClass("currently-editing");
            }
            else {
                parentRow.addClass("currently-editing");
                var dateValue = parentRow.find('.entry_date').html();

                var dateTemplate =  HandlebarsTemplates['month/date_form']({entry_date: dateValue});
                parentRow.find('.entry_date').html(dateTemplate);
                $("#temp-date-picker").datepicker();
            }
        });

    }
}

$(document).ready(function () {
        var dTable = MonthTableGen;
        MonthTableGui.registerInlineEdit();
        dTable.init();

    }
)

