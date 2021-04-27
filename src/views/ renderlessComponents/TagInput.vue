<template>
  <div class="tag-input">
    <span v-for="tag in modelValue" :key="tag" class="tag-input-tag">
      <span>{{ tag }}</span>
      <button type="button" class="tag-input-remove"
              @click="removeTag(tag)"
      >&times;</button>
    </span>
    <input class="tag-input-text" placeholder="Add tag..."
           v-model="input"
           @keydown.backspace="handleBackspace"
           @keydown.enter.prevent="addTag"
    >
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  props: ['modelValue'],
  setup (props, context) {
    console.log(props.modelValue)
    const input = ref('')
    const newTag = computed(() => {
      return input.value.trim()
    })
    function clearInput () {
      input.value = ''
    }
    function removeTag (tag) {
      console.log('aaa')
      context.emit('update:modelValue', props.modelValue.filter(t => t !== tag))
    }

    function addTag () {
      console.log('áaaa')
      if (newTag.value.length === 0 || props.modelValue.includes(newTag.value)) {
        return
      }
      context.emit('update:modelValue', [...props.modelValue, newTag.value])
      clearInput()
    }
    function handleBackspace () {
      console.log('aaaa')
      if (newTag.value.length === 0) {
        context.emit('update:modelValue', props.modelValue.slice(0, -1))
      }
    }
    return {
      removeTag,
      addTag,
      handleBackspace,
      input
    }
  }
  // data() {
  //   return {
  //     input: ""
  //   }
  // },
  // computed: {
  //   newTag() {
  //     return this.input.trim()
  //   }
  // },
  // methods: {
  //   removeTag(tag) {
  //     this.$emit("update", this.tags.filter(t => t !== tag))
  //   },
  //   addTag() {
  //     if (this.newTag.length === 0 || this.tags.includes(this.newTag)) {
  //       return
  //     }
  //     this.$emit("update", [...this.tags, this.newTag])
  //     this.clearInput()
  //   },
  //   clearInput() {
  //     this.input = ""
  //   },
  //   handleBackspace(e) {
  //     if (this.newTag.length === 0) {
  //       this.$emit("update", this.tags.slice(0, -1))
  //     }
  //   }

}
</script>
