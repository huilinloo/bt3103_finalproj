<template>
  <div>
    <ul>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/profile" exact>Profile</router-link>
      </li>
      <li>
        <router-link to="/leaderboard" exact>Leaderboard</router-link>
      </li>
      <li>
        <router-link to="/rewards" exact>Rewards</router-link>
      </li>
      <img src = "../assets/logo.png" alt = "not found"/>
      <li>
        <router-link to="/newsroom" exact>Newsroom</router-link>
      </li>
      <li>
        <router-link to="/history" exact>History</router-link>
      </li>
      <li>
        <router-link to="/help" exact>Help</router-link>
      </li>
      <li>
        <router-link to="/logout" exact>Log Out</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

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
</style>