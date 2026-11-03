<script lang="ts">
  interface Props {
    contactEmail: string;
    daven: string;
  }

  let { contactEmail, daven }: Props = $props();

  const points = [
    {
      title: "100 % gratuit",
      body: "Aucun frais d’inscription. Le petit-déjeuner, le déjeuner et les snacks sont offerts les deux jours.",
    },
    {
      title: "Aucun prérequis",
      body: "Ouvert aux 13-18 ans, débutants bienvenus. Des ateliers guident ceux qui n’ont jamais codé.",
    },
    {
      title: "Un vrai projet",
      body: "En équipe, les élèves conçoivent un jeu de A à Z (code, graphismes, son) et le publient en ligne sur itch.io.",
    },
  ];

  let copied = $state(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.origin + "/");
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch {
      copied = false;
    }
  }

  const mailto = $derived(
    `mailto:${contactEmail}?subject=${encodeURIComponent("Haven Paris : question d’un·e enseignant·e")}`,
  );
</script>

<section
  id="profs"
  class="relative z-10 bg-haven-green px-4 pt-[clamp(3rem,8vw,7rem)] pb-[clamp(2rem,5vw,5rem)]"
>
  <div
    class="relative mx-auto max-w-[70rem] rounded-[clamp(1.5rem,3vw,2.5rem)] bg-haven-brown-dark px-[clamp(1.25rem,4vw,4rem)] pt-[clamp(2rem,4vw,3.5rem)] pb-[clamp(2rem,4vw,3.5rem)]"
  >
    <img
      src={daven}
      alt=""
      aria-hidden="true"
      width="127"
      height="116"
      class="absolute -top-[clamp(2.5rem,5vw,4.5rem)] right-[8%] w-[clamp(4rem,8vw,7rem)] select-none"
    />
    <h2 class="text-center font-display text-display text-white">
      Pour les profs et les CDI
    </h2>
    <p
      class="mx-auto mt-[clamp(1rem,2vw,1.5rem)] max-w-[52ch] text-center font-body text-lead text-white"
    >
      Haven Paris, c’est un week-end où des ados créent leur premier jeu vidéo,
      encadrés par l’équipe d’organisation et Hack Club. Si vous connaissez des
      élèves curieux, créatifs ou passionnés de jeux, parlez-leur-en !
    </p>

    <ul
      class="mt-[clamp(1.5rem,3vw,2.5rem)] grid list-none gap-[clamp(0.75rem,1.5vw,1.25rem)] p-0 md:grid-cols-3"
    >
      {#each points as point (point.title)}
        <li class="rounded-[1.25rem] bg-haven-brown-light p-[clamp(1rem,2vw,1.75rem)]">
          <h3 class="font-display text-subheading text-haven-butter">
            {point.title}
          </h3>
          <p class="mt-2 font-body text-copy text-white">{point.body}</p>
        </li>
      {/each}
    </ul>

    <div
      class="mt-[clamp(1.5rem,3vw,2.5rem)] rounded-[1.25rem] bg-haven-brown-light p-[clamp(1rem,2vw,1.75rem)]"
    >
      <h3 class="font-display text-subheading text-haven-butter">
        Comment nous aider
      </h3>
      <ul class="mt-2 list-disc pl-5 font-body text-copy text-white">
        <li>Partagez cette page avec vos élèves, en classe, sur l’ENT ou au CDI.</li>
        <li>Les élèves s’inscrivent eux-mêmes avec leur e-mail, en haut de la page.</li>
        <li>Une question, une affiche, une présentation en classe ? Écrivez-nous.</li>
      </ul>
      <div class="mt-[clamp(1rem,2vw,1.5rem)] flex flex-wrap gap-3">
        <button
          type="button"
          onclick={copyLink}
          class="rounded-[1rem] bg-haven-orange-bright px-[clamp(1rem,2vw,1.75rem)] py-[clamp(0.5rem,0.9vw,0.8rem)] font-display text-[clamp(1rem,1.6vw,1.5rem)] text-white transition-transform hover:scale-[1.04] active:scale-100"
        >
          {copied ? "Lien copié !" : "Copier le lien du site"}
        </button>
        <a
          href={mailto}
          class="rounded-[1rem] bg-haven-butter px-[clamp(1rem,2vw,1.75rem)] py-[clamp(0.5rem,0.9vw,0.8rem)] font-display text-[clamp(1rem,1.6vw,1.5rem)] text-haven-orange-deep transition-transform hover:scale-[1.04] active:scale-100"
        >
          {contactEmail}
        </a>
      </div>
    </div>
  </div>
</section>
