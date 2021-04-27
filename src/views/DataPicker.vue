<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date</span>
          <DatePickerItem class="form-input" v-model="date" format="D MMM YYYY" :options="{ firstDay: 1 }" />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import DatePickerItem from '../components/DatePickerItem'

export default defineComponent({
  components: {
    DatePickerItem
  },
  setup () {
    const date = ref('2018-04-12')
    return {
      date
    }
  }
})
</script>

<style scoped>

</style>
