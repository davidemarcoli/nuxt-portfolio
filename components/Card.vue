<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  buttons: Array,
})

</script>

<template>
  <div class="rounded-lg shadow-lg card max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg object-contain" :src="image" alt="Portfolio Image"/>
    </a>
    <div class="p-6">
      <h5 class="text-xl font-medium mb-2">{{title}}</h5>
      <p class="text-base mb-4">
        {{description}}
      </p>
      <button v-for="button in buttons" type="button"
              class="mr-4 inline-block px-6 py-2.5 bg-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        <a class="button-link" target="_blank" :href="button.link">
          {{button.text}}
        </a>
      </button>
<!--      <button type="button"-->
<!--              class="ml-4 inline-block px-6 py-2.5 bg-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">-->
<!--        <a class="button-link" target="_blank" href="https://github.com/davidemarcoli/Portfolio">Github</a>-->
<!--      </button>-->
    </div>
  </div>
</template>

<style>
.card {
  margin: 1rem;
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.button-link {
  color: var(--color);
  text-decoration: none;
}
</style>