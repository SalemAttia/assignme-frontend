import Home from './Pages/Home.vue';
import login from './Pages/Login.vue';
import Register from './Pages/Register.vue';
import Board from './Pages/Board.vue';
import NotFound from './Pages/Not-found.vue';

export const routes = [
    { path: '/', component: Home, name:'Home'},
    {path:'/login', component:login, name:'login' },
    {path:'/register', component:Register, name:'register' },
    {path:'/board', component:Board, name:'Board' },
    {path:'/not-found', component:NotFound, name:'Not-found' },
    { path: '*', redirect: '/not-founded' },
];