<template>
  <the-header></the-header>
  <div>
    <router-view />
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Gay Web Dev",
    // all titles will be injected into this template
    titleTemplate: "%s | Gay Web Dev",
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
</style>
