<template>
  <div class="detail">
    <h2 class="store">
      <img src="@/assets/img/detail/pdd.png" alt="" class="logo" />
      <span>品牌男装专卖店</span>
    </h2>
    <div class="goods">
      <h2 class="title">商品详情</h2>
      <div class="con"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDetail",
  components: {}
};
</script>
<style lang="scss" scoped>
.detail {
  background: #fff;
  .store {
    background: #fff;
    padding: 0 20px;
    height: 55px;
    display: flex;
    align-items: center;
    border-top: 10px solid $bg2;
    border-bottom: 10px solid $bg2;
    img {
      height: 20px;
    }
    span {
      font-size: 16px;
      color: $font2;
      margin-left: 5px;
    }
  }
  .goods {
    .title {
      height: 44px;
      line-height: 44px;
      text-align: center;
      color: $font2;
      font-size: 16px;
    }
  }
}
</style>
