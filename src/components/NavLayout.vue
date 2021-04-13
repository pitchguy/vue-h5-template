<template>
  <div class="app-container">
    <div class="layout-content">
      <van-nav-bar
        :title="$route.meta.title"
        left-text="返回"
        right-text="分享"
        left-arrow
        @click-left="cancel"
        @click-right="showShare = true"
      />
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <van-share-sheet v-model="showShare" :options="shareOptions" title="立即分享给好友" description="描述信息" />
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data: () => ({
    showShare: false,
    shareOptions: [
      { name: '微信', icon: 'wechat' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link', description: '描述信息' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],
  }),
  components: {},
  methods: {
    cancel() {
      this.$router.back(-1);
    },
  },
};
</script>
