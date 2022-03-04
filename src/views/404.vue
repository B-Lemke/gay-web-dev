<template>
  <div class="max-width p-2">
    <title-styled format="bars">Page not found!</title-styled>
    <router-link to="/">Go Home!</router-link>
  </div>
</template>

<script>
import TitleStyled from "@/components/TitleStyled.vue";
export default {
  name: "404",
  components: { TitleStyled },
};
</script>
