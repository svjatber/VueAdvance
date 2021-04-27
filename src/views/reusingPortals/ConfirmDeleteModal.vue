<template>
  <ModalDialog @close="cancel" :show="show">
    <h1 class="text-center text-2xl font-bold mb-4">
      Are you sure?
    </h1>
    <p class="text-center text-grey-darker mb-6">
      Deleting your account cannot be undone.
    </p>
    <div class="text-center">
      <button @click="cancel" type="button" class="btn btn-grey mr-4">
        Cancel
      </button>
      <button @click="confirmDelete" type="button" class="btn btn-red">
        Delete it
      </button>
    </div>
  </ModalDialog>
</template>

<script>
import { defineComponent } from 'vue'
import ModalDialog from './ModalDialog'

export default defineComponent({
  components: { ModalDialog },
  component: {
    ModalDialog
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    accountId: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
    const cancel = () => {
      context.emit('close')
    }
    const confirmDelete = () => {
      console.log(`Deleting account ${props.accountId}...`)
      cancel()
    }
    return {
      cancel,
      confirmDelete
    }
  }
})
</script>

<style scoped>
</style>
