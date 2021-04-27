<template>
  <span class="toggle flex-no-shrink" role="checkbox" tabindex="0"
        @click="toggle"
        @keydown.space.prevent="toggle"
        :aria-checked="modelValue"
  ></span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['modelValue'],
  setup (props, context) {
    const toggle = () => {
      context.emit('update:modelValue', !props.modelValue)
    }
    return {
      toggle
    }
  }
})
</script>
