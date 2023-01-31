<script setup>
definePageMeta({
  layout: 'sandbox',
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen text-center">
    <Title>Sandbox</Title>
    <ul class="flex flex-col items-center justify-center space-y-4">
      <li>
        <NuxtLink to="counter">Counter</NuxtLink>
      </li>
      <li>
        <NuxtLink to="fetch">Fetch</NuxtLink>
      </li>
    </ul>
  </div>
</template>