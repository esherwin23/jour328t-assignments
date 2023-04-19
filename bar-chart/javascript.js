//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

var xValues = ["America", "East Asia & Pacific", "Europe & Central Asia", "Middle East & North Africa", "South Asia", "Sub-Saharan Africa"];
var yValues = [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00];
var barColors = ['#003049', '#219ebc', '#d62828', '#f77f00', '#fcbf49', '#eae2b7']

//Create a function for our chart
var myChart = new Chart(ctx, {
    //Define the chart type
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },

//Define chart options
options: {
    responsive: true,
    plugins: {       
         //Chart title
        title: {
            display: true,
            text: 'GDP Per Capita By Region',
            font: {
                size: 18
            }
        },
        //Chart subtitle
        subtitle: {
            display: true,
            text: 'The United States has had the highest life expectancy compared some of the other largest countries in the world.'
        }
    },
    //Scale options
    scales: {
        y: {
            beginAtZero: true
        }
    },
},
});


