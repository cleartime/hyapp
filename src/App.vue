<template>
  <div id="app">
    <Head v-if="!showFoot" />
    <router-view />
    <div class="foot" v-if="showFoot">
      <ul>
        <li
          @click="link(i, index)"
          v-for="(i, index) in list"
          :key="index"
          :class="active === index ? 'act' : ''"
        >
          <span class="iconfont" :class="`icon-${i.icon}`"></span>
          <span class="name">{{ i.name }}</span>
        </li>
      </ul>
    </div>
    <div class="noLogin" v-if="isLogin">
      <div class="noLogin-con">
        <span class="tip">登录开启品质生活</span>
        <span class="btn">立即登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/component/common/head.vue";
export default {
  name: "App",
  components: {
    Head
  },
  data() {
    return {
      isLogin: false,
      active: 0,
      list: [
        {
          name: "首页",
          icon: "shouye",
          url: "/"
        },
        {
          name: "分类",
          icon: "fenlei"
        },
        {
          name: "升级VIP",
          icon: "tubiaozhizuomoban"
        },
        {
          name: "一键发圈",
          icon: "fenxiang"
        },
        {
          name: "我的",
          icon: "wode",
          url: "/my"
        }
      ]
    };
  },
  computed: {
    showFoot() {
      return this.$route.meta.showFoot;
    }
  },
  created() {},
  methods: {
    link(item, index) {
      if (item.url === this.$route.path) return;
      this.$router.push(item.url);
      this.active = index;
    }
  },
  watch: {
    $route() {
      this.active = this.list.findIndex(item => item.url === this.$route.path);
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding-bottom: 70px;
  .foot {
    box-shadow: -2px 4px 8px 0px #000;
    z-index: 2;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 60px;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 10px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        .iconfont {
          font-size: 24px;
          color: $font1;
          margin-bottom: 5px;
        }
        .name {
          color: $font1;
        }
        &.act {
          .iconfont {
            color: $bg1;
          }
          .name {
            color: $bg1;
          }
        }
      }
    }
  }
  .noLogin {
    z-index: 2;
    position: fixed;
    bottom: 70px;
    left: 20px;
    width: 100%;
    height: 75px;
    border-radius: 75px;
    width: calc(100% - 40px);
    margin: 0 auto;
    background: rgba($color: #000000, $alpha: 0.75);
    .noLogin-con {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 75px;
      line-height: 75px;
      color: #fff;
      font-size: 20px;
      .tip {
        margin-left: 40px;
      }
      .btn {
        margin-right: 10px;
        background: $bg1;
        display: block;
        height: 50px;
        text-align: center;
        line-height: 50px;
        width: 100px;
        border-radius: 50px;
      }
    }
  }
}
</style>
