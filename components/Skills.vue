<script setup>
const learnedSkills = [
  {name: 'Angular', backgroundColor: '#dd1b16', imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg", link: 'https://angular.io/'},
  {name: 'TypeScript', backgroundColor: '#007acc', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", link: 'https://www.typescriptlang.org/'},
  {name: 'JavaScript', backgroundColor: '#f7df1e', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", link: 'https://www.javascript.com/'},
  {name: 'HTML', backgroundColor: '#e34c26', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
  {name: 'CSS', backgroundColor: '#1572b6', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
  {name: 'Java', backgroundColor: '#007396', imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png", link: 'https://www.java.com/en/'},
  {name: 'Python', backgroundColor: '#3776ab', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", link: 'https://www.python.org/'},
  {name: 'C', backgroundColor: '#a8b9cc', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg", link: 'https://en.wikipedia.org/wiki/C_(programming_language)', darkTextColor: true},
  {name: 'SQL', backgroundColor: '#4479a1', imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/MySQL_logo.svg/1920px-MySQL_logo.svg.png", link: 'https://www.mysql.com/'},
  {name: 'Git', backgroundColor: '#f05032', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png", link: 'https://git-scm.com/'},
  {name: "Docker", backgroundColor: '#2496ed', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png", link: 'https://www.docker.com/'},
  {name: 'Linux', backgroundColor: '#fcc624', imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png", link: 'https://www.linux.org/'}
]
</script>

<template>
  <h1 class="text-4xl mt-4 text-center">My Skills</h1>
  <div id="skill-container">

    <div v-for="skill in learnedSkills" class="skill" data-aos="zoom-in-up" data-aos-duration="1000">
      <a class="skill-link" :href="skill.link" target="_blank">
        <!--        <div class="skill" [ngClass]="skill.darkTextColor ? 'skillDarkText':''" style="background-color: {{skill.backgroundColor}};">{{skill.name}}</div>-->
        <img :src="skill.imageUrl" class="skill-image w-24" alt="Image of {{skill.name}} Logo">
      </a>
    </div>
  </div>
</template>

<style scoped>
#skill-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.skill {
  flex: 0 0 26%;
  border-radius: 10px;
  color: white;
  padding: 20px;
  transition: 0.5s ease;
  font-size: 2em;
  width: fit-content
}

@media screen and (max-width: 996px) {
  .skill {
    flex: 0 0 40%;
  }
}

.skill img {
  margin: 0 auto;
  display: block;
}

.skill {
  color: white;
}

.skill-link {
  text-decoration: none;
}

.skillDarkText {
  color: #121212;
}

.skill:hover {
  scale: 1.1;
}
</style>