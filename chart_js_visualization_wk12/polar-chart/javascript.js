const chartCanvas = document.getElementById('myChart');

var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Total offender count',
              'Total individual victims',
              'Victim count'
            ],
            datasets: [{
              label: '2000',
              data: [7699, 7980, 10128],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
            {
              label: '2020',
              data: [7588, 10182, 13130],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
          },
          options: {
            responsive: true,
            plugins: {
            title: {
              display: true,
              text: 'Hate crime victim and offender counts in 2000 and 2020'
            },
          subtitle: {
              display: true,
              text: 'There has been a significant increase in the number of hate crime victims in the last 20 years or so.'
          },
            elements: {
              line: {
                borderWidth: 3
              }
            }
          }
        }
        });

        const chartSource = document.createElement('div');
        const chartParent = chartCanvas.parentNode;
        chartParent.insertBefore(chartSource, chartCanvas.nextSibling);
        chartSource.innerHTML = '<div style="text-align:center;">Source: FBI Uniform Crime Reporting Program, ProPublica\'s Documenting Hate Project</div>';


