


$(document).ready(function () {
        if ($('#journal_articles_table').length > 0) {
            $('#journal_articles_table').DataTable(
                {
                    "columnDefs": [
                        { "width": "5%", "targets": 0 },
                        { "width": "5%", "targets": 1 },
                        { "width": "35%", "targets": 2 },
                        { "width": "10%", "targets": 3 }

                    ]
                });
        }
    }
)