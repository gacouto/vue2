import Vue from 'vue'
import VueRouter from 'vue-router'

import MyCustomRoutes from './mycustomroutes'

import Inicio from '@/components/Inicio'
import Menu from '@/components/template/Menu'

import Usuario from '@/components/usuario/Usuario'
import UsuarioLista from '@/components/usuario/UsuarioLista'
//import UsuarioEditar from '@/components/usuario/UsuarioEditar'
import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe'

const UsuarioEditar = () => import(/* webpackChunkName: editarPage */'./components/usuario/UsuarioDetalhe')

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { selector: to.hash }
        }
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        component: Inicio,
    },
    {
        path: '/usuario',
        components: {
            default: Usuario,
            anotacoes: Inicio,
        },
        children: [
            { path: '', components: { default: UsuarioLista, menu: Menu } },
            {
                path: ':iduser', component: UsuarioDetalhe, props: true,
                name: 'userDetails', beforeEnter: (to, from, next) => {
                    console.log('monitorei userDetails')    
                    next()
                }
            },
            { path: ':iduser/editar', component: UsuarioEditar, props: true }
        ]
    },
    {
        path: '*',
        redirect: '/usuario'
    }
    ]
})
router.beforeEach((to, from, next) => {
    console.log('monitorei mudança')
    next()

})
export default router