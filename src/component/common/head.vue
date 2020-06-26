<template>
  <div class="head" :class="setOpacity ? 'opacity' : ''">
    <div class="left" @click="$router.go(-1)">
      <span class="iconfont icon-jiantouarrowhead7"></span>
    </div>
    <span class="center">商品详情</span>
    <div class="right" @click="$router.push('/')">
      <span class="iconfont icon-shouye"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHead",
  components: {},
  computed: {
    setOpacity() {
      return this.$route.meta.opacity;
    }
  }
};
</script>
<style lang="scss" scoped>
.head {
  &.opacity {
    background: rgba($color: #fff, $alpha: 0.5);
  }
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #fff;
  color: #000;
  .iconfont {
    font-size: 30px;
  }
  .left {
    width: 30px;
  }
  .center {
    font-size: 22px;
    text-align: center;
    flex: 1;
  }
  .right {
    width: 30px;
  }
}
</style>
