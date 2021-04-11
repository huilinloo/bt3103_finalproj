//Step 2 -- Define Routes
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Leaderboard from './components/Leaderboard.vue'
import Rewards from './components/Rewards.vue'
import Newsroom from './components/Newsroom.vue'
import History from './components/History.vue'
import Help from './components/Help.vue'
//import Logout from './components/Logout.vue'
import Signup from './components/Signup.vue'
import Forgotpassword from './components/Forgot-password.vue'
import Merchantlogin from './components/Merchant-login.vue'
import Merchantinputs from './components/Merchant-inputs.vue'

export default[
    { path: '/', component: Login},
    { path: '/home', component: Home},
    { path: '/profile', component: Profile},
    { path: '/leaderboard', component:Leaderboard},
    { path: '/rewards', component:Rewards},
    { path: '/newsroom', component:Newsroom},
    { path: '/history', component:History},
    { path: '/help', component:Help},
    //{ path: '/logout', componet:Logout}
    { path: '/signup', component:Signup},
    { path: '/forgot-password', component:Forgotpassword},
    { path: '/merchant-login', component:Merchantlogin},
    { path: '/merchant-inputs', component:Merchantinputs},
]