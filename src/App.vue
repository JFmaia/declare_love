<template>
  <header>
      <img class="logo" src="./assets/Icon.svg" alt="Logo">
      <strong>love.love</strong>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 120px;
  border-bottom: solid 1px #2a0118;
}
.logo {
  height: 40px;
  width: 40px;
}
</style>
