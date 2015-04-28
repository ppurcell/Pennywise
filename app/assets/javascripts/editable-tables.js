$(function () {
    //$('#ledger_table .editable').editableTableWidget({editor:$('')});
    //
    //$('#ledger_table').editableTableWidget();


    //var editableGrid = new EditableGrid("DemoGridAttach");
    //
    //if($("#ledger_table").length <= 0){return;}
    //
    //editableGrid = new EditableGrid("DemoGridAttach");
    //
    //var metadata = [];
    //metadata.push({ name: "date", label: "DATE", datatype: "date", editable: true});
    //metadata.push({ name: "category", label:"CATEGORY", datatype: "string", editable: true});
    //metadata.push({ name: "description", label: "DESCRIPTION", datatype: "string", editable: true});
    //metadata.push({ name: "amount", label: "AMOUNT", datatype: "double($,2, dot, comma, 1)", editable: true});
    //
    //metadata[1].values = {"categories":{}};
    //$.getJSON('/categories', function(data)
    //{
    //    $.each(data, function(key, value)
    //    {
    //        metadata[1].values.categories[value.id] = value.name;
    //    });
    //    editableGrid.load({"metadata": metadata});
    //    editableGrid.attachToHTMLTable('ledger_table');
    //    editableGrid.renderGrid();
    //
    //    editableGrid.addCellValidator("amount", new CellValidator({
    //        isValid: function(value) { return value == "" || (parseFloat(value) >= 16 && parseFloat(value) < 100); }
    //    }));
    //});
    //
    $('table td').on('change', function (evt, newValue) {
        // do something with the new cell value
        alert('change');
    });

    $("#ledger_table tr").change(function () {
            //alert("Changed an item");
            alert($(this).find(".entry_date").html());
        }
    );

    // $('#ledger_table').editableTableWidget({editor: $('<textarea>')});

});
$(document).ready(function () {
        $(".date-picker").datepicker();
        $('#ledger_table').DataTable(
            {
                "aoColumnDefs": [
                    {'bSortable': false, 'aTargets': [4]},
                    {'bSortable': false, 'aTargets': [5]}
                ]
            }
        );
    }


)




