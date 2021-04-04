//Step 2 -- Define Routes
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Leaderboard from './components/Leaderboard.vue'
import Rewards from './components/Rewards.vue'
import Newsroom from './components/Newsroom.vue'
import PastTransactions from './components/PastTransactions.vue'
import Help from './components/Help.vue'
import Logout from './components/Logout.vue'
export default[
    //{ path: '/', component: Home},
    //{ path: '/profile', component: Profile},
    { path: '/leaderboard', component:Leaderboard},
    //{ path: '/rewards', component:Rewards},
    { path: '/newsroom', component:Newsroom},
    //{ path: '/past', component:PastTransactions},
    { path: '/help', component:Help},
    //{ path: '/logout', componet:Logout}
]
