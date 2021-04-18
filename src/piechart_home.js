import {Pie, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default{
    extends:Pie,
    mixins: [reactiveProp],
    data () {
        return {
          options: { 
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