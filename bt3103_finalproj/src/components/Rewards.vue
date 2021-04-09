<template>
    <div id = "rewards">
        <div class = "pts_desc">
            <h2>You have </h2>
            <b id = "num_pts">1000</b>   <span id = "pts">Pts</span>
        </div>
        <br>
        <button>Tap to see breakdown of Pts -> </button>
        <br><br>
        <button id = "redeem">Redeem Pts </button>
        <!--<div class = "featured">
            <h3>Featured Rewards</h3>
        </div>-->
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style scoped>
h2 {
    font-size: 30px;
}
#redeem {
    background-color: #4CAF50;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 24px;
    transition-duration: 0.4s;
    padding: 10px 50px;
}

#redeem:hover {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
}

#num_pts {
    font-size: 60px;
    padding-right: 10px;
    padding-bottom: 20px;
}

#pts {
    font-size: 30px;
}

/*
.featured {
    text-align: left;
}
*/
</style>