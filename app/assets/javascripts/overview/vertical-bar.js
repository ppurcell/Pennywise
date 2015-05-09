google.setOnLoadCallback(drawStuff);
google.load("visualization", '1.1', {packages:['corechart']});



function drawStuff() {
    var barStyle = 'bar{stroke-width:1; stroke-color:black}';
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Actual',{ role: 'style' },'Estimated', { role: 'style' }],
        ['Travel', 10,barStyle, 1391, barStyle ],
        ['Housing', 1253,barStyle, 2200, barStyle ],
        ['Food', 563.00,barStyle, 1900, barStyle  ],
        ['Souvenirs', 563.00,barStyle, 1900, barStyle  ],
        ['Misc', 563.00,barStyle, 1900, barStyle  ]
    ]);

    var pie_data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Travel',     11],
        ['Housing',      2],
        ['Food',  2],
        ['Souvenirs', 2],
        ['Misc',    7]
    ]);

    var pieOptions = {
        'chartArea': {'width': '70%', 'height': '80%'},
        is3D: true
    };

    var options = {
        width: 400,
        height: 400,
        legend: {
            position: 'none',
            maxLines: 3
        },
        bar: {
            groupWidth: '75%'
        },
        isStacked: true
    };

    var options_fullStacked = {
        isStacked: 'percent',
        height: 300,
        colors:['#ECDD4C','#8CEC7A'],
        legend: {
            position:'none'
        },
        'chartArea': {'width': '80%', 'height': '80%'},
        bar: {groupWidth: "66%"},
        hAxis: {
            gridlines:{count:0},
            minValue: 0

        },
        vAxis: {textPosition: 'in'}
    };

    var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
    var vertChart = new google.visualization.BarChart(document.getElementById('dual_x_div'));
    vertChart.draw(data, options_fullStacked);
    pieChart.draw(pie_data, pieOptions);
};

$(document).ready(function () {
    $(window).resize(function(){
        drawStuff();
    });
});
