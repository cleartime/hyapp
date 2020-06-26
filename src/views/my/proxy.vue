<template>
  <div class="proxy">
    <h2 class="title">
      <span>代理中心</span>
      <span>查看更多</span>
    </h2>
    <ul class="con">
      <li>
        <span class="iconfont icon-baobiao"></span>
        <span>收益报表</span>
      </li>
      <li>
        <span class="iconfont icon-daiban"></span>
        <span>粉丝订单</span>
      </li>
      <li>
        <span class="iconfont icon-zuzhijiagou"></span>
        <span>团队粉丝</span>
      </li>
      <li>
        <span class="iconfont icon-qianbao"></span>
        <span>钱包</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Proxy"
};
</script>
<style lang="scss" scoped>
.proxy {
  background: #fff;
  border-radius: 15px;
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
