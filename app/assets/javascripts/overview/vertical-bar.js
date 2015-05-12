google.setOnLoadCallback(drawStuff);
google.load("visualization", '1.1', {packages:['corechart, geochart']});



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

    var geo_data = google.visualization.arrayToDataTable([
        ['Location',   'Money Spent', 'Percentage'],
        ['Rotorua',  312,1],
        ['Cairns', 212,1],
        ['Waiheke Island',  100,1],
        ['Franz Josef Glacier', 120, 1],
        ['Queestown', 100, 1],
        ['62 Emily Place Auckland 1010', 200, 1]

    ]);

    var geo_options = {
        sizeAxis: { minValue: 0, maxValue: 100 },
        region: '053', // Western Europe
        displayMode: 'markers',
        colorAxis: {colors: ['#e7711c', '#4374e0']}, // orange to blue
        height:290,
        'chartArea': {'width': '90%', 'height': '80%'}
    };

    var pieOptions = {
        'chartArea': {'width': '70%', 'height': '80%'},
        is3D: true
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
    var geoChart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
    vertChart.draw(data, options_fullStacked);
    pieChart.draw(pie_data, pieOptions);
    geoChart.draw(geo_data, geo_options);
};

$(document).ready(function () {
    $(window).resize(function(){
        drawStuff();
    });
    drawStuff();
});
