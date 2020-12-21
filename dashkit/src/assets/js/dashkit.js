//
// dashkit.js
// Theme module
//

'use strict';


// Header
//
// Header card chart

(function() {

  //
  // Variables
  //
  
  var chart = document.getElementById('headerChart');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              color: '#283E59',
              zeroLineColor: '#283E59'
            },
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '' + value + 'k PLN';
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'k PLN</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        datasets: [{
          label: 'Zarobki',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });
  };


  //
  // Events
  //
  
  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();


// Header 2
//
// Header 2 card chart

(function() {

  //
  // Variables
  //
    
    var chart = document.getElementById('headerChart2').getContext('2d');

    //
    // Functions
    //

    function init(chart) {
      new Chart(chart, {
        type: 'line',
        options: {
          scales: {
            yAxes: [{
              gridLines: {
                color: '#283E59',
                zeroLineColor: '#283E59'
              },
              ticks: {
                callback: function(value) {
                  if ( !(value % 10) ) {
                    return '' + value + 'k PLN';
                  }
                }
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function(item, data) {
                var label = data.datasets[item.datasetIndex].label || '';
                var yLabel = item.yLabel;
                var content = '';

                if (data.datasets.length > 1) {
                  content += '<span class="popover-body-label mr-auto">' + label + '</span>';
                }

                content += '<span class="popover-body-value">' + yLabel + 'k PLN</span>';
                return content;
              }
            }
          }
        },
        data: {
          labels: ['Lis', 'Gru', 'Sty'],
          datasets: [{
            label: 'Wartość jednostki udziałowej',
            data: [-20,15,100]
          }]
        }
      });
    };


    //
    // Events
    //
    
    if (typeof Chart !== 'undefined' && chart) {
      init(chart);
    }


})();

// Header 2
//
// Header 2 card chart

(function() {

  //
  // Variables
  //
  
  var chart = document.getElementById('headerChart3');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              color: '#283E59',
              zeroLineColor: '#283E59'
            },
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '' + value + 'k PLN';
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'k PLN</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        datasets: [{
          label: 'Zarobki',
          data: [0,10,5,15,10,30,20,50,120,80,200,450]
        }]
      }
    });
  };


  //
  // Events
  //
  
  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();


// Performance
//
// Performance card chart

(function() {

  //
  // Variables
  //

  var chart = document.getElementById('performanceChart');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'k PLN</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        datasets: [{
          label: 'Zarobki',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });
  }


  //
  // Events
  //

  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();


// Performance alias
//
// Performance alias card chart

(function() {

  //
  // Variables
  //

  var chart = document.getElementById('performanceChartAlias');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'k PLN</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        datasets: [{
          label: 'Zarobki',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });
  }


  //
  // Events
  //

  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();


// Orders
//
// Orders card chart

(function() {

  //
  // Variables
  //

  var chart = document.getElementById('ordersChart');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '' + value + 'k PLN'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'k PLN</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        datasets: [{
          label: 'Wpłaty',
          data: [25,20,30,22,17,10,18,26,28,26,20,32]
        }]
      }
    });
  }


  //
  // Events
  //

  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }
  
})();


// Orders alias
//
// Orders alias card chart

(function() {

  //
  // Variables
  //

  var chart = document.getElementById('ordersChartAlias');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '' + value + 'k PLN'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'k PLN</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        datasets: [{
          label: 'Wpłaty',
          data: [25,20,30,22,17,10,18,26,28,26,20,32]
        }]
      }
    });
  }


  //
  // Events
  //

  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }
  
})();


// Devices
//
// Devices card chart

(function() {

  //
  // Variables
  //

  var chart = document.getElementById('devicesChart');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            title: function(item, data) {
              var title = data.labels[item[0].index];
              return title;
            },
            label: function(item, data) {
              var value = data.datasets[0].data[item.index];
              var content = '';

              content += '<span class="popover-body-value">' + value + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Footroll', 'Spółka A', 'Spółka B'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: [
            '#2C7BE5',
            '#A6C5F7',
            '#D2DDEC'
          ]
        }]
      }
    });
  }


  //
  // Events
  //

  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();


// Weekly hours
//
// Weekly hours card chart

(function() {

  //
  // Variables
  //

  var chart = document.getElementById('weeklyHoursChart');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return value + 'hrs'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'hrs</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'],
        datasets: [{
          data: [21, 12, 28, 15, 5, 12, 17, 2]
        }]
      }
    });
  }


  //
  // Events
  //

  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();


// Sparkline
//
// Sparkline card chart

(function() {

  //
  // Variables
  //
  
  var chart = document.getElementById('sparklineChart');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
            radius: 0,
            hoverRadius: 0
          }
        },
        tooltips: {
          custom: function() {
            return false;
          }
        }
      },
      data: {
        labels: new Array(9),
        datasets: [{
          data: [0, 15, 10, 25, 30, 15, 40, 50, 5]
        }]
      }
    });
  };


  //
  // Events
  //
  
  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();



// Sparkline
//
// Sparkline card chart

(function() {

  //
  // Variables
  //
  
  var chart = document.getElementById('sparklineChart2');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0,
            radius: 0,
            hoverRadius: 0
          }
        },
        tooltips: {
          custom: function() {
            return false;
          }
        }
      },
      data: {
        labels: new Array(9),
        datasets: [{
          data: [0, 15, 10, 45, 30, 15, 100, 50, 400]
        }]
      }
    });
  };


  //
  // Events
  //
  
  if (typeof Chart !== 'undefined' && chart) {
    init(chart);
  }

})();


// Sparkline
//
// Sparkline card charts (gray)

(function() {

  //
  // Variables
  //
  
  var charts = document.querySelectorAll('#sparklineChartSocialOne, #sparklineChartSocialTwo, #sparklineChartSocialThree, #sparklineChartSocialFour');


  //
  // Functions
  //

  function init(chart) {
    new Chart(chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2,
            borderColor: '#D2DDEC'
          },
          point: {
            hoverRadius: 0
          }
        },
        tooltips: {
          custom: function() {
            return false;
          }
        }
      },
      data: {
        labels: new Array(12),
        datasets: [{
          data: [0, 15, 10, 25, 30, 15, 40, 50, 80, 60, 55, 65]
        }]
      }
    });
  };


  //
  // Events
  //
  
  if (typeof Chart !== 'undefined' && charts) {
    [].forEach.call(charts, function(el) {
      init(el);
    });
  }

})();


// Orders select
//
// Select all checkboxes

(function() {

  //
  // Variables
  //

  var ordersSelect = document.querySelectorAll('[name="ordersSelect"]');
  var ordersSelectAll = document.getElementById('ordersSelectAll');


  //
  // Functions
  //

  function selectAll(el) {
    [].forEach.call(ordersSelect, function(checkbox) {
      checkbox.checked = el.checked;
    });
  }


  //
  // Events
  //

  if (ordersSelect && ordersSelectAll) {
    ordersSelectAll.addEventListener('change', function() {
      selectAll(this);
    });
  }

})();

// function addData(chart, label, data) {
//   chart.data.labels = label
//   chart.data.datasets.forEach((dataset) => {
//       dataset.data = data;
//   });
//   chart.update();
// }

// function updateChartData(chart, label, data)
// {
//   var $chart = document.getElementById(chart);
//   console.log($chart);
//   console.log(label);
//   console.log(data);
//   $chart.data.labels.pop();
//   $chart.data.datasets.forEach((dataset) => {
//       dataset.data.pop();
//   });
//   $chart.data.labels.push(label);
//   $chart.data.datasets.forEach((dataset) => {
//       dataset.data.push(data);
//   });
//   $chart.update();
// }

// $(document).ready(function(){

//   $('*[data-chart]').on('click', function() {
//     console.log($($(this).data('chart')));
//     addData($($(this).data('chart')), $(this).data('labels'), $(this).data('sets'));
//   });

// });