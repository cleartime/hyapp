<template>
  <div class="head">
    <div class="left">
      <span class="iconfont icon-xiaoxi"></span>
    </div>
    <span class="center"></span>
    <div class="right">
      <span class="iconfont icon-xiaoxi"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHead",
  components: {}
};
</script>
<style lang="scss" scoped>
.head {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #fff;
  .left {
    width: 30px;
  }
  .center {
    text-align: center;
    flex: 1;
  }
  .right {
    width: 30px;
  }
}
</style>
