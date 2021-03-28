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
        <router-link to="/past" exact>Past Transactions</router-link>
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
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
    height: 7%;
    width: 7%;
}
</style>