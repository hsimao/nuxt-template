const testData = [
  {
    id: 0,
    name: '資料1'
  },
  {
    id: 2,
    name: '資料2'
  }
]

export const state = () => ({
  testData: [],
  originUrl: '',
  locales: ['zh', 'en', 'jp'],
  locale: 'zh'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_ORIGIN_URL(state, originUrl) {
    state.originUrl = originUrl
  },
  SET_TESTDATA(state, payload) {
    state.testData = payload
  }
}

export const actions = {
  // 本地假資料
  setTestData({ commit }) {
    commit('SET_TESTDATA', testData)
  }

  // 伺服器端取得所有文章資料
  // nuxt初始化資料方法,
  // 第一次加載時在server端先取一次資料，並儲存到store
  // 接下來用戶端即可調用store資料，而不重複再跟server取資料
  // nuxtServerInit(vuexContext, context) {
  //   return context.app.$axios
  //     .$get("/json/footerLinks.json")
  //     .then(data => {
  //       vuexContext.commit("setFooterLink", data.footerLinks);
  //     })
  //     .catch(err => console.log(err));
  // },
  // async nuxtServerInit({ commit }, { app }) {
  //   const footerLinks = await app.$axios.$get("/api/footer-link");
  //   commit("setFooterLink", footerLinks.data.footerLinks);
  //   const country = await app.$axios.$get("/api/country");
  //   commit("setCountry", country.data.country);
  //   const recommends = await app.$axios.$get("/api/recommends");
  //   commit("setRecommend", recommends.data.recommends);
  // }

  // 呼叫API
  // getRecommend({ commit }) {
  //   this.$axios.$get("/api/recommends").then(res => {
  //     commit("setRecommend", res.data.recommends);
  //   });
  // }
}

export const getters = {
  testData: state => state.testData,
  locales: state => state.locales,
  locale: state => state.locale,
  originUrl: state => state.originUrl
}
