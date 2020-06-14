<template>
  <div class="centerBanner">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <img :src="i.url" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "centerBanner",
  data() {
    return {
      list: [
        {
          url: require('@/assets/img/home/centerBanner.png'),
        },
        {
          url: require('@/assets/img/home/centerBanner.png'),
        },
        {
          url: require('@/assets/img/home/centerBanner.png'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.centerBanner {
  padding: 10px 30px 0;
  ul {
    display: flex;
    li {
      flex: 1;
      width: 33.33%;
      img {
        width: 100%;
        height: 140px;
      }
      &:not(:first-child){
        margin-left: 5px;
      }
    }
  }
}
</style>
