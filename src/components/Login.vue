<template>
    <div>
        <input type="text" v-model="loginform.username" placeholder="Enter Username"/>
        <br/><br/>
        <input type="text" v-model="loginform.password" placeholder="Enter Password"/><br/><br/>
        <button v-on:click="GetLogin">Login</button>
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            loginform:{
                username:null,
                password:null
            }
        }
    },
    methods:{
            GetLogin(){
                console.warn('GetLoginCalled',this.loginform)
            }
    }
}
</script>