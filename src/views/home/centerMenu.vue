<template>
  <div class="centerMenu">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <img src="" alt="" />
        <span>{{ i.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "centerMenu",
  data() {
    return {
      list: [
        {
          name: "天猫淘宝",
        },
        {
          name: "京东",
        },
        {
          name: "拼多多",
        },
        {
          name: "唯品会",
        },
        {
          name: "赚积分",
        },
        {
          name: "生活券",
        },
        {
          name: "饿了么",
        },
        {
          name: "我的订单",
        },
        {
          name: "我的订单",
        },
        {
          name: "邀请好友",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.centerMenu {
  height: 100px;
  padding: 15px 0 40px;
  height: 250px;
  color: $font2;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      text-align: center;
      img {
        display: block;
        width: 67px;
        height: 67px;
      }
      span{
        margin-top: 5px
      }
    }
  }
}
</style>
