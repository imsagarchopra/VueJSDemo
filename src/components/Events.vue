<template>
  <div>
    <button v-on:click="OnButtonClick('Test')">Click Here</button>
  </div>
</template>

<script>
export default {
  name: 'Events',

  methods: {
    OnButtonClick(message) {
      console.warn(message + " Button Clicked");
    },
  },
};
</script>