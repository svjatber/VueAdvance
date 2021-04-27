<template>
  <div class="accordion-list">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, provide, reactive } from 'vue'

export default defineComponent({
  setup () {
    const sharedState = reactive({
      activeItem: 1
    })
    provide('accordianList', sharedState)
  }
  // provide() {
  //   return {
  //     accordionListState: this.sharedState
  //   }
  // },
  // data() {
  //   return {
  //     sharedState: {
  //       activeItem: 1
  //     }
  //   }
  // }
})
</script>
