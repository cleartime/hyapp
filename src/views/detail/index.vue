<template>
  <div class="my">
    <Banner />
    <Main />
    <Detail />
    <Foot />
  </div>
</template>

<script>
import Banner from "./banner.vue";
import Main from "./main.vue";
import Detail from "./detail.vue";
import Foot from "./foot.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Main,
    Detail,
    Foot
  }
};
</script>
<style lang="scss" scoped>
.my {
  .con {
    background: $bg2;
    padding: 0 20px;
  }
}
</style>
