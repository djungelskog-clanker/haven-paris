<script lang="ts">
  interface Props {
    hedgehog: string;
  }

  let { hedgehog }: Props = $props();

  /** What the top three teams pick from, one prize each. */
  const bin = [
    { count: "x3", title: "Cartes Steam de 25 €", body: "De quoi agrandir ta bibliothèque de jeux." },
    { count: "", title: "Des jeux vidéo", body: "Pour jouer à autre chose que ton propre jeu." },
    { count: "", title: "Et d’autres surprises…", body: "On garde un peu de mystère." },
  ];
</script>

<section
  id="lots"
  class="relative z-20 bg-[#4a1d0c] px-4 pt-[clamp(3rem,7vw,6rem)] pb-[clamp(3rem,7vw,6rem)]"
>
  <div
    aria-hidden="true"
    class="scallop absolute inset-x-0 top-0 h-[clamp(1.25rem,3vw,2.5rem)] -translate-y-full"
  ></div>

  <div class="mx-auto max-w-[70rem]">
    <h2
      class="text-center font-display text-display text-white text-shadow-[0_3px_0_var(--color-haven-orange-deep)] md:text-end"
    >
      Tout ça, tu peux le gagner
    </h2>
    <p
      class="mt-3 text-center font-body text-lead text-haven-butter md:ml-auto md:max-w-[38ch] md:text-end"
    >
      Les 3 meilleures équipes piochent dans un bac de 9 lots : un lot par
      personne, premier arrivé, premier servi !
    </p>

    <div
      class="mt-[clamp(1.5rem,3vw,2.5rem)] grid gap-[clamp(0.75rem,1.5vw,1.25rem)] md:grid-cols-[1.2fr_1fr]"
    >
      <div
        class="relative flex flex-col justify-center overflow-hidden rounded-[1.5rem] bg-haven-butter p-[clamp(1.25rem,3vw,2.5rem)] -rotate-1"
      >
        <p class="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-haven-orange-deep">
          1 an
        </p>
        <p class="mt-1 font-display text-subheading text-haven-orange-deep">
          de Tuta Mail offert à tout le monde
        </p>
        <p class="mt-3 font-body text-copy text-haven-brown-dark">
          Chaque participant·e repart avec un an de messagerie chiffrée Tuta,
          gagnant ou pas.
        </p>
        <img
          src={hedgehog}
          alt=""
          aria-hidden="true"
          width="422"
          height="308"
          class="pointer-events-none absolute -right-4 -bottom-6 hidden w-[clamp(6rem,14vw,10rem)] opacity-90 select-none sm:block"
        />
      </div>

      <ul class="grid list-none gap-[clamp(0.75rem,1.5vw,1.25rem)] p-0">
        {#each bin as prize (prize.title)}
          <li
            class="flex items-start gap-4 rounded-[1.25rem] bg-[#6b2d12] p-[clamp(1rem,2vw,1.5rem)]"
          >
            {#if prize.count}
              <span
                class="shrink-0 rounded-full bg-haven-gold px-3 py-1 font-display text-[clamp(0.9rem,1.3vw,1.2rem)] leading-none text-[#4a1d0c]"
                >{prize.count}</span
              >
            {/if}
            <div>
              <h3 class="font-display text-subheading text-white">{prize.title}</h3>
              <p class="mt-1 font-body text-copy text-white/75">{prize.body}</p>
            </div>
          </li>
        {/each}
      </ul>
    </div>

    <div
      class="mt-[clamp(1.5rem,3vw,2.5rem)] flex flex-col items-center gap-4 md:flex-row md:justify-between"
    >
      <p class="font-body text-[clamp(0.85rem,1.1vw,1.05rem)] text-white/60">
        Les lots et les quantités peuvent encore évoluer.
      </p>
      <a
        href="#top"
        class="rounded-[1.25rem] bg-haven-butter px-[clamp(1.25rem,2.4vw,2.25rem)] py-[clamp(0.6rem,1.1vw,1rem)] font-display text-[clamp(1.15rem,1.9vw,1.875rem)] leading-none text-haven-orange-deep shadow-[0_4px_0_var(--color-haven-orange-deep)] transition-transform hover:scale-[1.04] active:scale-100"
      >
        Je m’inscris, c’est gratuit
      </a>
    </div>
  </div>

  <div
    aria-hidden="true"
    class="scallop absolute inset-x-0 bottom-0 h-[clamp(1.25rem,3vw,2.5rem)] translate-y-full rotate-180"
  ></div>
</section>

<style>
  /* The row of bumps Lyon's prize section has along its edges. */
  .scallop {
    background: radial-gradient(
        circle at 50% 100%,
        #4a1d0c 70%,
        transparent 71%
      )
      0 0 / clamp(2.5rem, 6vw, 5rem) 200% repeat-x;
  }
</style>
