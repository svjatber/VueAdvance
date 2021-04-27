<template>
    <StackedTagInput v-model="tags"></StackedTagInput>
  <hr>
    <InlineTagInput v-model="tags"></InlineTagInput>
<!--    <div class="max-w-sm mx-auto card mt-8">-->
<!--      <label class="form-label mb-2">Original Tag Input</label>-->
<!--      <tag-input v-model="tags"></tag-input>-->
<!--    </div>-->
</template>

<script>
import { ref } from 'vue'
// import TagInput from './TagInput'
import StackedTagInput from './ components/StackedTagInput'
import InlineTagInput from './ components/InlineTagInput'

export default {
  components: {
    // TagInput,
    StackedTagInput,
    InlineTagInput
  },
  setup () {
    const tags = ref(['awesome', 'excellent', 'amazing'])
    return {
      tags
    }
  }
}
</script>

<style scoped>

</style>
