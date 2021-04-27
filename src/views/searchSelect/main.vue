<template>
  <div id="app" class="font-sans text-black min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto bg-white rounded shadow-lg p-8">
      <div class="mb-4">
        <label class="form-label mb-2">Favorite Thrash Band</label>
        <search-select
         v-model:band="selectedBand"
         :options="bands"
         :filter-function="applySearchFilter"
        ></search-select>
      </div>
      <div class="text-right">
        <button type="button" class="btn btn-blue">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent, ref } from 'vue'
import SearchSelect from './SearchSelect'

export default defineComponent({
  components: {
    SearchSelect
  },
  setup () {
    const selectedBand = ref(null)
    const bands = ref([
      'Anthrax',
      'Dark Angel',
      'Death Angel',
      'Destruction',
      'Exodus',
      'Flotsam and Jetsam',
      'Kreator',
      'Megadeth',
      'Metallica',
      'Overkill',
      'Sepultura',
      'Slayer',
      'Testament'
    ])
    function applySearchFilter (search, bands) {
      return bands.filter(band => band.toLowerCase().startsWith(search.toLowerCase()))
    }
    return {
      applySearchFilter,
      bands,
      selectedBand
    }
  }
})
</script>
