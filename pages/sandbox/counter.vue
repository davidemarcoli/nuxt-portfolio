<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-4xl font-bold">Counter</h1>
    <div class="flex items-center justify-center space-x-4">
      <button
        class="px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md"
        @click="counter--"
      >
        -
      </button>
      <span class="text-4xl font-bold">{{ counter }}</span>
      <button
        class="px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md"
        @click="counter++"
      >
        +
      </button>
    </div>
  </div>
</template>