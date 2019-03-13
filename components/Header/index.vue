<template>
  <div class="header">
    <h1>header</h1>
    <LangSelect />
  </div>
</template>

<script>
import LangSelect from '~/components/LangSelect'

export default {
  name: 'Header',
  components: {
    LangSelect
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
