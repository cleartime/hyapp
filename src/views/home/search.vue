<template>
  <div class="search">
    <span class="iconfont icon-sousuo"></span>
    <input type="text" class="input" placeholder="请输入宝贝标题">
  </div>
</template>

<script>

export default {
  name: "search",
};
</script>

<style lang="scss" scoped>
.search{
  position: relative;
  background: $bg1;
  height: 40px;
  padding: 20px;
  .iconfont{
    z-index: 1;
    position: absolute;
    left: 40px;
    top: 13px;
    width: 35px;
    height: 35px;
  }
  input{
    position: absolute;
    padding-left: 45px;
    top: 0;
    width: calc(100% - 40px - 45px);
    height: 100%;
    font-size: 16px;
    border-radius: 25px
  }
}
</style>
