<template>
  <div>
      <img src = "../assets/logo.png" style="width:200px" alt = "not found"/>
      <div class="login">
          <form>
              <h3><Strong>MERCHANT PORTAL</Strong></h3><br>

              <div class="form-group">
                  <label>ID</label>
                  <input type="id" class="form-control form-control-lg" v-model="id"/>
              </div>

              <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control form-control-lg" v-model="password"/>
              </div>

              <button type="submit" class="btn btn-dark btn-lg btn-block" @click="checkPassword()">Sign In</button>

              <p class="forgot-password text-right mt-2 mb-4">
                  <router-link to="/forgot-password">Forgot password ?</router-link>
              </p>

          </form>
      </div>
  </div>
</template>

<script>
import database from '../firebase.js'

  export default {
      data() {
          return {
            id:"",
            password:"",
            authenticated: false,
            users: []
          }
      },
      methods: {
        fetchItem:function(){
          database.collection('merchants').get().then((querySnapShot)=>{
            let item={}
            querySnapShot.forEach(doc=>{
              item=doc.data()
              item.id=doc.id
              this.users.push([item.id,item]) 
            })      
          })    
        },   
        checkPassword: function() {
          for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user[0] == this.id && user[1].password == this.password) {
              this.authenticated = true;
            }
          }

          if (this.authenticated == true) {
            this.$router.push('merchant-inputs')
          } else {
            alert("Invalid credentials entered!")
          }
        }
    },
    created() {
        this.fetchItem()
    } 
  }
</script>

<style scoped>
* {
  box-sizing: border-box;
}

img {
  width: 1500px;
  opacity: 0.85;
  padding-bottom: 10px;
}

body {
  background: #2554FF !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: #2554FF;
}

.login {
	position: relative;
	padding: 30px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	border-radius: 6px;
	background: #FFF;
    position:absolute;
    top:30%;
    left:42%;
    margin-top:-50px; /* this is half the height of your div*/  
    margin-left:-100px; /*this is half of width of your div*/
}

/* Style all input fields */
input {
  width: 500px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}
</style>