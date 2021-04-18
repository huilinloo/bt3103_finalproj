import {Doughnut} from 'vue-chartjs'

export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['Progress to goal', 'Weekly goal left'],
          datasets: [
            {
              label: 'Ryan',
              data: [169, 31],
              backgroundColor:['#40bf40','#d8f3d8'],
              borderWidth:0,
              borderColor:"#000"
            },
          ]
          
        },
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
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}