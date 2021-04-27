<template>
  <div class="search-select" :class="{ 'is-active': isOpen }">
    <button @click="open" type="button" class="search-select-input">
      <span v-if="band !== null">{{ band }}</span>
      <span v-else class="search-select-placeholder">Select a band...</span>
    </button>
    <div v-show="isOpen" class="search-select-dropdown">
      <input class="search-select-search" v-model="search" ref="searchRef">
      <ul class="search-select-options" v-show="filteredOptions.length > 0">
        <li class="search-select-option"
            v-for="option in filteredOptions"
            :key="option"
            @click="select(option)"
        >{{ option }}</li>
      </ul>
      <div v-show="filteredOptions.length === 0" class="search-select-empty">No results found for "{{ search }}"</div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, nextTick, ref } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Array
    },
    band: {
      type: String
    },
    filterFunction: {
      type: Function
    }
  },
  setup (props, context) {
    const isOpen = ref(false)
    const search = ref('')
    const searchRef = ref(null)
    console.log(props.band)
    function close () {
      isOpen.value = false
    }
    function open () {
      isOpen.value = true
      nextTick(() => {
        searchRef.value.focus()
      })
    }
    function select (option) {
      context.emit('update:band', option)
      search.value = ''
      close()
    }
    const filteredOptions = computed(() => {
      return props.filterFunction(search.value, props.options)
    })
    return {
      isOpen,
      open,
      select,
      filteredOptions,
      search,
      searchRef
    }
  }
})
</script>
