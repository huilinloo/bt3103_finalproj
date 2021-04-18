import {Line, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default{
    extends:Line,
    mixins: [reactiveProp],
    options: {
        layout:{
            padding:{
                left: 5,
                right: 0,
                top: 0,
                bottom: 10
            }
        },
        legend: {
            position:'left',
            labels: {
                fontSize: 25
            }
        }
    },
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}