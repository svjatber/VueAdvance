<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-md mx-auto">

      <fetch-json :url=url>
        <template v-slot:default="{ response: contacts, loading }">
          <div class="card">
            <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>
            <div v-if="loading" class="text-grey-darker" :key="loading">
              Loading...
            </div>
            <div v-else>
              <div v-for="contact in contacts" :key="contact.id" class="flex items-center spaced-y-6">
                <img :src="contact.picture.medium" class="h-12 w-12 rounded-full block mr-2" alt="">
                <div>
                  <div class="font-bold">
                    {{ contact.name.first }} {{ contact.name.last }}
                  </div>
                  <div class="text-grey-dark">
                    {{ contact.email }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </fetch-json>

    </div>
  </div>
</template>

<script>
import FetchJson from './FetchJSON.vue'

export default {
  components: {
    FetchJson
  },
  data () {
    return {
      url: '/contacts.json'
    }
  }
}
</script>

<style />
