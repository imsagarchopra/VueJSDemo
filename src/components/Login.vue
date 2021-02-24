<template>
    <div>
        <form @submit="GetLogin">
        <input type="text" v-model="loginform.username" placeholder="Enter Username"/>
        <br/><br/>
        <input type="password" v-model="loginform.password" placeholder="Enter Password"/><br/><br/>
        <!-- <button v-on:click="GetLogin">Login</button> -->
        <button>Login</button><br><br>

        <p v-if="this.error.length">
            <b>Please correct the following errors</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                     {{e}}   
                </li>
            </ul>
        </p>
        </form>
    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            error:[],
            loginform:{
                username:null,
                password:null
            }
        }
    },
    methods:{
            GetLogin(e){
                if(this.loginform.username && this.loginform.password)
                {
                    console.warn('GetLoginCalled',this.loginform)
                }
                this.error=[]
                if(!this.loginform.username)
                {
                    this.error.push("Username is required")
                }
                if(!this.loginform.password)
                {
                    this.error.push("Password is required")
                }
                console.warn("Errors",this.error);
                e.preventDefault()
            }
    }
}
</script>