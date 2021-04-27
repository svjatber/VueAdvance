<template>
  <div class="card">
    <h1 class="text-2xl font-bold mb-6">Your Settings</h1>
    <label class="block mb-6">
      <span class="block text-grey-darker font-semibold mb-2">Email Address</span>
      <input v-model="email" class="form-input" placeholder="you@example.com">
    </label>
    <div class="mb-8">
      <span class="block text-grey-darker font-semibold mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4">Send you occasional news and updates.</p>
        <toggle-input v-model="receiveNewsletter" class="flex-no-shrink"/>
      </div>
    </div>
    <div class="flex justify-between">
      <delete-account-button :account-id="accountId">
        Close Account
      </delete-account-button>
      <button type="button" class="btn btn-blue">Update Settings</button>
    </div>
  </div>
</template>

<script>

import { defineComponent, ref } from 'vue'
import ToggleInput from './ToggleInput'
import DeleteAccountButton from './DeleteAccountButton'

export default defineComponent({
  components: {
    DeleteAccountButton,
    ToggleInput
  },
  setup () {
    const email = ref('jane@example.com')
    const receiveNewsletter = ref(false)
    const accountId = ref('2')
    const toggleNewsLetter = () => {
      receiveNewsletter.value = !receiveNewsletter.value
    }
    return {
      email,
      receiveNewsletter,
      accountId,
      toggleNewsLetter
    }
  }
  // data() {
  //   return {
  //     email: "jane@example.com",
  //     receiveNewsletter: false,
  //     accountId: ''
  //   }
  // },
  // methods: {
  //   toggleNewsletter() {
  //     this.receiveNewsletter = !this.receiveNewsletter
  //   }
  // }
})
</script>
