//Step 2 -- Define Routes
import Loginall from './components/Login-all.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Leaderboard from './components/Leaderboard.vue'
import Rewards from './components/Rewards.vue'
import Newsroom from './components/Newsroom.vue'
import History from './components/History.vue'
import Help from './components/Help.vue'
import Signup from './components/Signup.vue'
import Forgotpassword from './components/Forgot-password.vue'
import Merchantlogin from './components/Merchant-login.vue'
import Merchantinputs from './components/Merchant-inputs.vue'

export default[
    { path: '/', component: Loginall, props:true},
    { path: '/home', component: Home, props:true, name: 'home'},
    { path: '/profile', component: Profile, props:true},
    { path: '/leaderboard', component:Leaderboard, props:true, name: 'leaderboard'},
    { path: '/rewards', component:Rewards, props:true},
    { path: '/newsroom', component:Newsroom, props:true},
    { path: '/history', component:History, props:true},
    { path: '/help', component:Help, props:true},
    { path: '/login', component:Login, props: true},
    //{ path: '/logout', componet:Logout, props: true}
    { path: '/signup', component:Signup, props:true},
    { path: '/forgot-password', component:Forgotpassword, props:true},
    { path: '/merchant-login', component:Merchantlogin, props:true},
    { path: '/merchant-inputs', component:Merchantinputs, props:true}
]