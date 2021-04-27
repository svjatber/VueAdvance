<template>
  <div class="media-card">
    <div class="media-card-image">
      <slot name="image"></slot>
    </div>
    <div class="media-card-content">
      <h4 class="media-card-heading">
        <slot name="heading">
          Default
        </slot>
      </h4>
      <div class="media-card-body">
        <slot></slot>
      </div>
      <div>
        <slot name="other" item="work"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaCard'
}
</script>

<style scoped>

</style>
