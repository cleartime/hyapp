<template>
  <div class="login">
    <h2 class="title">验证码登录</h2>
    <p class="phone">
      <input
        type="tel"
        placeholder="请输入您的手机号"
        v-model="phone"
        maxlength="11"
      />
    </p>
    <p class="password">
      <input
        type="password"
        placeholder="请输入验证码"
        v-model="password"
        maxlength="20"
      />
      <span @click="getCode">{{ getCodeBtnText }}</span>
    </p>
    <p class="btn">
      <span @click="submit">确认登录</span>
    </p>
    <p class="tip">
      登录注册代表同意
      <span>用户协议</span>和
      <span>隐私协议</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      getCodeBtnTime: 59,
      getCodeBtnText: "获取验证码",
      phone: 17823412344,
      password: 324234
    };
  },
  components: {},
  methods: {
    getCode() {
      if (this.getCodeBtnText === "获取验证码") {
        let time = setInterval(() => {
          if (this.getCodeBtnTime <= 0) {
            clearInterval(time);
            this.getCodeBtnTime = 59;
            this.getCodeBtnText = "获取验证码";
            return;
          }
          this.getCodeBtnText = "重新获取（" + this.getCodeBtnTime + "）";
          this.getCodeBtnTime--;
        }, 1000);
      }
    },
    submit() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: #fff;
  padding: 20px;
  .title {
    font-size: 24px;
    font-weight: bold;
    color: $font2;
    margin-bottom: 50px;
  }
  .phone {
    height: 50px;
    line-height: 50px;
    color: $font2;
    font-size: 16px;
    border-bottom: 1px solid #eee;
  }
  .password {
    height: 50px;
    line-height: 50px;
    color: $font2;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    span {
      color: $bg1;
      font-size: 14px;
    }
  }
  .btn {
    margin: 50px 0 20px;
    text-align: center;
    line-height: 50px;
    width: 100%;
    font-size: 16px;
    background: $bg1;
    border-radius: 5px;
    color: #fff;
    &.dis {
      background: rgb(247, 247, 247);
      pointer-events: none;
    }
  }
  .tip {
    text-align: center;
    color: $font3;
    font-size: 14px;
    span {
      color: $bg1;
    }
  }
}
</style>
