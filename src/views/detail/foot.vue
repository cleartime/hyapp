<template>
  <div class="foot">
    <div class="starBtn">
      <span class="iconfont icon-shoucang"></span>
      <span class="text">收藏</span>
    </div>
    <div class="shareBtn">
      <span class="iconfont icon-fenxiang"></span>
      <span class="text">分享赚</span>
    </div>
    <div class="slefBtn">
      <span class="iconfont icon-icon-"></span>
      <span class="text">自购省</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailFoot",
  components: {}
};
</script>
<style lang="scss" scoped>
.foot {
  height: 70px;
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 0 20px;
  .iconfont {
    font-size: 24px;
    margin-right: 5px;
  }
  .starBtn {
    display: flex;
    align-items: center;
    justify-content: center;

    color: $font8;
    .text {
      font-size: 16px;
      color: $font9;
    }
  }
  .shareBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 16px;
    color: #fff;
    background: $bg7;
    height: 45px;
    border-radius: 22.5px;
    margin: 0 20px;
  }
  .slefBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 16px;
    color: #fff;
    background: $bg8;
    height: 45px;
    border-radius: 22.5px;
  }
}
</style>
