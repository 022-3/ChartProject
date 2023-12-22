
// ---------- CHARTS ----------

// BAR CHART
var barsChartOptions = {
  series: [{
  name: 'Helix',
  data: [54, 25, 71, 54, 25, 71,54, 25,71, 54, 25,71]
}, {
  name: 'Knoxx',
  data: [43, 33, 40, 43, 33, 40,43, 33, 40, 43, 33, 40]
}, {
  name: 'Stella',
  data: [40, 45, 41, 40, 45, 41,40, 45, 41, 40, 45, 41]
},
{
  name: 'Stella',
  data: [51, 27, 85, 51, 27, 85,51, 27, 85, 51, 27, 85]
}, {
  name: 'Stella',
  data: [81, 38, 65, 81, 38, 65,81, 38, 65, 81, 38, 65]
}, {
  name: 'Knoxx-Quad',
  data: [61, 58, 85, 61, 58, 85,61, 58, 85, 61, 58, 85]
}],
  chart: {
  type: 'bar',
  height: 380,
  stacked: true,
  toolbar: {
    show: true
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -5,
      offsetY: 0
    }
  }
}],

colors: ['#d50000','#ee82ee',' #ffa500', '#EBA212', '#2e7d32', '#86BDEd',],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 5,
    columnWidth: '40%',
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 600
        }
      }
    }
  },
},

stroke: {
  colors: ['transparent'],
  show: true,
  width: 2,
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'
  ], 
  axisBorder: {
    color: '#55596e',
    show: true,
  },
  axisTicks: {
    color: '#55596e',
    show: true,
  },
},

yaxis: {
  title: {
    text: 'Count',
    style: {
      fontSize:'1.5rem',
      color: 'black',
      padding:'10px',
    },
  },
  axisBorder: {
    color: '#55596e',
    show: true,
  },
  axisTicks: {
    color: '#55596e',
    show: true,
  },
  labels: {
    style: {
      colors: 'black',
    },
  },
},
grid: {
  borderColor: '#000000',
  yaxis: {
    lines: {
      show: false,
    },
  },
}
,
legend: {
  position: 'right',
  offsetY: 30,
  offsetX: 0,
},
fill: {
  opacity: 1
}
};

var chart = new ApexCharts(document.querySelector("#bars-chart"), barsChartOptions);
chart.render();




const barChartOptions = {
  series: [
    {
      data: [12,8,14,12,8,14, 12,8, 14,12],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 380,
    toolbar: {
      show: false,
    },
  },
  colors: ['#ee82ee','#ffa500', '#d50000', '#2e7d32', '#ff6d00', '#3cb371','#ee82ee','#ffa500', '#d50000', '#2e7d32', '#ff6d00', '#3cb371'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: false,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    labels: {
      colors: 'black',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
    title: {
      style: {
        color: 'black',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
    title: {
      style: {
        color: 'black',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: 'black',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: 'black',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [{
  name: 'Helix',
  data: [3, 40, 114, 51, 222, 109, 300,133, 240, 43, 133, 340]
}, {
  name: 'Knoxx',
  data: [3, 240, 54, 451, 22, 209, 250,233, 240, 143, 333, 40]
},
{
  name: 'Syella',
  data: [9, 327, 85, 51, 427, 185,251, 227, 85, 151, 107, 85]
},
{
  name: 'Jhon',
  data: [11, 327, 85, 151, 427, 185,151, 227, 385, 151, 87, 185]
}, {
  name: 'Knoxx-Quad',
  data: [10, 8, 185, 461, 58, 185,261, 58, 385, 61, 158, 85]
}],

  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#d50000','#ee82ee',' #ffa500', '#2e7d32', '#86BDEd',],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.02,
      shadeIntensity: 2,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#CCCCCC',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    labels: {
      colors: '#55596e',
    },
    show: true,
    position: 'top',
  },
  /*markers: {
    size: 5,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },*/
  stroke: {
    width: 1,
    curve: 'straight',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#55596e',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#000000',
          fontSize:'1.3rem',
        },
      },
      axisBorder: {
        color: '#55596e',
        show: true,
      }, 
    axisTicks: {
      color: '#55596e',
      show: true,
    },
      labels: {
        style: {
          colors: ['#'],
        },
      },
    },
    
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();
