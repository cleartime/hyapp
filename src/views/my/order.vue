<template>
  <div class="order">
    <h2 class="title">
      <span>我的订单</span>
      <span>查看全部</span>
    </h2>
    <ul class="con">
      <li>
        <span class="iconfont icon-quanbudingdan"></span>
        <span>全部订单</span>
      </li>
      <li>
        <span class="iconfont icon-kuaidiwuliu"></span>
        <span>已付款</span>
      </li>
      <li>
        <span class="iconfont icon-jiesuan"></span>
        <span>已结算</span>
      </li>
      <li>
        <span class="iconfont icon-lajixiang"></span>
        <span>已失效</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Order"
};
</script>
<style lang="scss" scoped>
.order {
  border-radius: 15px;
  background: #fff;
  position: relative;
  top: -10px;
  .title {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid $font3;
    span:first-child {
      color: $font2;
      font-size: 16px;
      font-weight: bold;
    }
    span:last-child {
      font-size: 16px;
      color: $font9;
    }
  }
  .con {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 90px;
    background: #fff;
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      .iconfont {
        font-size: 30px;
      }
      span:first-child {
        margin-bottom: 10px;
        color: #000;
        font-weight: bold;
      }
      span:last-child {
        color: $font6;
      }
    }
  }
}
</style>
