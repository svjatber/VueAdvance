<script>
import { computed, ref } from 'vue'

export default {
  props: {
    tags: {
      type: Array
    },
    removeBackSpace: {
      default: true
    }
  },
  emits: ['chan'],
  setup (props, context) {
    const input = ref('')
    const newTag = computed(() => {
      console.log('qq')
      return input.value.trim()
    })
    function clearInput () {
      console.log('clear')
      input.value = ''
      console.log(input.value)
    }
    function removeTag (tag) {
      context.emit('chan', props.tags.filter(t => t !== tag))
    }

    function addTag () {
      if (newTag.value.length === 0 || props.tags.includes(newTag.value)) {
        return
      }
      context.emit('chan', [...props.tags, newTag.value])
      console.log('afterEmit')
      clearInput()
    }
    function handleBackspace () {
      console.log('back')
      if (newTag.value.length === 0) {
        context.emit('chan', props.tags.slice(0, -1))
      }
    }
    function changeInput (e) {
      input.value = e.target.value
    }
    return {
      removeTag,
      addTag,
      handleBackspace,
      input,
      changeInput
    }
  },
  render () {
    return this.$slots.default({
      tags: this.tags,
      addTag: this.addTag,
      removeButtonEvents: (tag) => ({
        click: () => this.removeTag(tag)
      }),
      inputProps: {
        value: this.input
      },
      inputEvent: {
        input: (e) => (this.changeInput(e)),
        keydown: e => {
          if (e.key === 'Backspace' && this.removeBackSpace) {
            this.handleBackspace()
          }
          if (e.key === 'Enter') {
            console.log('aaaa')
            e.preventDefault()
            this.addTag()
          }
        }
      }
    })
  }
}
</script>
