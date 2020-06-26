<template>
  <div class="my">
    <Head />
    <div class="con">
      <Account />
      <Order />
      <Proxy />
      <Until />
    </div>
  </div>
</template>

<script>
import Head from "./head.vue";
import Account from "./account.vue";

import Order from "./order.vue";

import Proxy from "./proxy.vue";

import Until from "./until.vue";

export default {
  name: "Home",
  components: {
    Head,
    Account,
    Order,
    Proxy,
    Until
  }
};
</script>
<style lang="scss" scoped>
.my {
  .con {
    background: $bg2;
    padding: 0 20px;
  }
}
</style>
