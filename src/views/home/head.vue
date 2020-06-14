<template>
  <div class="head">
    <img src="" alt="" class="logo">
    <span class="title">XX商场</span>
    <div class="message">
      <img src="" alt="">
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
    width: 100px;
    height: 100%;
  }
  .message{
    text-align: right;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    img{
      width: 45px;
      height: 40px;
    }
  }
}
</style>
