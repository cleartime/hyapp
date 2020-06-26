<template>
  <div class="home">
    <Head />
    <Search />
    <HeadMenu />
    <HeadBanner />
    <CenterMenu />
    <CenterBanner />
    <Likes />
  </div>
</template>

<script>
import CenterMenu from "./centerMenu.vue";
import Head from "./head.vue";
import HeadMenu from "./headMenu.vue";
import HeadBanner from "./headBanner.vue";
import CenterBanner from "./centerBanner.vue";
import Likes from "./likes.vue";
import Search from "./search.vue";

export default {
  name: "Home",
  components: {
    CenterMenu,
    Head,
    HeadMenu,
    HeadBanner,
    CenterBanner,
    Likes,
    Search
  }
};
</script>
