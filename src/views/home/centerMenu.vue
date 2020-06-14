<template>
  <div class="centerMenu">
    <ul>
      <li v-for="(i, index) in list" :key="index">
        <img src="@/assets/img/home/centerMenu.png" alt="" />
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
  padding: 15px 0 0;
  color: $font2;
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      text-align: center;
      margin-bottom: 19px;
      img {
        display: block;
        width: 33.5px;
        height: 33.5px;
        margin: auto;
        margin-bottom: 5px;
      }
      span {
        color: $font2;
      }
    }
  }
}
</style>
