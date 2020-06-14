<template>
  <div class="centerBanner">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <img src="" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "centerBanner",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.centerBanner {
  padding: 30px;
  ul {
    display: flex;
    li {
      flex: 1;
      img {
        width: 100px;
        height: 140px;
      }
    }
  }
}
</style>
