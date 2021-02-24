<template>
    <div>
        <button v-on:click="ChangeTitle">Change Title</button>
    </div>
</template>

<script>
export default {
    name:'Child',
    methods:{
        ChangeTitle(){
            this.$emit('ChangeTitle','Title from Child')
        }
         
    }
}
</script>