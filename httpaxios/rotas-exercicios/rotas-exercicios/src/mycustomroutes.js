
import Inicio from '@/components/Inicio'

import Usuario from '@/components/usuario/Usuario'
import UsuarioLista from '@/components/usuario/UsuarioLista'
import UsuarioEditar from '@/components/usuario/UsuarioEditar'
import UsuarioDetalhe from '@/components/usuario/UsuarioDetalhe'

const MyCustomRoutes = [{
    path: '/',
    component: Inicio,        
},
{
    path: '/usuario',
    component: Usuario,
    components:{
        default:Usuario,
        anotacoes:UsuarioLista,
    },
    children:[
        {path:'', component:UsuarioLista},
        {path:':iduser', component:UsuarioDetalhe, props:true,name:'userDetails'},
        {path:':iduser/editar', component:UsuarioEditar,props:true}
    ]
}
]
export default MyCustomRoutes