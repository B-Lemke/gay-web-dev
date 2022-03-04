<template>
  <div class="h-100 d-flex flex-column justify-content-center">
    <title-styled format="bars">Home</title-styled>

    <img
      class="under-construction"
      src="@/assets/images/underconstruction.gif"
      alt="Under Construction"
    />
  </div>
</template>

<script>
import TitleStyled from "@/components/TitleStyled.vue";

export default {
  name: "Home",
  components: { TitleStyled },
};
</script>

<style>
.under-construction {
  width: 90%;
  margin: 20px auto;
  max-width: 1200px;
}
</style>
