<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld message="Hello World"/>
    <HelloWorld message="This is my first Vue js program"/>
    <Events/>   
    <ConditionalRender/>
    <Loop/> -->

    <!-- <Home/> -->
    <!-- <Template/>
    <ClassStyle/> -->
    <!-- <Databind/> -->

    <!-- <h1>{{title}}</h1>
    <Child v-on:ChangeTitle="UpdateTitleText($event)"/> -->

    <!-- <h1>{{ 'Make form in Vue js' | Ucase}}</h1>
    <Login/> -->
    <!-- <SignUp/> -->
    <!-- <router-view/> -->
    <!-- <EmployeeList/> -->
    <!-- <PostComponent/> -->
<!-- 
    <router-link to="/">Home</router-link><br><br>
    <router-link to="/Login">Login</router-link>
    <router-view></router-view> -->

    <component v-bind:is="cmp"/><br><br>
    <button v-on:click="UpdateCmp(Login)"> Sign In</button>
    <button v-on:click="UpdateCmp(SignUp)"> Sign Up</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Events from './components/Events.vue'
// import ConditionalRender from './components/ConditionalRendering.vue'
// import Loop from './components/Loops.vue'

// import Home from './components/Home.vue'
// import Template from './components/Template.vue'
// import ClassStyle from './components/Class&Style.vue'

// import Databind from './components/Databinding'
//import Child from './components/CustomEvents'

import Login from './components/Login'

import SignUp from './components/SignUp'

// import EmployeeList from './components/EmployeeList'

//import PostComponent from './components/PostComponent'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Events,
    // ConditionalRender,
    // Loop

    // Home,
    // Template,
    // ClassStyle,
    // Databind,
    //Child,

    //Login
    //SignUp
    
    //EmployeeList

    // PostComponent

    "signUp":SignUp,
    "signIn":Login
  },
  data(){
    return{
      title:"Child to parent data",
      cmp:"SignUp"
    }
  },
  methods:{
    UpdateTitleText(title)
    {
      this.title = title
    },
    UpdateCmp(item)
    {
      this.cmp = item
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
