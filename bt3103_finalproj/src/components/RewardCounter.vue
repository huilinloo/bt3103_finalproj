<template>
  <div>
    <button v-on:click="clicked">Redeem points</button>
  </div>
</template>
<script>
import database from '../firebase.js'
export default {
  props: {
    reward: {
      type: Object
    }
  },
  methods: {
      clicked: function() {
        if (this.points >= 500) {
        alert("Redeemption successful. Take a photo of this page and show to the respective merchant");
        var updatedPoints = this.points - 500;
        database.collection('users').doc('1').update({
            points: updatedPoints
        }).then(() => location.reload());
        } else{
            alert("Redemption unsuccessful. Save more plastic!")
        }
        this.$emit('clicker', this.reward)
    }
  }
};
</script>
<style scoped>
button {
    background-color: #4CAF50;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 24px;
    transition-duration: 0.4s;
    padding: 10px 50px;
}
</style>