<template>
  <div class="langSelect">
    <!-- 多語系選單範例 下拉式 -->
    <select v-model="$i18n.locale" @change="changeLangSelect()">
      <option v-for="(lang, i) in locales" :key="`Lang${i}`"
        :value="lang">{{ lang }}</option>
    </select>

    <!-- 多語系選單範例 按鈕式 -->
    <a v-if="$i18n.locale!=='zh'" @click.prevent="changeLangBtn('zh')"
      class="Header__Link" active-class="none"
      exact>
      {{ $t('links.zh') }}
    </a>
    <a v-if="$i18n.locale!=='en'" @click.prevent="changeLangBtn('en')"
      class="Header__Link" active-class="none"
      exact>
      {{ $t('links.en') }}
    </a>

    <!-- 多語系頁面切換範例 -->
    <NuxtLink :to="$i18n.path('')" class="Header__Link"
      exact>
      {{ $t('links.home') }}
    </NuxtLink>
    <NuxtLink :to="$i18n.path('about')" class="Header__Link"
      exact>
      {{ $t('links.about') }}
    </NuxtLink>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'langSelect',
  computed: {
    ...mapGetters(['locales', 'originUrl'])
  },
  methods: {
    // 下拉式
    changeLangSelect() {
      this.changeUrl()
      document.cookie = 'locale=' + this.$i18n.locale
    },
    // 點選式
    changeLangBtn(lang) {
      this.$i18n.locale = lang
      document.cookie = 'locale=' + lang
      this.changeUrl()
    },
    // 判斷當下語系並更新網址
    changeUrl() {
      // 如果為預設語系 直接返回原始網址，不加前綴
      if (this.$i18n.fallbackLocale === this.$i18n.locale) {
        this.$router.push(this.originUrl)
      } else {
        // 非預設語系 加上語系前綴
        this.$router.push(this.$i18n.locale + this.originUrl)
      }
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>