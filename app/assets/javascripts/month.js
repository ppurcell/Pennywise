//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/

var MonthTableGen =
{
    init: function () {
        $(".date-picker").datepicker();
        $('#ledger_table').DataTable(
            {
                "aoColumnDefs": [
                    {'bSortable': false, 'aTargets': [4]},
                    {'bSortable': false, 'aTargets': [5]}
                ]
            });
    }
}

var gui = function () {}

gui.prototype.init = function () {
    var _this = this;
    $('.inline-edit-btn').click(function () {
        var parentRow = $(this).closest('tr');
        var rowId = parentRow.attr('data-row-id');
        var categoryIndex = parentRow.find('.entry_cat').attr('data-category-id');

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
            //Category
            _this.unloadCategories(parentRow);

            $('#ledger_table').DataTable().row(parentRow).invalidate();
            _this.updateEntry(rowId, dateValue,categoryIndex, descValue,amtValue );
            parentRow.removeClass("currently-editing");
        }
        else {
            parentRow.addClass("currently-editing");
            _this.loadFields(parentRow);
        }
    });
}

gui.prototype.loadCategories = function (data, parentRow) {

    var selectIndex = parentRow.find('.entry_cat').attr('data-category-id');
    var selectLabel = parentRow.find('.entry_cat').text();

    var categoryList = HandlebarsTemplates['month/category_form'](data)
    parentRow.find('.entry_cat').html(categoryList);
    var buttonElem = parentRow.find('.entry_cat .btn:first-child');
    buttonElem.val(selectIndex);
    buttonElem.text(selectLabel);

    parentRow.find('.entry_cat .dropdown-menu li').click(function () {
        buttonElem.text($(this).text());
        buttonElem.val($(this).attr('data-index'));
        parentRow.find('.entry_cat').attr('data-category-id', $(this).attr('data-index'));
    });
}

gui.prototype.unloadCategories = function (parentRow) {
    var selectLabel = parentRow.find('.entry_cat .btn:first-child').text();
    parentRow.find('.entry_cat').html(selectLabel);
}

gui.prototype.loadDate = function (parentRow, rowId) {
    var dateValue = parentRow.find('.entry_date').html();
    var dateTemplate = HandlebarsTemplates['month/date_form']({row_id: rowId, entry_date: dateValue});
    parentRow.find('.entry_date').html(dateTemplate);
    $(".date-picker").datepicker();
}

gui.prototype.loadDescription = function (parentRow, rowId) {
    var descCell = parentRow.find('.entry_desc');
    var descTemplate = HandlebarsTemplates['month/input_form']({
        row_id: rowId,
        value: descCell.html(),
        input_type: 'desc'
    });
    descCell.html(descTemplate);
}

gui.prototype.loadAmount = function (parentRow, rowId) {
    var amtCell = parentRow.find('.entry_amt');
    var descTemplate = HandlebarsTemplates['month/input_form']({
        row_id: rowId,
        value: amtCell.html(),
        input_type: 'amt'
    });
    amtCell.html(descTemplate);
}

gui.prototype.loadFields = function (parentRow) {
    var rowId = parentRow.attr('data-row-id');
    var _this = this;
    $.ajax(
        {
            url: '/categories.json',
            Accept: 'application/json',
            dataType: 'json'
        }).success(function (data) {
            _this.loadCategories(data, parentRow, rowId);
            _this.loadDate(parentRow, rowId);
            _this.loadAmount(parentRow, rowId);
            _this.loadDescription(parentRow, rowId);

        });
}

gui.prototype.updateEntry = function(rowId, dateValue,categoryIndex, descValue,amtValue)
{
    var date = new Date(dateValue);
    var jsonData =
    {
        description: descValue,
        category_id: categoryIndex,
        date: date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
        amount: amtValue
    }

    $.ajax(
    {
        data:JSON.stringify({entry:jsonData}),
        url: '/entries/'+rowId+'.json',
        Accept: 'application/json',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        method:'PUT'
    }).success(function(data) {

});
}

$(document).ready(function () {
        var dTable = MonthTableGen;
        var tableGUI = new gui();
        tableGUI.init();
        dTable.init();

    }
)