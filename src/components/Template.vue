<template>
<div>
    <p v-html="header"></p>
    <h1 v-once>{{name}}</h1>
    <h1>{{name}}</h1>
    <button v-on:click="OnButtonClick">Click Me</button>
    <!-- <button v-bind:disabled="true" v-on:click="OnButtonClick">Click Me</button> -->
    
</div>

</template>

<script>
export default {
    name:"Template",
    data(){
        return{
            name:'Shaggy',
            header: '<h1>This is Header</h1>'
        }
    },
    methods:{
        OnButtonClick()
        {
            this.name = 'John'
        }
    }
}
</script>
