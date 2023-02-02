<template>
  <header>
    <div>
      <NuxtLink to="/" class="dark:text-white font-bold text-2xl">
        DAVIDE MARCOLI
      </NuxtLink>
      <NuxtLink to="/settings" class="dark:text-white font-bold text-2xl settings-icon">
        <Icon name="uil:cog" />
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
header {
  color: #fff;
  padding: 1rem;
}
.NuxtLink {
  color: var(--color)
}

.settings-icon {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>