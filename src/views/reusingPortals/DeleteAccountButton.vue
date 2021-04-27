<template>
  <button type="button" class="text-red-dark hover:underline"
          @click="openWindow"
  >
    <slot></slot>
  </button>
    <ConfirmDeleteModal
      :show="confirmDeleteModalOpen"
      @close="confirmDeleteModalOpen = false"
      :account-id="accountId"
    />
</template>

<script>
import { computed, defineComponent, onMounted, ref } from 'vue'
import ConfirmDeleteModal from './ConfirmDeleteModal'

export default defineComponent({
  components: {
    ConfirmDeleteModal
  },
  props: {
    accountId: {
      type: String,
      required: true
    }
  },
  setup () {
    const confirmDeleteModalOpen = ref(false)
    const openWindow = () => {
      console.log(confirmDeleteModalOpen.value)
      confirmDeleteModalOpen.value = true
    }
    return {
      confirmDeleteModalOpen,
      openWindow
    }
  }
})
</script>

<style scoped>

</style>
