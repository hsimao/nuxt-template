<template>
  <div class="about">
    <h1>{{$t('about.title')}}</h1>
    <p>{{$t('about.desc')}}</p>

    <hr>
    <!-- 多語系頁面切換範例 -->
    <NuxtLink :to="$i18n.path('about/1')" exact>
      goToId: 1
    </NuxtLink>
    <NuxtLink :to="$i18n.path('about/2')" exact>
      goToId: 2
    </NuxtLink>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('meta.title'),
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('meta.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('meta.description')
        }
      ]
    }
  },
  components: {},
  computed: {},
  asyncData(context) {
    if (context.payload) {
      // context.app.store.commit("xxx", context.payload.xxx);
    } else {
      // context.app.store.dispatch("setXXX");
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>

