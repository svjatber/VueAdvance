<script>
import { h, inject, onMounted, ref } from 'vue'

export default {
  setup (_, context) {
    const sortableListItemClass = inject('val')
    return () => h(
      'div',
      { class: sortableListItemClass.sortableListItemClass },
      context.slots.default()[0]
    )
  }
}
</script>
