<template>
  <div>
    <ul>
      <li
          v-for="item in $store.getters.categorys"
          :key="item"
      >
        {{ item }}
      </li>
    </ul>

    <h2>pc</h2>

  </div>



</template>

<script>
export default {
  name: "pcNavigation",


}


</script>

<style scoped>

</style>