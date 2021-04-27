<template>
<span class="toggle flex-no-shrink" role="checkbox" tabindex="0"
      :aria-checked='modValue'
      @click='toggle'
      @keydown.space.prevent="toggle"
></span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  // model: {
  //   prop: 'toggled',
  //   event: 'toggle'
  // },
  // props: ['toggled'],
  props: {
    modValue: {
      required: true
    }
  },
  setup (props, context) {
    const toggle = () => {
      console.log(props.modValue)
      context.emit('change', true)
    }
    return {
      toggle
    }
  }
})
</script>
<style scoped>

</style>
