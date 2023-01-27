<template>
  <div>
    <div
      class="blockquote above-shapes"
      :class="['blockquote-' + color]"
      :cite="citation"
    >
      <div class="blockquote-content">
        <div class="blockquote-image">
          <img :src="require('@/assets/images/' + imageName)" />
        </div>
        <div class="blockquote-quote">
          <div class="blockquote-text">
            <slot></slot>
          </div>
          <div class="blockquote-attribution">&mdash; {{ attribution }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color", "citation", "imageName", "attribution"],
  data() {
    return {};
  },
};
</script>

<style>
.title-bars-fix {
  position: relative;
  z-index: 1;
}
</style>
