<template>
  <div class="accordion-item">
    <div @click="toggle" role="button" class="accordion-item-header">
      <slot name="header"></slot>
      <svg class="icon" :class="{ good : active }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>
    <div class="accordion-item-body" v-show="active">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, inject } from 'vue'

export default defineComponent({
  props: {
    itemId: {
      type: Number
    }
  },
  setup (props) {
    const accor = inject('accordianList')
    console.log(accor)
    const active = computed(() => {
      return props.itemId === accor.activeItem
    })
    function toggle () {
      accor.activeItem = active.value ? null : props.itemId
      console.log(props.itemId, accor.activeItem)
    }
    return {
      toggle,
      active
    }
  }
  // inject: ["accordionListState"],
  // props: ["itemId"],
  // computed: {
  //   active() {
  //     return this.accordionListState.activeItem === this.itemId
  //   }
  // },
  // methods: {
  //   toggle() {
  //     this.accordionListState.activeItem = this.active ? null : this.itemId
  //   }
  // }
})
</script>
<style>
.good{
  transform: rotate(90deg);
}
</style>
