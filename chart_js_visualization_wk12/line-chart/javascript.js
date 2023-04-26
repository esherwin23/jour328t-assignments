const chartCanvas = document.getElementById('myChart');
//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {
    //Define the chart type
 type: 'line',
 data: {
    //These are the chart labels
    labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    //This is the data for each bar
   datasets: [{
        label: 'Number of incidents',
        data: [8219, 9730, 7485, 7545, 7685, 7411, 7715, 7625, 8039, 6613, 6633, 6299, 6594, 6044, 5599, 5871, 6276, 7321, 7171, 7892, 9795],
        fill: false,
        borderColor: ['red'],
        backgroundColor: ['red'],
        tension: 0.1},
   ]
},

//Define chart options
options: {
    responsive: true,
    plugins: {       
         //Chart title
        title: {
            display: true,
            text: 'Total number of hate crimes per year from 2000-2020',
            font: {
                size: 18
            }
        },
        //Chart subtitle
        subtitle: {
            display: true,
            text: 'Hate crimes have been steadily increasing since 2014 following a previous decline since 2000.'
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

