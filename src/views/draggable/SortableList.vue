<script>
import { Sortable } from '@shopify/draggable'
import { onMounted, provide, h, ref } from 'vue'

function move (items, oldIndex, newIndex) {
  const itemRemovedArray = [
    ...items.slice(0, oldIndex),
    ...items.slice(oldIndex + 1, items.length)
  ]

  return [
    ...itemRemovedArray.slice(0, newIndex),
    items[oldIndex],
    ...itemRemovedArray.slice(newIndex, itemRemovedArray.length)
  ]
}

export default {
  props: {
    contacts: {
      required: true
    },
    itemClass: {
      default: 'sortable-list-item'
    },
    handleClass: {
      default: 'sortable-list-handle'
    }
  },
  emits: ['upgrade'],
  setup (props, context) {
    provide('val', {
      sortableListItemClass: props.itemClass,
      sortableListHandleClass: props.handleClass
    })
    const ids = ref(null)

    onMounted(() => {
      new Sortable(ids.value, {
        draggable: `.${props.itemClass}`,
        handle: `.${props.handleClass}`,
        mirror: {
          constrainDimensions: true
        }
      }).on('sortable:stop', ({ oldIndex, newIndex }) => {
        context.emit('upgrade', move(props.contacts, oldIndex, newIndex))
      })
    })
    return () => context.slots.default(
      { items: props.contacts, ids: ids })
  }
}
</script>
