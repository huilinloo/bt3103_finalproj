import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default{
    extends:Bar,
    mixins: [reactiveProp],
    data () {
        return {
          options: { 
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: true
                }
              }],
              xAxes: [ {
                gridLines: {
                  display: false
                }
              }]
            },
            legend: {
                labels: {
                    fontSize: 30
                }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        }
    },
    mounted(){
        this.renderChart(this.chartdata,this.options)
    },
}