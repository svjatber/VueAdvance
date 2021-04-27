<template>
  <div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, deleniti explicabo minima neque nulla recusandae sunt voluptas. Ad aliquam doloremque libero neque nisi, nobis officiis placeat qui repellendus sapiente ullam?
    </div>
    <div class="min-h-screen flex items-center justify-center">
      <button @click="modalOpen = true" type="button" class="btn btn-blue">Open Modal</button>
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid aperiam impedit incidunt necessitatibus omnis, quibusdam ratione. Adipisci architecto assumenda dicta eveniet ipsum iusto quasi rem tempore velit voluptatum.
    </div>
    <announcement-modal
      :show="modalOpen"
      @close="modalOpen = false"
      :prevent-before-scrolling = false
    ></announcement-modal>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import AnnouncementModal from './AnnouncementModal'

export default defineComponent({
  components: {
    AnnouncementModal
  },
  setup () {
    const modalOpen = ref(false)
    return {
      modalOpen
    }
  }
})
</script>

<style scoped>

</style>
