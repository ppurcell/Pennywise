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

        $('#ledger_table').on('page.dt', function () {
            //var info = table.page.info();
            //alert( 'Showing page: '+info.page+' of '+info.pages );
        });
    }

}

var gui = function() {}

gui.prototype.init = function()
{
    var _this = this;
        $('.inline-edit-btn').click(function () {
            var parentRow = $(this).closest('tr');
            var rowId = parentRow.attr('data-row-id');

            if (parentRow.hasClass('currently-editing')) {
                //Date
                var dateValue = parentRow.find('#date-picker-' + rowId).val();
                parentRow.find('.entry_date').html(dateValue);
                //Description
                var descValue = parentRow.find('#gen-desc-input-' + rowId).val();
                parentRow.find('.entry_desc').html(descValue);
                //Amount
                var amtValue = parentRow.find('#gen-amt-input-' + rowId).val();
                parentRow.find('.entry_amt').html(amtValue);

                $('#ledger_table').DataTable().row(parentRow).invalidate();
                parentRow.removeClass("currently-editing");
            }
            else {
                parentRow.addClass("currently-editing");
                //Date
                var dateValue = parentRow.find('.entry_date').html();
                var dateTemplate = HandlebarsTemplates['month/date_form']({row_id: rowId, entry_date: dateValue});
                parentRow.find('.entry_date').html(dateTemplate);
                $(".date-picker").datepicker();
                //Description
                var descCell = parentRow.find('.entry_desc');
                var descTemplate = HandlebarsTemplates['month/input_form']({
                    row_id: rowId,
                    value: descCell.html(),
                    input_type: 'desc'
                });
                descCell.html(descTemplate);
                //Amount
                var amtCell = parentRow.find('.entry_amt');
                var descTemplate = HandlebarsTemplates['month/input_form']({
                    row_id: rowId,
                    value: amtCell.html(),
                    input_type: 'amt'
                });
                amtCell.html(descTemplate);
                //Categories
                _this.loadCategories(rowId, parentRow);

            }
        });
}

gui.prototype.loadCategories = function(rowId, parentRow)
{

    var selectValue = parentRow.find('.entry_cat').attr('data-category-id');

    $.ajax(
        {
            url: '/categories.json',
            Accept: 'application/json',
            dataType: 'json'
        }).success(function (data) {
            //alert('asd');
            //alert(HandlebarsTemplates['month/category_form'](data));
            var categoryList = HandlebarsTemplates['month/category_form'](data)
            parentRow.find('.entry_cat').html(categoryList);
            parentRow.find('select').val(selectValue);

        })

}

$(document).ready(function () {
        var dTable = MonthTableGen;
        var tableGUI = new gui();
        tableGUI.init();
        dTable.init();

    }
)

