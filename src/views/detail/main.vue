<template>
  <div class="main">
    <h2 class="title">
      <img src="@/assets/img/detail/pdd.png" alt="" class="logo" />
      <span>七匹狼短袖T恤2020夏装新款polo衫中青年男士休闲衣服潮流男装p</span>
    </h2>
    <div class="price">
      <p class="afterPrice">券后价 ¥ <span>99</span></p>
      <p class="localPrice">拼多多价：<span>¥100</span></p>
      <p class="count">月销售：<span>2836</span></p>
    </div>
    <div class="quan">
      <p class="con">10元优惠券</p>
      <p class="time">有效期：06月23日-07月31日</p>
      <p class="btn">立即领券</p>
    </div>
    <div class="tip">
      <span>推荐理由：</span>
      <span>七匹狼短袖T恤2020夏装新款polo衫中青年男士休闲衣服潮流男装p</span>
      <span class="btn">复制</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailMain",
  components: {}
};
</script>
<style lang="scss" scoped>
.main {
  background: #fff;
  padding: 20px;
  .title {
    margin-bottom: 10px;
    line-height: 24px;
    img {
      position: relative;
      bottom: -3px;
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    span {
      color: $font2;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .price {
    align-items: baseline;
    font-size: 16px;
    color: $font6;
    display: flex;
    .afterPrice {
      color: $font7;
      span {
        font-weight: bold;
        font-size: 24px;
      }
    }
    .localPrice {
      span {
        text-decoration: line-through;
      }
      margin-left: 20px;
    }
    .count {
      flex: 1;
      text-align: right;
    }
  }
  .quan {
    height: 110px;
    background: url("../../assets/img/detail/quan.jpg") no-repeat;
  }
}
</style>
