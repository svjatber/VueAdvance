<template>
  <input :value="modelValue" id="picked" placeholder="YYYY-MM-DD">
</template>

<script>
import Pikaday from 'pikaday'
import { defineComponent, onMounted } from 'vue'
import 'pikaday/css/pikaday.css'
export default defineComponent({
  props: {
    modelValue: {
      required: true
    },
    format: {
      default: 'YYYY-MM-DD'
    },
    options: {
      default: {}
    }
  },
  setup (props, context) {
    onMounted(() => {
      const picker = new Pikaday({
        field: document.getElementById('picked'),
        format: props.format,
        onSelect: () => {
          context.emit('update:modelValue', picker.toString())
        },
        ...props.options
      })
    })
  }
})
</script>

<style scoped>

</style>
