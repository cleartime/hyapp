<template>
  <div class="until">
    <h2 class="title">
      <span>必备工具</span>
    </h2>
    <ul class="con">
      <li>
        <span></span>
        <span>收藏</span>
      </li>
      <li>
        <span></span>
        <span>邀请好友</span>
      </li>
      <li>
        <span></span>
        <span>消息</span>
      </li>
      <li>
        <span></span>
        <span>联系客服</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Until"
};
</script>
<style lang="scss" scoped>
.until {
  margin-top: 10px;
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
    span {
      color: $font2;
      font-size: 16px;
      font-weight: bold;
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
