<script>
import { defineComponent, h } from 'vue'
// import ToogleInput from '../ToogleInput'
import contacts from '../../../public/contacts.json'
export default defineComponent({
  // setup () {
  //   const toggled = ref(false)
  //   return () => h(ToogleInput, {
  //     modValue: toggled.value,
  //     onChange: (e) => (toggled.value = e)
  //   })
  // }
  setup () {
    return () => [h('div', {}, 'hello world'), h('div', {}, h('ul', {}, contacts.map(v => {
      return h('li', {}, v.name.first)
    })))]
  }
})
</script>
