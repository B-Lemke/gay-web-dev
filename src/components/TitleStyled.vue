<template>
  <div>
    <div class="title-bars-fix" v-if="format == 'bars'">
      <h2 class="title title-bars title-mono">
        <slot></slot>
      </h2>
    </div>

    <div class="title title-stacked title-mono" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["format"],
  data() {},
};
</script>

<style>
.title-bars-fix {
  position: relative;
  z-index: 1;
}
</style>
