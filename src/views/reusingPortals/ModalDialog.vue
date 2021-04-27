<template>
  <div v-if="show">
    <teleport to="body">
      <div class="modal-backdrop" v-show="show">
        <div class="modal">
          <slot></slot>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, watch } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  setup (props, context) {
    const cancel = () => {
      context.emit('close')
    }
    const escapeHandler = e => {
      if (e.key === 'Escape' && props.show) {
        cancel()
      }
    }
    onMounted(() => {
      console.log(props.show)
      document.addEventListener('keydown', escapeHandler)
    })
    onUnmounted(() => {
      document.removeEventListener('keydown', escapeHandler)
    })

    watch(() => props.show, (show) => {
      if (show) {
        document.body.style.setProperty('overflow', 'hidden')
      } else {
        document.body.style.removeProperty('overflow')
      }
    })
  }
})
</script>

<style scoped>

</style>
