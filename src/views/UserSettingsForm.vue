<template>
  <form class="card" @submit.prevent="submit">
    <h1 class="text-2xl font-bold mb-6">Your Settings</h1>
    <label class="block mb-6">
      <span class="form-label mb-2">Email Address</span>
      <input v-model="email" class="form-input" placeholder="you@example.com">
    </label>
    <div class="mb-8">
      <span class="form-label mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4">Send you occasional news and updates.</p>
        <ToogleInput v-model="receiveNewsletter"/>
      </div>
    </div>
    <div class="text-right">
      <button type="submit" class="btn btn-blue">Update Settings</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ToogleInput from './ToogleInput.vue'

export default defineComponent({
  components: { ToogleInput },
  setup () {
    const email = ref<string>('')
    const receiveNewsletter = ref<boolean>(false)
    const toggle = (newValue: boolean) => {
      receiveNewsletter.value = newValue
    }
    const submit = () => {
      console.log(
        email.value,
        receiveNewsletter.value
      )
      email.value = ''
      receiveNewsletter.value = false
    }
    return {
      email,
      receiveNewsletter,
      submit,
      toggle
    }
  }
})
</script>

<style scoped>

</style>
