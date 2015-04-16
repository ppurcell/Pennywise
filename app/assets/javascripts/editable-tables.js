//$('#ledger_table').editableTableWidget().numericInputExample().find('td:first').focus();
//$('#textAreaEditor').editableTableWidget({editor: $('<textarea>')});


//window.onload = function() {
//
//}

$(function()
{
    if($("#ledger_table").length <= 0){return;}

    editableGrid = new EditableGrid("DemoGridAttach");

    var metadata = [];
    metadata.push({ name: "date", label: "DATE", datatype: "date", editable: true});
    metadata.push({ name: "category", label:"CATEGORY", datatype: "string", editable: true});
    metadata.push({ name: "description", label: "DESCRIPTION", datatype: "string", editable: true});
    metadata.push({ name: "amount", label: "AMOUNT", datatype: "double($,2, dot, comma, 1)", editable: true});

    metadata[1].values = {"categories":{}};
    $.getJSON('/categories', function(data)
    {
        $.each(data, function(key, value)
        {
            metadata[1].values.categories[value.id] = value.name;
        });
        editableGrid.load({"metadata": metadata});
        editableGrid.attachToHTMLTable('ledger_table');
        editableGrid.renderGrid();

        editableGrid.addCellValidator("amount", new CellValidator({
            isValid: function(value) { return value == "" || (parseFloat(value) >= 16 && parseFloat(value) < 100); }
        }));
    });



    $("#ledger_table td").change(function()
        {
            alert("Changed an item");
        }
    );

});