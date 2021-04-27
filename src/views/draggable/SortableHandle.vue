<script>
import { h, inject, onMounted } from 'vue'

export default {
  setup (props, context) {
    const sortableListHandleClass = inject('val')
    onMounted(() => {
      console.log(document.getElementById('contactListItem'))
    })
    return () => h(
      'div',
      { class: sortableListHandleClass.sortableListHandleClass },
      context.slots.default()[0])
  }
}
</script>
