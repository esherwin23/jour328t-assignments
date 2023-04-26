const chartCanvas = document.getElementById('myChart');

//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

var xValues = ["California", "New  Jersey", "New York", "Michigan", "Massachusetts", "Ohio", "Washington", "Texas", "Arizona", "Virginia"];
var yValues = [26103, 13283, 12139, 9419, 8087, 6494, 6057, 5540, 4796, 4627];
var barColors = ['#03071E', '#370617', '#6A040F', '#9D0208', '#D00000', '#DC2F02', '#E85D04', '#F48C06', '#FAA307', '#FFBA08']

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
            text: 'Top 10 states with the highest number of hate crimes from 2000-2020',
            font: {
                size: 18
            }
        },
        //Chart subtitle
        subtitle: {
            display: true,
            text: 'California has significantly had the most hate crimes across a 20-year span.'
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
const chartSource = document.createElement('div');
const chartParent = chartCanvas.parentNode;
chartParent.insertBefore(chartSource, chartCanvas.nextSibling);
chartSource.innerHTML = '<div style="text-align:center;">Source: FBI Uniform Crime Reporting Program, ProPublica\'s Documenting Hate Project</div>';

