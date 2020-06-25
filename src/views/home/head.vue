<template>
  <div class="head">
    <img src="" alt="" class="logo">
    <span class="title">XX商场</span>
    <div class="message">
      <span class="iconfont icon-xiaoxi"></span>
      <span>消息</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
};
</script>
<style lang="scss" scoped>
.head{
  background: $bg1;
  height: 66px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
  .logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
  }
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  .message{
    text-align: right;
    width: 50px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    .iconfont{
      width: 45px;
      height: 40px;
      font-size: 28px;
    }
  }
}
</style>
