import axios from 'axios';

export default {
    data(){
        return {
            articles:[]
        }
    },
    methods:{
        getData: function() {
            axios.get('https://newsapi.org/v2/top-headlines?category=ennvironment&apiKey=04aa2326f23646caaaa6903108823610').then(response =>{
            this.articles=response.data.articles;
        })
    },
    mounted(){
        this.getData()
    }
}
}