<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>

        <sortable-list :contacts="contacts" @upgrade="update">
          <template #default="{ items, ids }">
            <div class="contact-list" id="contactList" :ref="ids">
              <sortable-item v-for="contact in items" :key="contact.id">
                <div class="contact-list-item" id="contactListItem">
                  <div class="contact-list-contact">
                    <img :src="contact.avatar" class="contact-list-avatar" alt="">
                    <div>
                      <div class="contact-list-name">
                        {{ contact.name }}
                      </div>
                      <div class="contact-list-email">
                        {{ contact.email }}
                      </div>
                    </div>
                  </div>
                  <sortable-handle>
                    <svg class="contact-list-handle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         fill="currentColor" id="contactSVG">
                      <path fill-rule="evenodd"
                            d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/>
                    </svg>
                  </sortable-handle>
                </div>
              </sortable-item>
            </div>
          </template>
        </sortable-list>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SortableList from './SortableList'
import SortableHandle from './SortableHandle'
import SortableItem from './SortableItem'

export default {
  components: {
    SortableItem,
    SortableHandle,
    SortableList
  },
  setup () {
    const contacts = ref([
      {
        id: 1,
        name: 'Alfreda Ferreira',
        email: 'alfreda.ferreira@example.com',
        avatar: 'https://randomuser.me/api/portraits/med/women/6.jpg'
      },
      {
        id: 2,
        name: 'Leevi Wirtanen',
        email: 'leevi.wirtanen@example.com',
        avatar: 'https://randomuser.me/api/portraits/med/men/19.jpg'
      },
      {
        id: 3,
        name: 'Kaitlin Sutton',
        email: 'kaitlin.sutton@example.com',
        avatar: 'https://randomuser.me/api/portraits/med/women/2.jpg'
      },
      {
        id: 4,
        name: 'Alice Wilson',
        email: 'alice.wilson@example.com',
        avatar: 'https://randomuser.me/api/portraits/med/women/62.jpg'
      },
      {
        id: 5,
        name: 'Etienne Roy',
        email: 'etienne.roy@example.com',
        avatar: 'https://randomuser.me/api/portraits/med/men/4.jpg'
      }
    ])
    console.log(contacts)
    function update (newValue) {
      contacts.value = newValue
      console.log(contacts.value)
    }
    return {
      contacts,
      update
    }
  }
}
</script>
