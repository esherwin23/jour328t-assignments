//call the html element where the chart will appear
var ctx = document.getElementById('myChart').getContext('2d');

//Create a function for our chart
var myChart = new Chart(ctx, {
    //Define the chart type
 type: 'line',
 data: {
    //These are the chart labels
    labels: ['1800',	'1825',	'1850',	'1875',	'1900',	'1925',	'1950',	'1975',	'2000',	'2021'],
    //This is the data for each bar
   datasets: [{
        label: 'China',
        data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
        fill: false,
        borderColor: ['#264653'],
        backgroundColor: ['#264653'],
        tension: 0.1},
    {
        label: 'Brazil',
        data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44, 76.33],
        fill: false,
        borderColor: ['#2a9d8f'],
        backgroundColor: ['#2a9d8f'],
        tension: 0.1},
    {
        label: 'India',
        data: [25.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34, 69.77],
        fill: false,
        borderColor: ['#e9c46a'],
        backgroundColor: ['#e9c46a'],
        tension: 0.1},
    {
        label: 'Indonesia',
        data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
        fill: false,
        borderColor: ['#f4a261'],
        backgroundColor: ['#f4a261'],
        tension: 0.1},
    {
        label: 'United States',
        data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
        fill: false,
        borderColor: ['#e76f51'],
        backgroundColor: ['#e76f51'],
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
            text: 'Life expectancy in largest countries in the world over time',
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


