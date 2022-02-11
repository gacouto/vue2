import Vue from 'vue'
import VueRouter from 'vue-router'

import MyCustomRoutes from './mycustomroutes'

import Inicio from '@/components/Inicio'
import Menu from '@/components/template/Menu'

import Usuario from '@/components/usuario/Usuario'
import UsuarioLista from '@/components/usuario/UsuarioLista'
import UsuarioEditar from '@/components/usuario/UsuarioEditar'
import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe'


Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [{
        path: '/',
        component: Inicio,        
    },
    {
    path: '/usuario', 
    components:{
        default:Usuario,
        anotacoes:Inicio,
    },
    children:[
        {path:'', components:{default:UsuarioLista,menu:Menu}},
        {path:':iduser', component:UsuarioDetalhe, props:true,name:'userDetails'},
        {path:':iduser/editar', component:UsuarioEditar,props:true}
    ]
    }
    ]
})