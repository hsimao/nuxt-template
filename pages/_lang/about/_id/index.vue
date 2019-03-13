<template>
  <div class="aboutDetail">
    <h1>aboutDetail</h1>
    <p>當前頁面id： {{id}}</p>
  </div>
</template>

<script>
export default {
  name: 'aboutDetail',
  async asyncData({ store, params, route }) {
    try {
      // await store.dispatch("getSchool", params.id);
      // const school = store.getters.school;
      // const url = `https://merrichlife.com/${route.path}`;
      return { id: params.id }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
