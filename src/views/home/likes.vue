<template>
  <div class="likes">
    <div class="title">
      <div class="title-left">
        <span class="iconfont icon-cainixihuan"></span>
        <span>猜你喜欢</span>
      </div>
      <div class="title-right">
        <span>更多</span>
        <span class="iconfont icon-jiantou"></span>
      </div>
    </div>
    <centerBanner />
  </div>
</template>

<script>
import centerBanner from "./centerBanner.vue";
export default {
  name: "likes",
  components: {
    centerBanner,
  },
};
</script>

<style lang="scss" scoped>
.likes {
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    background: #fff;
    padding: 20px;
    .title-left {
      font-size: 18px;
      font-weight: bold;
      .iconfont {
        margin-right: 10px;
        color: $bg1;
      }
    }
    .title-right {
    }
  }
}
</style>
