<template>
  <van-empty class="re-empty" image="error" description="你要访问的页面不存在">
    <van-button round type="info" class="bottom-button" @click="routerReturn">
      返回
    </van-button>
  </van-empty>
</template>

<script>
// import { getUserInfo } from "@/api/user.js";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      wechat: `${this.$cdn}/wx/640.gif`,
    };
  },
  computed: {
    ...mapGetters(["userName"]),
  },
  mounted() {
    // this.initData();
  },
  methods: {
    routerReturn() {
      this.$router.back(-1);
    },
    // 请求数据案例
    // initData() {
    //   // 请求接口数据，仅作为展示，需要配置src->config下环境文件
    //   const params = { user: "sunnie" };
    //   getUserInfo(params)
    //     .then(() => {})
    //     .catch(() => {});
    // },
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch("setUserName", "文字文字");
    },
  },
};
</script>

<style lang="scss" scoped>
.re-empty {
  min-height: 100vh;
  background: #ffffff;
  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
