<template>
  <div class="home">
    <Head />
    <search />
    <headMenu />
    <headBanner />
    <centerMenu />
    <centerBanner />
    <likes /> 
  </div>
</template>

<script>
import centerMenu from "./centerMenu.vue";
import Head from "./head.vue";
import headMenu from "./headMenu.vue";
import headBanner from "./headBanner.vue";
import centerBanner from "./centerBanner.vue";
import likes from "./likes.vue";
import search from "./search.vue";

export default {
  name: "Home",
  components: {
    centerMenu,
    Head,
    headMenu,
    headBanner,
    centerBanner,
    likes,
    search,
  },
};
</script>
