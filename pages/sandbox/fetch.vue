<script setup>
const { data: todoData, pending } = await useLazyFetch("https://dummyjson.com/todos", {
  transform: (data) => data.todos,
});
console.log(todoData);
console.log(toRaw(todoData.value));
</script>

<template>
  <div v-if="pending">
    <h1>Loading...</h1>
  </div>
  <div v-else class="flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold">Fetch</h1>
    <div class="flex flex-col items-center justify-center space-y-4">
      <div v-for="item in todoData" :key="item.id">
        <span>{{ item.todo }}</span>
      </div>
    </div>
  </div>
</template>