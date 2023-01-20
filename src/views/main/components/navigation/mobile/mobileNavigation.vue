<template>
  <ul>
    <li
        v-for="item in $store.getters.categorys"
        :key="item"

    >
      {{ item }}
    </li>
  </ul>
  <h2>这里是手机端</h2>

</template>

<script>
export default {
  name: "mobileNavigation"
}

</script>

<style scoped>

</style>