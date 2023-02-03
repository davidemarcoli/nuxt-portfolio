<script setup>
const getCurrentUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
}
</script>

<template>
  <h1 class="text-4xl">My Projects</h1>
  <div class="grid place-items-center grid-flow-col grid-rows-1 gap-10 w-3/4">
    <Card
        title="Portfolio"
        description="A personal Portfolio on which you can learn more about me and my projects."
        image="/img/projects/Portfolio.webp"
        :buttons="[
            {text: 'Github', link: 'https://github.com/davidemarcoli/Portfolio'},
            {text: 'Website', link: getCurrentUrl()}]"
    ></Card>

    <Card
        title="Doodleverse"
        description="A city manager where you can build houses and manage companies/persons."
        image="/img/projects/400.webp"
        :buttons="[
            {text: 'Github', link: 'https://github.com/davidemarcoli/DoodleVerse'},
            {text: 'Website', link: 'https://doodleverse.herokuapp.com/'}]"
    ></Card>

    <Card
        title="Grademanager Mobile"
        description="A mobile App for storing your grades. You can log in with your Google Account and have an overview about your achieved grades."
        image="/img/projects/400.webp"
        :buttons="[
            {text: 'Github', link: 'https://github.com/davidemarcoli/GradeManager-Mobile'}
            ]"
    ></Card>
  </div>
</template>