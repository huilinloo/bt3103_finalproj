<template>
    <div id = "container">
        <div id = "logo">
            <img class = "logo" src = "../assets/logo.png"/>
            <p>Say no to single-use plastics, <br>switch to reusable.</p>
        </div>
        <div id = "all_buttons">
            <h1> Welcome Back! </h1>
            <div id = "users">
                <button v-on:click = "toUserLogin">
                <img class = "icons" src = "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"/>
                 User Login</button>
                <br>
            </div>
            <div id = "merchants">
                <button v-on:click = "toMerchantLogin">
                <img class = "icons" src = "https://static.thenounproject.com/png/2286059-200.png"/>
                Merchant Login</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        toUserLogin() {
            this.$router.push('/login')
        },

        toMerchantLogin() {
            this.$router.push('/merchant-login')
        }
    }
}
</script>
<style scoped>
#container {
    width: 2000px;
    height: 1000px;
    margin: 20px;
    position: fixed;
    margin-top: 100px;
    margin-left: 200px;
}

button {
    display: block;
    border: solid #FCF6F5FF;
    border-width: 0 10px;
    border-radius: 10px;
    font-size: 20px;
    margin: 10px auto 15px;
    padding: 15px;
    font-family: Verdana;
    background-color: #FCF6F5FF;
}

button:hover {
    border: 5px solid black;
    display: block;
}

#logo {
    float: left;
    width: 50%;
    height: 1000px;
    background-color: #FCF6F5FF;
}

#logo > p {
    font-size: 24px;
    font-family: Verdana;
}

.logo {
    padding-top: 100px;
    width: 700px;
    height: auto;
}

.icons {
    width: 50px;
}

h1 {
    padding: 200px;
    color: #FCF6F5FF;
    font-family: Verdana;
    font-size: 70px;
}

#all_buttons {
    float: left;
    width: 50%;
    height: 1000px;
    background-color: #2BAE66FF;
}

</style>