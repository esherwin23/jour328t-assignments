var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#f72585",
                backgroundColor: "#f72585",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#b5179e",
                backgroundColor: "#b5179e",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#7209b7",
                backgroundColor:"#7209b7",
                borderWidth:2,

             }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#560bad",
                backgroundColor:"#560bad",
                borderWidth:2,
                
            }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#480ca8",
                backgroundColor:"#480ca8",
                borderWidth:2,

            }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#3a0ca3",
                backgroundColor:"#3a0ca3",
                borderWidth:2,

            }, { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#3f37c9",
                backgroundColor:"#3f37c9",
                borderWidth:2,

            }, { 
                data: [
                {x: 65.8, y: 45986},
                ],
                label: "Bangladesh",
                borderColor: "#4361ee",
                backgroundColor:"#4361ee",
                borderWidth:2,

            }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#4895ef",
                backgroundColor:"#4895ef",
                borderWidth:2,
              }
            ]
          },
          options: {
            title: {
                display: true,
                text: 'Top 10 Life Expectancy and GDP Across the Globe',
                font: {
                    size: 18
                }
            },
            //Chart subtitle
            subtitle: {
                display: true,
                text: 'The United States is one of the only countries in the world to have both a high life expectancy and high GDP per capita.'
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
Footer



