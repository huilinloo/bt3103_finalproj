<template>
  <div class="newslist">
    <div class="announcements">
      <h1>ANNOUNCEMENTS</h1>
      <div class="announement-body">
        <br />
        <h3>31/03/2021 15:23</h3>
        <h2>
          GreenSG just got a new look! Now you can see how you rank against
          other Singaporeans
        </h2>
        <br /><br />
        <h3>15/03/2021 12:22</h3>
        <h2>Minor bug fixes</h2>
        <br /><br />
        <h3>20/02/2021 11:23</h3>
        <h2>
          We welcome Seastainable as our first sponsor. Now you can redeem
          Seastainable's metal straw set at only 500 points.
        </h2>
        <br /><br />
        <h3>29/01/2021 14:23</h3>
        <h2>
          Welcome to GreenSG. GreenSG is the first of its kind, a challenge to
          reducee plastic waste.
        </h2>
      </div>
    </div>
    <div class="container">
      <ul class="media-list">
        <li class="media" v-for="article in articles" :key="article.url">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.img" />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              <a v-bind:href="article.url" target="_blank">{{
                article.title
              }}</a>
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
//import axios from "axios";
export default {
  name: "newslist",
  data() {
    return {
      articles: [
        {
          title:
            "New Zealand introduces climate change law for financial firms in world first",
          author: "TODAY",
          description:
            "SYDNEY — New Zealand has become the first country to introduce a law that will require banks, insurers and investment managers to report the impacts of climate change on their business, minister for climate change James Shaw said on Tuesday (April 13).",
          url:
            "https://www.todayonline.com/world/new-zealand-climate-change-law-financial-firms-world-first",
          img:
            "https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/photos/43_images/nz_2.jpg?itok=7yjdeayn",
        },
        {
          title:
            "'Nothing about the Mekong is normal now’: Anger along Southeast Asia’s great river as water levels become unpredictable",
          author: "Jack Board",
          description: "The Mekong River has reached critical lows this year. ",
          url:
            "https://www.channelnewsasia.com/news/climatechange/mekong-low-water-level-sediment-nakhon-phanom-golf-14606940",
          img:
            "https://cna-sg-res.cloudinary.com/image/upload/q_auto,f_auto/image/14606988/16x9/670/377/705453773f8f06724f0884bec6d3fcd6/Sc/dry-mekong-0128-mod.jpg",
        },
        {
          title: "China and US pledge climate change commitment",
          author: "BBC",
          description:
            "China and the US say they are committed to working together and with other countries on tackling climate change.",
          url: "https://www.bbc.com/news/world-asia-china-56790077",
          img:
            "https://ichef.bbci.co.uk/news/976/cpsprodpb/C921/production/_118098415_d3a76730-004e-4332-a8be-e57bf4a55d16.jpg",
        },
        {
          title:
            "More than 5,000 tons of extraterrestrial dust fall to Earth each year",
          author: "CNRS",
          description:
            "Every year, our planet encounters dust from comets and asteroids. These interplanetary dust particles pass through our atmosphere and give rise to shooting stars. Some of them reach the ground in the form of micrometeorites. An international program conducted for nearly 20 has determined that 5,200 tons per year of these micrometeorites reach the ground.",
          url: "https://www.sciencedaily.com/releases/2021/04/210408131503.htm",
          img:
            "https://www.sciencedaily.com/images/2021/04/210408131503_1_540x360.jpg",
        },
        {
          title: "How many T. rexes were there? Billions",
          author: "University of California - Berkeley",
          description:
            "Analysis of what's known about the dinosaur leads to conclusion there were 2.5 billion over time",
          url: "https://www.sciencedaily.com/releases/2021/04/210415142623.htm",
          img:
            "https://www.sciencedaily.com/images/2021/04/210415142623_1_540x360.jpg",
        },
      ],
    };
  },
  /*methods: {
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
    }*/
};
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
  display: flex;
  justify-content: space-around;
}
.media-object {
  width: 300px;
  padding: 5px;
}
.media {
  border-top: 1px solid green;
  border-left: 5px solid green;
  border-right: 5px solid green;
  border-bottom: 1px solid green;
  padding-top: 10px;
  list-style: none;
}
</style>
