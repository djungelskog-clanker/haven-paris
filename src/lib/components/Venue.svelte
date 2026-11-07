<script lang="ts">
  interface Props {
    venue: { name: string; address: string; mapUrl: string; metro: string };
    hedgehog: string;
  }

  let { venue, hedgehog }: Props = $props();
</script>

<section
  id="venue"
  class="relative z-10 bg-haven-green px-4 pt-[clamp(3rem,8vw,7rem)] pb-[clamp(3rem,6vw,6rem)]"
>
  <h2
    class="text-center font-display text-display text-white text-shadow-[0_0_10px_var(--color-haven-green-deep)]"
  >
    Où ? Paris, évidemment.
  </h2>
  <p class="mt-3 text-center font-body text-lead text-white">
    Accueillis à l’{venue.name}, dans le 11e
  </p>

  <div
    class="relative mx-auto mt-[clamp(2rem,4vw,3.5rem)] flex max-w-[64rem] flex-col gap-6 rounded-[clamp(1.5rem,3vw,2.5rem)] border-[6px] border-haven-butter/60 bg-[#fff6dd] p-[clamp(1.5rem,4vw,3.5rem)] shadow-[0_0_20px_rgb(151_160_26/0.5)] sm:flex-row sm:items-center"
  >
    <div class="flex-1">
      <h3 class="font-display text-heading text-haven-orange-bright">
        Où on est accueillis
      </h3>
      <p class="mt-4 font-body text-copy text-haven-brown-dark">
        Haven Paris a lieu à l’{venue.name}, au cœur du 11e arrondissement. Les
        portes ouvrent à 10h le samedi et le dimanche.
      </p>
      <a
        href={venue.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-flex items-start gap-2 font-body text-copy text-haven-orange-deep underline decoration-from-font underline-offset-4 hover:opacity-80"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
          class="mt-[0.15em] size-[1em] shrink-0"
        >
          <path
            d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
          />
        </svg>
        {venue.address}
      </a>
      <p class="mt-2 font-body text-[clamp(0.85rem,1.1vw,1.05rem)] text-haven-brown-light">
        {venue.metro}
      </p>
    </div>
    <img
      src={hedgehog}
      alt=""
      aria-hidden="true"
      width="422"
      height="308"
      class="mx-auto w-[clamp(8rem,22vw,15rem)] select-none"
    />
  </div>
</section>
