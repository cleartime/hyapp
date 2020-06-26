<template>
  <div class="head">
    <div class="btn">
      <span class="iconfont icon-xiaoxi"></span>
      <span class="iconfont icon-shezhi"></span>
    </div>
    <div class="con">
      <img src="/" alt="" class="headImg" />
      <span class="wx">填写微信号</span>
      <span class="name">洪杨</span>
      <span class="proxy">代理</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHead"
};
</script>
<style lang="scss" scoped>
.head {
  padding: 20px 20px 30px;
  background: $bg3;
  color: #fff;
  .btn {
    text-align: right;
    height: 34px;
    line-height: 34px;
    .iconfont {
      &.icon-xiaoxi {
        font-size: 21px;
      }
      font-size: 17px;
    }
    span:last-child {
      margin-left: 17px;
    }
  }
  .con {
    position: relative;
    height: 100px;
    display: flex;
    align-items: center;
    .headImg {
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #fff;
    }
    .wx {
      position: absolute;
      bottom: 10px;
      left: 0;
      background: $bg4;
      height: 20px;
      line-height: 20px;
      border-radius: 10px;
      width: 100px;
      text-align: center;
      color: $font3;
      font-size: 12px;
    }
    .name {
      font-size: 20px;
      color: #fff;
      margin-left: 10px;
    }
    .proxy {
      margin-left: 10px;
      font-size: 12px;
      width: 50px;
      text-align: center;
      color: $font4;
      background: $bg5;
      border-radius: 20px;
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>
