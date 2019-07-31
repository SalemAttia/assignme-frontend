import Vue from 'vue'
import Router from 'vue-router';
import Home from './Pages/Home.vue';
import login from './Pages/Login.vue';
import Register from './Pages/Register.vue';
import Board from './Pages/Board.vue';
import NotFound from './Pages/Not-found.vue';
Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: Home, 
            name: 'Home',
            meta: { 
                requiresAuth: true
            } 
        },
        { 
            path: '/login', 
            component: login, 
            name: 'login',
            meta: { 
                guest: true
            }
        },
        { 
            path: '/register', 
            component: Register, 
            name: 'register', 
            meta: { 
                guest: true
            }
        },
        { 
            path: '/board/:id', 
            component: Board, 
            name: 'Board',
            meta: { 
                requiresAuth: true
            } 
        },
        { 
            path: '/not-found', 
            component: NotFound, 
            name: 'Not-found',
            meta: { 
                guest: true
            }
        },
        { 
            path: '*', 
            redirect: '/not-founded',
            meta: { 
                guest: true
            } 
        },
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') === null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(user) {
                next({ name: 'Home'})
            }else{
                next() 
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'Home'})
        }
    }else {
        next() 
    }
})

export default router
