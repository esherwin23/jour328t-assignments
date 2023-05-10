const ctx1 = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['African American', 'Latinx', 'Asian', 'Arab', 'White', 'Multiracial', 'Other'],
        datasets: [{
            label: 'Depression',
            data: [17.3, 19.4, 18.9, 24.5, 15.8, 20.2, 19.8],
            backgroundColor: [
                '#1e6091'
            ],
        },
        {
            label: 'Anxiety',
            data: [11.9, 19.3, 14.6, 23.9, 17.8, 22.2, 18.7],
            backgroundColor: [
                '#007f5f'
            ],
        },
        {
            label: 'Eating disorder',
            data: [15.1, 18.9, 19.8, 27.4, 15.4, 19.6, 14.9],
            backgroundColor: [
                '#34a0a4'
            ],
        },
        {
            label: 'Non-suicidal self-injury',
            data: [9.8, 13.7, 14.7, 10.8, 15.7, 20.9, 17.1],
            backgroundColor: [
                '#52b69a'
            ],
        },
        {
            label: 'Suicidal ideation',
            data: [7.2, 7.7, 6.8, 6.9, 7.7, 10.8, 9.9],
            backgroundColor: [
                '#99d98c'
            ],
        },
        {
            label: 'Any problem',
            data: [40.1, 44.0, 43.6, 53.4, 41.1, 48.7, 43.8],
            backgroundColor: [
                '#d9ed92'
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        width: 100,
        plugins: {
            title: {
                display: true,
                text: 'Mental Health of College Students by Race',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'People of color generally experience higher degrees of mental illness.'
            },
            sourcePlugin: {
                source: "Journal of Adolescent Health"
            },
            source: "Journal of Adolescent Health"
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                title: {
                    display: true,
                    text: "Race"
                }
            },
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: "Weighted percentage of the sample"
                }
            }
        },
    },
});


//line chart--------------------------------------------------------------
//Create a function for our chart
const ctx2 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
 type: 'line',
 data: {
    labels: ['2013', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21'],
    datasets: [{
        label: 'American Indian/Alaskan Native',
        data: [6.2, 24.9, 30.5, 30.7, 37.0, 45.7, 50.0, 43.5],
        fill: false,
        borderColor: ['#d9ed92'],
        backgroundColor: ['#d9ed92'],
        tension: 0.1
    },
    {
        label: 'Arab American',
        data: [25.7, 27.2, 28.7, 32.8, 40.9, 43.0, 44.3, 43.3],
        fill: false,
        borderColor: ['#34a0a4'],
        backgroundColor: ['#34a0a4'],
        tension: 0.1
    },
    {
        label: 'APIDA',
        data: [22.5, 21.0, 27.1, 31.5, 38.6, 33.0, 34.7, 39.5],
        fill: false,
        borderColor: ['#007f5f'],
        backgroundColor: ['#007f5f'],
        tension: 0.1
    },
    {
        label: 'Black',
        data: [24.0, 20.3, 29.5, 29.2, 34.4, 34.5, 35.2, 34.7],
        fill: false,
        borderColor: ['#184e77'],
        backgroundColor: ['#184e77'],
        tension: 0.1
    },
    {
        label: 'Latino',
        data: [21.5, 24.7, 31.3, 33.2, 40.1, 40.8, 41.6, 44.4],
        fill: false,
        borderColor: ['#1e6091'],
        backgroundColor: ['#1e6091'],
        tension: 0.1
    },
    {
        label: 'Multiracial',
        data: [23.1, 23.1, 32.7, 36.4, 42.2, 46.8, 43.7, 48.2],
        fill: false,
        borderColor: ['#99d98c'],
        backgroundColor: ['#99d98c'],
        tension: 0.1
    },
    {
        label: 'White',
        data: [15.4, 18.8, 24.5, 30.1, 36.3, 35.1, 36.2, 40.4],
        fill: false,
        borderColor: ['#52b69a'],
        backgroundColor: ['#52b69a'],
        tension: 0.1
    }
   ]
    },
options: {
    responsive: true,
    plugins: {       
        title: {
            display: true,
            text: 'Prevalence of depression among college students by race from 2013-2021',
            font: {
                size: 18
            }
        },
        //Chart subtitle
        subtitle: {
            display: true,
            text: 'There was an overall increase in depression prevalence among all races between 2013 and 2021.'
        }
    },
    //Scale options
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: "Weighted annual prevalence percentage"
            }
        },
        x: {
            title: {
                display: true,
                text: "Year"
            }
        }
    },
},
});

// scatterplot --------------------------------------------------------------------
const ctx3 = document.getElementById('chart3').getContext('2d');
const chart3 = new Chart(ctx3, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 25.5, y: 21.3},
                ],
                label: "African American",
                borderColor: "#184e77",
                backgroundColor: "#184e77",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 33.0, y: 36.9},
                ],
                label: "Latinx",
                borderColor: "#1e6091",
                backgroundColor: "#1e6091",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 22.7, y: 24.4},
                ],
                label: "Asian",
                borderColor: "#007f5f",
                backgroundColor:"#007f5f",
                borderWidth:2,

             }, { 
                data: [
                {x: 36.4, y: 39.9},
                ],
                label: "Arab",
                borderColor: "#34a0a4",
                backgroundColor:"#34a0a4",
                borderWidth:2,
                
            }, { 
                data: [
                {x: 45.5, y: 47.9,},
                ],
                label: "White",
                borderColor: "#52b69a",
                backgroundColor:"#52b69a",
                borderWidth:2,

            }, { 
                data: [
                {x: 44.0, y: 44.7},
                ],
                label: "Multiracial",
                borderColor: "#99d98c",
                backgroundColor:"#99d98c",
                borderWidth:2,

            }, { 
                data: [
                {x: 38.4, y: 38.3},
                ],
                label: "Other",
                borderColor: "#d9ed92",
                backgroundColor:"#d9ed92",
                borderWidth:2,
            }
            ]
          },
          options: {
            responsive: true,
            plugins: {       
                title: {
                    display: true,
                    text: 'Help-seeking by race: Diagnosis and treatment use',
                    font: {
                        size: 18
                    }
                },
                //Chart subtitle
                subtitle: {
                    display: true,
                    text: 'The following scatterplot measures the correlating relationship between students with diagnosed mental health conditions and past-year treatment.'
                }
            },
            //Scale options
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Percentage of students with diagnosed health conditions"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Percentage of students with any past-year treatment"
                    }
                }
            },
        },
        });




