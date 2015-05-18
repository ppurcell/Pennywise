google.load("visualization", '1.1', {packages: ['corechart, geochart']});

var overview = function () {
    this.geoChartData = null;
    this.categoryData = null;
}

overview.prototype.getJournalLocationData = function (callback) {

    var dataArr = [];
    var _this = this;
    dataArr.push(['Location', 'color', 'size', {type: 'string', role: 'tooltip'}]);

    $.ajax(
        {
            url: '/journal_articles.json',
            Accept: 'application/json',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            method: 'GET'
        }).success(function (data) {
            var i = 0;
            for (i; i < data.length; i++) {
                dataArr.push([data[i].location, Math.random() * 10, 1, data[i].date]);
            }
            _this.geoChartData = dataArr;
            callback();
        });
}

overview.prototype.getCategoryData = function (callback) {

    //var dataArr = [];
    var _this = this;


    $.ajax(
        {
            url: '/overview/pie_data.json',
            Accept: 'application/json',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            method: 'GET'
        }).success(function (data) {
            //var i = 0;
           // for (i; i < data.length; i++) {
            //    dataArr.push([data[i].location, Math.random() * 10, 1, data[i].date]);
           // }
            _this.categoryData = data;
            callback();
        });
}

overview.prototype.drawGeoChart = function () {
    var _this = this;
    if (this.geoChartData == null) {
        this.getJournalLocationData(function () {
            _this.drawGeoChart()
        });
    }
    else {
        var geo_options = {
            sizeAxis: {minValue: 0, maxValue: 100},
            region: '053', // Western Europe
            displayMode: 'markers',
            colorAxis: {minValue: 0, maxValue: 10, colors: ['#FF00FF', '#e7711c', '#33CC00', '#4374e0']}, // orange to blue
            height: 240,
            'chartArea': {'width': '90%', 'height': '80%'}

        };

        var geo_data = google.visualization.arrayToDataTable(this.geoChartData);
        var geoChart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
        geoChart.draw(geo_data, geo_options);

    }

}

overview.prototype.drawPieChart = function () {
    var _this = this;
    if (this.categoryData == null) {
        this.getCategoryData(function () {
            _this.drawPieChart()
        });
    }
    else {
        var pieOptions = {
            'chartArea': {'width': '70%', 'height': '80%'},
            is3D: true
        };
        var pieChartArray = []
        pieChartArray.push(['Category', 'Total']);
        var i = 0;
        for (i; i < this.categoryData.length; i++) {
            pieChartArray.push([this.categoryData[i].name, parseFloat(this.categoryData[i].total)]);
        }

        var pie_data = google.visualization.arrayToDataTable(pieChartArray);
        var pieChart = new google.visualization.PieChart(document.getElementById('piechart'));
        pieChart.draw(pie_data, pieOptions);

    }

}

overview.prototype.drawBreakdownChart = function () {
    var _this = this;
    if (this.categoryData == null) {
        this.getCategoryData(function () {
            _this.drawBreakdownChart()
        });
    }
    else {
    var barStyle = 'bar{stroke-width:1; stroke-color:black}';
    var options_fullStacked = {
        isStacked: 'percent',
        height: 300,
        colors: ['#ECDD4C', '#8CEC7A'],
        legend: {
            position: 'none'
        },
        'chartArea': {'width': '80%', 'height': '80%'},
        bar: {groupWidth: "66%"},
        hAxis: {
            gridlines: {count: 0},
            minValue: 0

        },
        vAxis: {textPosition: 'in'}
    };
        var barChartArray = []
        barChartArray.push(['Category', 'Actual', {role: 'style'}, 'Estimated', {role: 'style'}]);
        var i = 0;
        for (i; i < this.categoryData.length; i++) {
            var diff = parseFloat(this.categoryData[i].estimate - parseFloat(this.categoryData[i].total))
            if(diff > 0)
            {
                barChartArray.push([this.categoryData[i].name,parseFloat(this.categoryData[i].total),barStyle, diff, barStyle]);
            }
            else
            {
                barChartArray.push([this.categoryData[i].name,parseFloat(this.categoryData[i].total),barStyle, 0.0, barStyle]);
            }

        }
        var vertData = google.visualization.arrayToDataTable(barChartArray);
        var vertChart = new google.visualization.BarChart(document.getElementById('dual_x_div'));
        vertChart.draw(vertData, options_fullStacked);

    }

}

overview.prototype.drawVisualElements = function () {
    this.drawGeoChart();
    this.drawPieChart();
    this.drawBreakdownChart();
}

$(document).ready(function () {

    if ($('#piechart').length > 0 && $('#dual_x_div').length > 0 && $('#geo_chart').length > 0) {
        var view = new overview();
        google.setOnLoadCallback(function () {
            view.drawVisualElements();
        });
        $(window).resize(function () {
            view.drawVisualElements();
        });
        view.drawVisualElements();

        $('a.fancy_box_container').fancybox({
            'titleShow': false
        });

    }
});

