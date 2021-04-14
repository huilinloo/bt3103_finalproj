<template>
  <div class="container">
    <img src="https://i.postimg.cc/3x2ksmnP/forest-bathing.jpg">
        <div class="login">
          <h3><Strong>Login</Strong></h3><br>
          <p> email: happy21@gmail.com </p>
          <p> ps: L1234567x! </p>

            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
                <label for="email">Email Address</label>
                <input 
                    id="email"
                    type="email"
                    class="form-control form-control-lg"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                />
                <label for="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    class="form-control form-control-lg"
                    name="password"
                    required
                    v-model="form.password"
                  />
                
                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
                <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password">Forgot password ?</router-link>
                </p>

              <p class="signup">
                  <router-link to="/signup">Don't have an account yet? Join us today!</router-link>
              </p>

              <div class="social-icons">
                  <ul>
                      <li><a href="#"><i class="fa fa-google"></i></a></li>
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  </ul>
              </div>
            </form>
        </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null,
      userid: ""
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((userCredential)  => {
          var user = userCredential.user;
          this.userid = user.uid;
          alert(this.userid)
          this.$router.push({
            name: 'home', query: {userid: this.userid}
          });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

img {
  width: 1200px;
  opacity: 0.85;
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

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a i {
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.social-icons ul li a:focus i,
.social-icons ul li a:active i {
  transition: none;
  color: #222222;
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