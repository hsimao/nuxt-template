<template>
  <div>
    <!-- 多語系選單範例 下拉式 -->
    <select v-model="$i18n.locale" @change="changeLang()">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`"
        :value="lang">{{ lang }}</option>
    </select>
    <!-- 多語系顯示範例 -->
    <p> meta title: {{ $t('meta.title') }}</p>
    <p> meta desc : {{ $t('meta.description') }}</p>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return { langs: ['zh', 'en'] }
  },
  methods: {
    changeLang() {
      // 儲存到 cooike
      document.cookie = 'locale=' + this.$i18n.locale
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>