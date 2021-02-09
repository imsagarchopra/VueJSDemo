<template>
    <div>
        <h1 class="vueStyle">Class and Style Binding</h1>
        <h1 v-bind:style="{color:'blue'}">Style Binding</h1>
        <h1 v-bind:class="{display:show,vueStyle:show}">Class with Object</h1>
        <h1 v-bind:class="[show ? 'display':'vueStyle']">Class with Array</h1>
    </div>   
</template>

<script>

export default {
    name:'ClassStyle',
    data(){
        return{
            show:false
        }
    }
}
</script>

<style scoped>
.vueStyle{
    color: red;
}

.display{
    background-color:yellow;
}

</style>