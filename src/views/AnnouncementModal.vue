<template>
  <div class="modal-backdrop" v-show="show">
    <div class="modal">
      <h1 class="text-center text-2xl font-bold mb-4">
        Exciting new features are here!
      </h1>
      <p class="text-center text-grey-darker mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi quod tempore totam explicabo sit consectetur architecto? Tempora, repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
      </p>
      <div class="text-center">
        <button @click="dismiss" type="button" class="btn btn-blue">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, watch } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true
    },
    preventBeforeScrolling: {
      type: Boolean,
      default: true
    }
  },
  setup (props, context) {
    const dismiss = () => {
      context.emit('close')
    }
    const escapeHandler = e => {
      if (e.key === 'Escape' && props.show) {
        dismiss()
      }
    }
    onMounted(() => {
      document.addEventListener('keydown', escapeHandler)
    })
    onUnmounted(() => {
      document.removeEventListener('keydown', escapeHandler)
    })

    watch(() => props.show, (show) => {
      if (show) {
        console.log(props.preventBeforeScrolling)
        props.preventBeforeScrolling && document.body.style.setProperty('overflow', 'hidden')
      } else {
        console.log(props.preventBeforeScrolling)
        props.preventBeforeScrolling && document.body.style.removeProperty('overflow')
      }
    })
    return {
      dismiss
    }
  }
})
</script>

<style scoped>

</style>
