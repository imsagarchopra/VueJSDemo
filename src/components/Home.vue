<template>
    <div class="home">
         <h1>Home Component</h1>
         <Users/>
    </div>   
</template>

<script>

import Users from './Users'

export default {
    name:'Home',
    components:{
        Users
    }
}
</script>

<style scoped>
.home{
    background-color: aquamarine;
    height: 500px;
}
</style>