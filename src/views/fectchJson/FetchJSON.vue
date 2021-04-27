<script>

import { ref } from 'vue'

export default {
  props: ['url'],
  setup (props, { slots }) {
    const response = ref(null)
    const loading = ref(true)

    fetch(props.url)
      .then(response => response.json())
      .then(res => {
        response.value = res
        loading.value = false
        console.log(response.value)
        console.log(loading.value)
      })
    return {
      response: response,
      loading: loading
    }
  },
  render () {
    return this.$slots.default({
      response: this.response,
      loading: this.loading
    })
  }
}

</script>

// data () {
//   return {
//     response: null,
//     loading: true
//   }
// },
// created () {
//   console.log(this.url)
//   fetch(this.url)
//     .then(response => response.json())
//     .then(response => {
//       this.response = response
//       this.loading = false
//     })
// },
// render () {
//   return this.$slots.default({
//     response: this.response,
//     loading: this.loading
//   })
}
// setup (props, { slots }) {
//   const response = ref(null)
//   const loading = ref(true)
//   console.log(slots.default)
//   onMounted(() => {
//     fetch('/contacts.json', {
//       method: 'GET',
//       contentType: 'application/json'
//     })
//       .then(r => {
//         console.log(r)
//         return r.json()
//       })
//       .then(res => {
//         loading.value = false
//         console.log(res)
//         response.value = res
//       })
//   })
// eslint-disable-next-line vue/require-render-return

// return () => slots.default({
//   response: response.value,
//   loading: loading.value
// })
// data() {
//   return {
//     response: null,
//     loading: true
//   }
// },
// created() {
//   fetch(this.url)
//     .then(response => response.json())
//     .then(response => {
//       this.response = response
//       this.loading = false
//     })
// },
// render() {
//   return this.$scopedSlots.default({
//     response: this.response,
//     loading: this.loading
//   })
