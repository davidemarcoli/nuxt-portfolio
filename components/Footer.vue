<template>
  <footer>
    <div>
      &copy; {{ currentDateTime.getFullYear() }} - Davide Marcoli - All rights reserved
    </div>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #333;
    padding: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;

    /*blur effect on background*/
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    /*opacity effect on background*/
    background-color: rgba(0, 0, 0, 0);

    /*opacity effect on text*/

    /* add opaceity to predifined colors */
    color: rgba(var(--color), 0.5);
  }
</style>

<script setup>
  const currentDateTime = new Date()
  console.log(currentDateTime.getFullYear())
</script>