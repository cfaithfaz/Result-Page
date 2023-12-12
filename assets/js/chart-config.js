
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart');
    
const labels = [
    'Realistic',
    'Investigative',
    'Artistic',
    'Social',
    'Enterprising',
    'Conventional',
  ];
  const bgprops = {
      borderColor: '#cccccc',
      borderWidth: 1,
      pointRadius: 0,
      fill: '-1',
      animation: {
        duration: 0
      }
  
    }
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Line',
          data: [65, 59, 90, 81, 56, 55],
  
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
          backgroundColor: '#f2f2f2',
          data: [20, 20, 20, 20, 20, 20],
          ...bgprops,
          fill: true
        },
        {
          backgroundColor: '#ffffff',
          data: [40, 40, 40, 40, 40, 40],
          ...bgprops
        },
        {
          backgroundColor: '#f2f2f2',
          data: [60, 60, 60, 60, 60, 60],
          ...bgprops
        },
        {
          backgroundColor: '#ffffff',
          data: [80, 80, 80, 80, 80, 80],
          ...bgprops
        },
        {
          backgroundColor: '#f2f2f2',
          data: [100, 100, 100, 100, 100, 100],
          ...bgprops
        },
      ]
    };
    const config = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          },
        },
        plugins: {
          legend: {
            display: false
          },
          // annotation: {
          //   annotations: {
          //     pentagon: {
          //       type: 'polygon',
          //       xScaleID: 'x',
          //       yScaleID: 'y',
          //       xMin: 0.5,
          //       xMax: 0.5,
          //       xValue: 1,
          //       yValue: 100,
          //       sides: 6,
          //       radius: parseFloat(getComputedStyle(ctx).fontSize),
          //       backgroundColor: 'rgba(255, 99, 132, 0.25)'
          //     }
          //   },
          // },
        },
        scales: {
          r: {
            min: 0, max: 100,
            ticks: {
              showLabelBackdrop: false,
              z: 100,
              stepSize: 20,
              padding: 6
  
            }
          }
        }
      },
  
    };
  const myChart = new Chart(ctx, config);
  console.log(parseFloat(getComputedStyle(ctx).fontSize));
  
});  

