import {Line} from 'vue-chartjs'
export default{
    extends:Line,
    data: () => ({
        chartdata: {
          labels: ['Monday', 'Tuesday','Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [
            {
              label: 'This week',
              data: [1.2, 3, 2.9, 5.1,2.8,4.8, 3.8],
              borderWidth:2.5,
              borderColor: "#004d99",
              backgroundColor:"#e6f3ff"
            },
            {
                label: 'Last week',
                data: [3.3,2.3,3.2,1.8,4.1,3,2.5],
                borderWidth:2.5,
                borderColor:"#c2d6d6",
                fill:false  
                
              }
          ]
          
        },
        options: {
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            }
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}