<template>
      <label class="form-label mb-2">dsadssad</label>
      <renderless-tag-input @chan="updates" :tags="modelValue">
        <template v-slot:default="{tags, inputProps, inputEvent, removeButtonEvents}">
          <div class="tag-input">
          <span class="tag-input-tag" v-for="tag in tags" :key="tag" >
            <span>{{tag}}</span>
            <button type="button" class="tag-input-remove" v-on="removeButtonEvents(tag)"
            >&times;</button>
          </span>
            <input class="tag-input-text" placeholder="Add tag..."
                   v-bind="inputProps"
                   v-on="inputEvent"
            >
          </div>
        </template>
      </renderless-tag-input>
</template>

<script>
import RenderlessTagInput from '../RenderlessTagInput'

export default {
  components: {
    RenderlessTagInput
  },
  props: ['modelValue'],
  setup (props, context) {
    console.log(props.modelValue)
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
