<template>
    <div>
        <h1 v-if="show"> Condition True</h1>
        <h1 v-else> Condition False </h1>
        <button v-on:click="Toggle"> Toggle</button>
    </div>
</template>

<script>
export default {
    name:'ConditionalRender',
    data(){
        return {
            show : false
        }
    },
    methods:{
        Toggle()
        {
            this.show = !this.show;
        }
    }
}
</script>