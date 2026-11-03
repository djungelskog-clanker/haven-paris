<script lang="ts">
  interface Props {
    hedgehog: string;
  }

  let { hedgehog }: Props = $props();

  /** What every participant goes home with. */
  const forEveryone = [
    "un t-shirt Haven",
    "des stickers Hack Club",
    "1 an de Tuta Mail",
  ];

  // The googly eyes look at the pointer, wherever it is on the page.
  let eyes: HTMLElement | undefined = $state();
  let look = $state({ x: 0, y: 0 });

  function track(e: PointerEvent) {
    if (!eyes) return;
    const box = eyes.getBoundingClientRect();
    const dx = e.clientX - (box.left + box.width / 2);
    const dy = e.clientY - (box.top + box.height / 2);
    const d = Math.hypot(dx, dy) || 1;
    const reach = Math.min(1, d / 200);
    look = { x: (dx / d) * reach, y: (dy / d) * reach };
  }
</script>

<svelte:window onpointermove={track} />

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
      class="mt-[clamp(1.5rem,3vw,2.5rem)] grid gap-[clamp(0.75rem,1.5vw,1.25rem)] md:grid-cols-[1.1fr_1fr]"
    >
      <div
        class="relative flex flex-col justify-center overflow-hidden rounded-[1.5rem] bg-haven-butter p-[clamp(1.25rem,3vw,2.5rem)] -rotate-1"
      >
        <p class="font-display text-subheading text-haven-orange-deep">
          Pour tout le monde, gagnant ou pas :
        </p>
        <ul class="mt-3 list-none p-0">
          {#each forEveryone as gift (gift)}
            <li
              class="flex items-center gap-3 py-1 font-display text-[clamp(1.25rem,2.4vw,2.1rem)] leading-tight text-haven-orange-bright"
            >
              <span
                aria-hidden="true"
                class="size-[0.55em] shrink-0 rotate-45 rounded-[0.15em] bg-haven-gold"
              ></span>
              {gift}
            </li>
          {/each}
        </ul>
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
        <li class="flex items-stretch overflow-hidden rounded-[1.25rem] bg-[#6b2d12]">
          <span
            class="flex shrink-0 items-center bg-haven-gold px-[clamp(0.9rem,1.6vw,1.4rem)] font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-none text-[#4a1d0c]"
            >x3</span
          >
          <div class="p-[clamp(1rem,2vw,1.5rem)]">
            <h3 class="font-display text-subheading text-white">
              Cartes Steam de 25 €
            </h3>
            <p class="mt-1 font-body text-copy text-white/75">
              De quoi agrandir ta bibliothèque de jeux.
            </p>
          </div>
        </li>

        <li
          class="flex items-center justify-between gap-4 rounded-[1.25rem] bg-[#6b2d12] p-[clamp(1rem,2vw,1.5rem)]"
        >
          <div>
            <h3 class="font-display text-subheading text-white">Des jeux vidéo</h3>
            <p class="mt-1 font-body text-copy text-white/75">
              Pour jouer à autre chose que ton propre jeu.
            </p>
          </div>
          <!-- A little controller, drawn in the Haven palette. -->
          <svg
            viewBox="0 0 120 80"
            aria-hidden="true"
            class="w-[clamp(4rem,8vw,6.5rem)] shrink-0 -rotate-8"
          >
            <path
              d="M30 14h60c14 0 22 10 25 26l3 16c2 12-4 20-12 20-6 0-10-4-14-10l-4-6H32l-4 6c-4 6-8 10-14 10-8 0-14-8-12-20l3-16C8 24 16 14 30 14Z"
              fill="#fa681b"
              stroke="#ffe382"
              stroke-width="4"
              stroke-linejoin="round"
            />
            <rect x="24" y="34" width="22" height="7" rx="2" fill="#ffe382" />
            <rect x="31.5" y="26.5" width="7" height="22" rx="2" fill="#ffe382" />
            <circle cx="86" cy="30" r="5" fill="#b8c220" />
            <circle cx="96" cy="40" r="5" fill="#ffd059" />
            <circle cx="76" cy="40" r="5" fill="#ffd059" />
            <circle cx="86" cy="50" r="5" fill="#b8c220" />
            <rect x="52" y="24" width="7" height="4" rx="2" fill="#4a1d0c" opacity="0.5" />
            <rect x="62" y="24" width="7" height="4" rx="2" fill="#4a1d0c" opacity="0.5" />
          </svg>
        </li>

        <li
          class="flex items-center justify-between gap-4 rounded-[1.25rem] bg-[#6b2d12] p-[clamp(1rem,2vw,1.5rem)]"
        >
          <div>
            <h3 class="font-display text-subheading text-white">
              Et d’autres surprises…
            </h3>
            <p class="mt-1 font-body text-copy text-white/75">
              On garde un peu de mystère.
            </p>
          </div>
          <div
            bind:this={eyes}
            aria-hidden="true"
            class="flex shrink-0 gap-[clamp(0.2rem,0.5vw,0.4rem)]"
          >
            {#each [0, 1] as i (i)}
              <span class="googly" style="--lx: {look.x}; --ly: {look.y}">
                <span class="pupil"></span>
              </span>
            {/each}
          </div>
        </li>
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

  .googly {
    --size: clamp(2.25rem, 4.5vw, 3.25rem);
    position: relative;
    display: block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: #fff;
    box-shadow:
      inset 0 -3px 0 rgb(0 0 0 / 0.12),
      0 2px 0 #4a1d0c;
  }

  .pupil {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 48%;
    height: 48%;
    border-radius: 50%;
    background: #1b0b05;
    /* Travels up to a quarter of the eye from the middle, then a little
     * slop so it rattles like a real googly eye. */
    transform: translate(
      calc(-50% + var(--lx) * var(--size) * 0.24),
      calc(-50% + var(--ly) * var(--size) * 0.24)
    );
    transition: transform 0.35s cubic-bezier(0.34, 1.8, 0.64, 1);
  }

  .pupil::after {
    content: "";
    position: absolute;
    top: 18%;
    left: 22%;
    width: 28%;
    height: 28%;
    border-radius: 50%;
    background: #fff;
  }
</style>
