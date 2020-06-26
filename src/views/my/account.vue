<template>
  <div class="account">
    <div class="top">
      <div class="left">
        <h2>账户余额¥0.00</h2>
        <p>每月25号，到账上月结算收益></p>
      </div>
      <div class="right">
        <span>立即提现></span>
      </div>
    </div>
    <ul class="bottom">
      <li>
        <span>¥0.00</span>
        <span>本月预估</span>
      </li>
      <li>
        <span>¥0.00</span>
        <span>本月结算</span>
      </li>
      <li>
        <span>¥0.00</span>
        <span>上月结算</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Account"
};
</script>
<style lang="scss" scoped>
.account {
  position: relative;
  top: -20px;
  .top {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 80px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 14px;
    .left {
      h2 {
        color: $font5;
        font-size: 18px;
      }
      p {
        margin-top: 10px;
        font-size: 12px;
        color: rgba($color: #fff, $alpha: 0.5);
      }
    }
    .right {
      span {
        padding: 4px 10px;
        background: $bg6;
        color: $font6;
        border-radius: 10px;
      }
    }
  }
  .bottom {
    height: 80px;
    background: #fff;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
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
