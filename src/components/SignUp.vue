<template>
    <div>
        <input type="text" v-model="SignupForm.username" placeholder="Enter Username"/><br><br>
        <input type="password" v-model="SignupForm.password" placeholder="Enter Password"/><br><br>
        <p>Hobbies</p>
        <input type="checkbox" v-model="SignupForm.hobbies" value="travel" id="travel" />
        <label for="travel">Travel</label>
        <input type="checkbox" v-model="SignupForm.hobbies" value="sports" id="sports" />
        <label for="sports">Sports</label>
        <br><br>
        <p>Gender</p>
        <input type="radio" v-model="SignupForm.Gender" value="male" id="male" />
        <label for="male">Male</label>
        <input type="radio" v-model="SignupForm.Gender" value="female" id="female" />
        <label for="female">Sports</label>
        <br><br>
        <button v-on:click="Signup">Sign Up</button>
    </div>
</template>

<script>
export default {
    name:'SignUp',
    data(){
        return{
            SignupForm:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
        }
    },
    methods:{
        Signup()
        {
            console.warn('Hi',this.SignupForm)
        }
    }
}
</script>