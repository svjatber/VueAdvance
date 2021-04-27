<template>
  <router-view></router-view>
  <div id="main"></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
  // setup () {
  //   const isMounted = ref(false)
  //   setTimeout(() => {
  //     isMounted.value = true
  //   }, 2000)
  //
  //   return {
  //     isMounted
  //   }
  // }
})

</script>

<style src="./assets/style/app.css"></style>
