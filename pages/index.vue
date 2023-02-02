<script setup>
const getCurrentUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
}

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
  <div>
    <div class="h-screen">
      <div class="big-text software">
        Software
      </div>
      <div class="big-text developer">
        Developer
      </div>
    </div>

    <div class="grid h-screen place-items-center" data-aos="zoom-in" data-aos-duration="2000">
      <div class="flex place-items-center items-center justify-center p-24">
        <div class="grid place-items-center grid-flow-row grid-cols-2 gap-10 w-3/4">
          <div class="col-span-2 text-4xl">
            <h1 class="title">My Name is <span style="text-decoration: underline">Davide Marcoli</span> and i'm from
              Switzerland</h1>
          </div>
          <div class="col-span-1 text-lg">
            <div>
              <h2 class="text-2xl">My Life <span style="font-size: 0.5em">(As of 2022)</span></h2>
              <p>
                I'm currently make my Apprenticeship as a <strong>Software Developer @ SIX</strong>, a Swiss based
                Company
                that operates the infrastructure for the Swiss financial centre.
                The company provides services relating to securities transactions, the processing of financial
                information
                and payment transactions.
                <br><br>
                I'm also a student at the vocational Matura school <a href="https://www.bms-zuerich.ch/"
                                                                      target="_blank">BMSZ</a>
                and the technical vocational school Vocational school <a href="https://www.tbz.ch/"
                                                                         target="_blank">TBZ</a> in Zurich.
                <br><br>
                In my free time I love to read and watch exciting series like <a
                  href="https://www.imdb.com/title/tt3007572/" style="color: rgba(0,255,254,0.51)" target="_blank">Locke
                &
                Key</a> or <a href="https://www.imdb.com/title/tt5232792/" style="color: rgba(255,123,123,0.69)"
                              target="_blank">Lost in Space</a>.
                Fantasy and Sci-Fi are my favorite categories.
              </p>
            </div>
          </div>
          <div class="col-span-1">
            <div>
              <img src="/img/about-me/bild_ferien_compressed_resized_small.webp" alt="Ferien Foto von Davide Marcoli"
                   class="max-w-sm">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-screen grid place-items-center">
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

    </div>

    <div class="h-screen grid place-items-center">
      <h1 class="text-4xl mt-4 text-center">My Skills</h1>
      <div id="skill-container">

        <div v-for="skill in learnedSkills" class="skill" data-aos="zoom-in-up" data-aos-duration="1000">
          <a class="skill-link" :href="skill.link" target="_blank">
            <!--        <div class="skill" [ngClass]="skill.darkTextColor ? 'skillDarkText':''" style="background-color: {{skill.backgroundColor}};">{{skill.name}}</div>-->
            <img :src="skill.imageUrl" class="skill-image w-24" alt="Image of {{skill.name}} Logo">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.big-text {
  position: absolute;
  font-size: 8em;
  font-weight: 400;
  padding: 1rem;
  opacity: 0.5;
}

.software {
  top: 15vh;
  left: 45vw;
  color: var(--color-primary);
}

.developer {
  bottom: 40vh;
  right: 48vw;
  color: var(--color-primary);
}

/*.card {*/
/*  margin: 1rem;*/
/*  background-color: var(--bg-secondary);*/
/*  border-radius: 1rem;*/
/*  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);*/
/*}*/

/*.button-link {*/
/*  color: var(--color);*/
/*  text-decoration: none;*/
/*}*/

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