<template>
  <div class="newslist">
      <div class="announcements">
          <h1> ANNOUNCEMENTS </h1>
          <div class="announement-body">
        <h3> 31/03/2021  15:23</h3>
        <h2> GreenSG just got a new look! Now you can see how you rank against other Singaporeans </h2>
        </div>
    </div>
    <div class="container">
        <ul class="media-list">
            <li class="media" v-for="article in articles" :key=article.url>
                <div class="media-left">
                    <a v-bind:href="article.url" target="_blank">
                        <img class="media-object" v-bind:src="article.urlToImage">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">
                        <a v-bind:href="article.url" target="_blank">{{ article.title}}</a>
                    </h4>
                    <h5>
                        <i>by {{ article.author }}</i>
                    </h5>
                    <p>{{ article.description }}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'newslist',
    data(){
        return {
            articles: []
        }
    },
    methods: {
        getData: function(){
            axios
            .get('https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=04aa2326f23646caaaa6903108823610')
            .then(response => {
                this.articles = response.data.articles;
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>
h1 {
    text-decoration: underline;
}
.announcements {
    width: 100%;
}
.announcement-body {
    border-left: 5px solid green;
    border-right: 5px solid green;
    padding-top: 10px;
}
.newslist {
    display:flex;
    justify-content:space-around;
}
.media-object {
    width: 300px;
    padding: 5px;
}
.media {
    border-top: 1px solid green;
    border-left: 5px solid green;
    border-right: 5px solid green;
    padding-top: 10px;
    list-style: none;
}
</style>