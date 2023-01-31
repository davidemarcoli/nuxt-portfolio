<template>
  <div class="sandbox-header">
    <n-gradient-text type="success">
      Nuxt Sandbox!
    </n-gradient-text>
    <Icon name="uil:flask" />
  </div>
</template>

<style scoped>
  .sandbox-header {
    margin-left: 1em;
    margin-top: 0.5em;
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 2em;
    position: fixed;
  }
  n-gradient-text {
    margin-right: 0.5em;
  }
</style>