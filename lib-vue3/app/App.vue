<script lang="ts">
import { defineComponent } from '@vue-bridge/runtime';

  export default defineComponent({
    data: () => ({
      title: 'This is the Test App'
    })
  }) 
</script>
<template>
  <div>
    <h1>Title: {{ title }}</h1>
    <MyInput v-model="title" />
  </div>
</template>
<style lang="postcss"></style>