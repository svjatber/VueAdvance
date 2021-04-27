<template>
  <div class="card">
    <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
    <div>
      <div v-for="contact in contactss" :key="contact.id" class="flex items-center spaced-y-6">
        <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
        <div>
<!--          <div class="font-bold">-->
<!--            {{ pseudoSlot({ contact: contact }) }}-->
<!--          </div>-->
          <div class="font-bold">
            <slot :contact="contact" name="names"></slot>
          </div>
          <div class="text-grey-dark">
            {{ contact.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  setup () {
    const contactss = ref([])
    onMounted(() => {
      fetch('/contacts.json', {
        method: 'GET',
        contentType: 'application/json'
      })
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(contacts => {
          console.log(contacts)
          contactss.value = contacts
          console.log(contactss.value)
        }
        )
    })
    return {
      contactss
    }
  }
  // data () {
  //   return {
  //     contacts: []
  //   }
  // },
  // created() {
  //   fetch('../../static/contacts.json')
  //     .then(response => response.json())
  //     .then(contacts => (this.contacts = contacts))
  // }
})
</script>
