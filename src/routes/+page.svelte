<script lang="ts">
  import Meta from "$lib/components/Meta.svelte";

  const title = "Haven Paris · c’est terminé";
  const description =
    "Haven Paris est terminé. Découvre les prochains événements de Hack Club sur hackclub.com/programs.";
</script>

<Meta
  {title}
  {description}
  image="https://haven.djungelskog.lol/images/haven-logo-color.webp"
/>

<main
  id="main"
  class="flex min-h-screen flex-col items-center justify-center gap-6 bg-haven-orange-deep px-6 text-center text-white"
>
  <h1 class="font-display text-5xl md:text-7xl">Haven est terminé</h1>
  <p class="max-w-xl font-display text-2xl md:text-3xl">
    Merci à toutes celles et ceux qui sont venus. Jette un œil aux prochains
    événements sur
    <a class="underline" href="https://hackclub.com/programs"
      >hackclub.com/programs</a
    >.
  </p>
</main>
