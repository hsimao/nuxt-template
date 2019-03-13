<template>
  <div class="home">
    <h1>{{$t('home.title')}}</h1>
    <p>{{$t('home.desc')}}</p>
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

