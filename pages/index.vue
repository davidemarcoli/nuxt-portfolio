<template>
  <div class="h-screen">
    <div class="big-text software">
      Software
    </div>
    <div class="big-text developer">
      Developer
    </div>
  </div>

  <div class="grid h-screen place-items-center">
    <div class="flex place-items-center items-center justify-center p-24">
      <div class="grid place-items-center grid-flow-row grid-cols-2 gap-10 w-3/4">
        <div class="col-span-2 text-4xl">
          <h1 class="title">My Name is <span style="text-decoration: underline">Davide Marcoli</span> and i'm from Switzerland</h1>
        </div>
        <div class="col-span-1 text-lg">
          <div>
            <h2 class="text-2xl">My Life <span style="font-size: 0.5em">(As of 2022)</span></h2>
            <p>
              I'm currently make my Apprenticeship as a <strong>Software Developer @ SIX</strong>, a Swiss based Company that operates the infrastructure for the Swiss financial centre.
              The company provides services relating to securities transactions, the processing of financial information and payment transactions.
              <br><br>
              I'm also a student at the vocational Matura school <a href="https://www.bms-zuerich.ch/" target="_blank">BMSZ</a> and the technical vocational school Vocational school <a href="https://www.tbz.ch/" target="_blank">TBZ</a> in Zurich.
              <br><br>
              In my free time I love to read and watch exciting series like <a href="https://www.imdb.com/title/tt3007572/" style="color: rgba(0,255,254,0.51)" target="_blank">Locke & Key</a> or <a href="https://www.imdb.com/title/tt5232792/" style="color: rgba(255,123,123,0.69)" target="_blank">Lost in Space</a>.
              Fantasy and Sci-Fi are my favorite categories.
            </p>
          </div>
        </div>
        <div class="col-span-1 justify-center flex items-center grid place-items-center">
          <div>
          <img src="/img/bild_ferien_compressed_resized_small.webp" alt="Ferien Foto von Davide Marcoli" class="max-w-sm">
        </div>
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

</style>