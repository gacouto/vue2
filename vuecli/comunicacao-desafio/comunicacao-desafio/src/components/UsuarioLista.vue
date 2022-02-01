<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id"
                @click="userSelected(usuario)">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import bus from '@/barramento'
let usuarios = [
                    { id: 1, nome: 'Ana', idade: 31 },
                    { id: 2, nome: 'Carlos', idade: 22 },
                    { id: 3, nome: 'Daniel', idade: 40 },
                    { id: 4, nome: 'Ema', idade: 17 },
                    { id: 5, nome: 'Lia', idade: 28 }
                ]
export default { 
    data(){
        return {
            usuarios
        }
    },
    methods:{
        userSelected(user){
            bus.$emit('onUserSelected',user)
        }
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }
    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
