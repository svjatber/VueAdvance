<template>
  <div class="min-h-screen bg-grey-darker p-8">
  <div class="max-w-sm mx-auto">
    <ContactList :pseudo-slot="({ contact }) => contact.name.first">
      <template v-slot:names="props">
        <a :href="props.contact.email">
          {{props.contact.name.first}}
        </a>
      </template>
    </ContactList>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ContactList from './ContactList'
export default defineComponent({
  components: {
    ContactList
  }
})
</script>

<style scoped>

</style>
