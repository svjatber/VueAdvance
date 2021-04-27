<template>
  <div id="app" class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tag Input</label>
      <renderless-tag-input @chan="updates" :tags="modelValue" :removeBackSpace='false'>
        <template v-slot:default="{ tags, addTag, removeButtonEvents, inputProps, inputEvent }">
          <div class="stacked-tag-input">
            <div class="stacked-tag-input-form">
              <input class="form-input" placeholder="Add tag..."
                     v-bind="inputProps"
                     v-on="inputEvent"
              >
              <button class="btn btn-indigo"
                      @click="addTag"
              >Add Tag</button>
            </div>
            <ul class="stacked-tag-list">
              <li v-for="tag in tags" :key="tag">
                {{ tag }}
                <button type="button" class="stacked-tag-link"
                        v-on="removeButtonEvents(tag)"
                >
                  Remove
                </button>
              </li>
            </ul>
          </div>
        </template>
      </renderless-tag-input>
    </div>
  </div>
</template>

<script>
import RenderlessTagInput from '../RenderlessTagInput'

export default {
  components: {
    RenderlessTagInput
  },
  props: ['modelValue'],
  setup (_, context) {
    function updates (newValue) {
      context.emit('update:modelValue', newValue)
    }

    return {
      updates
    }
  }
}
</script>

<style scoped>

</style>
