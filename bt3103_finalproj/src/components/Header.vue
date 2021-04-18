<template>
  <div>
    <ul>
      <li>
        <router-link to="/home" exact v-bind:userid="this.$route.params.userid">Home</router-link>
      </li>
      <li>
        <router-link to="/profile" exact v-bind:userid="this.$route.params.userid">Profile</router-link>
      </li>
      <li>
        <router-link to="/leaderboard" exact v-bind:userid="this.$route.query.userid">Leaderboard</router-link>
      </li>
      <li>
        <router-link to="/rewards" exact v-bind:userid="this.$route.params.userid">Rewards</router-link>
      </li>
        <router-link to="/home" exact>
        <img src = "../assets/logo.png" style="width:200px" alt = "not found"/>
        </router-link>
      <li>
        <router-link to="/newsroom" exact>Newsroom</router-link>
      </li>
      <li>
        <router-link to="/history" exact v-bind:userid="this.$route.params.userid">History</router-link>
      </li>
      <li>
        <router-link to="/help" exact>Help</router-link>
      </li>
      <li>
        <a class="nav-link" @click.prevent="signOut">Sign out</a>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            path: "/"
          });
        });
    }
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  width:100%;
  height:100px;
  background-color:#6bc7a4;
}
li {
  flex-grow: 1;
  flex-basis: 150px;
  text-align: center;
  padding: 10px;
  margin: 10px;
  color: black;
  font-size: 30px;
}
a {
  color: black;
  text-decoration: none;
  font-weight:bold;

}
img {
    height: 100px;
    width: 7%;
}
.router-link-active{
    color: white;
    text-decoration: underline; 
}
</style>