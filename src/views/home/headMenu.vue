<template>
  <div class="headMenu">
    <span v-for="(i, index) in list" :class="active === index ? 'act':''" :key="index">{{ i.name }}</span>
    <img src="" alt="" class="arrow">
  </div>
</template>

<script>
export default {
  name: "headMenu",
  data() {
    return {
      list: [
        {
          name: "全部",
        },
        {
          name: "美食",
        },
        {
          name: "家居日用",
        },
        {
          name: "母婴",
        },
        {
          name: "女装",
        },
        {
          name: "美妆",
        },
        {
          name: "男装",
        },
      ],
      active: 0
    };
  },
};
</script>

<style lang="scss" scoped>
.headMenu {
  height: 50px;
  background: $bg1;
  padding: 0 20px;
  color: #fff;
  line-height: 50px;
  span {
    &.act {
      font-size: 16px;
      font-weight: bold;
    }
    &:not(:first-child){
      margin-left: 14px;
    }
  }
  .arrow{
    width: 20px;
    height: 10px;
  }
}
</style>
