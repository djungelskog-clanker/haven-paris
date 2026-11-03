<script lang="ts">
  import Meta from "$lib/components/Meta.svelte";
  import SiteHeader from "$lib/components/SiteHeader.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Pitch from "$lib/components/Pitch.svelte";
  import Steps from "$lib/components/Steps.svelte";
  import Schedule from "$lib/components/Schedule.svelte";
  import Teachers from "$lib/components/Teachers.svelte";
  import Venue from "$lib/components/Venue.svelte";
  import PastEvents from "$lib/components/PastEvents.svelte";
  import Sponsors from "$lib/components/Sponsors.svelte";
  import Faq from "$lib/components/Faq.svelte";
  import SiteFooter from "$lib/components/SiteFooter.svelte";
  import { cssUrl } from "$lib/data/images";
  import { contactEmail, signupUrl, site, venue } from "$lib/data/paris";

  const images = site.images;

  // The two illustrated backdrops are CSS backgrounds, so they are swapped
  // through the custom properties `.stage-*` reads rather than an `img` src.
  const middleStage = `--stage-bg: ${cssUrl(images.stageMiddle)}; --stage-bg-mobile: ${cssUrl(images.stageMiddleMobile)}`;
  const picnicStage = `--stage-bg: ${cssUrl(images.stagePicnic)}; --stage-bg-mobile: ${cssUrl(images.stagePicnicMobile)}`;
</script>

<Meta
  title={site.meta.title}
  description={site.meta.description}
  image={site.meta.image}
/>

<SiteHeader {images} nav={site.nav} />

<main id="main" class="overflow-x-clip">
  <div class="relative">
    <Hero
      title={site.title}
      tagline={site.tagline}
      poc={false}
      {signupUrl}
      contact={site.hero.contact}
      contactEmail={site.hero.contactEmail}
      mapLabel={site.hero.mapLabel}
      mapAria="Voir la carte de tous les événements Haven"
      scrollLabel={site.hero.scrollLabel}
      signup={site.hero.signup}
      venue={site.hero.venue}
      venueTbd={site.hero.venueTbd}
      venueLink={site.hero.venueLink}
      {images}
    />
  </div>

  <div id="about" class="stage stage-middle z-10" style={middleStage}>
    <About
      title={site.about.title}
      body={site.about.body}
      perks={site.about.perks}
      {images}
    />
    <Pitch
      poc={false}
      heading={site.pitch.heading}
      items={site.pitch.items}
      {images}
    />
  </div>

  <div class="z-20">
    <Steps
      poc={false}
      heading={site.steps.heading}
      subheading={site.steps.subheading}
      cta={site.steps.cta}
      {images}
    />
  </div>

  <Schedule
    heading={site.schedule.heading}
    days={site.schedule.days}
    tbd={site.schedule.tbd}
    {images}
  />

  <Teachers {contactEmail} daven={images.scheduleDaven} />

  <Venue {venue} hedgehog={images.hedgehog} />

  <div class="stage stage-picnic" style={picnicStage}>
    <PastEvents
      heading={site.pastEvents.heading}
      items={site.pastEvents.items}
      safety={site.pastEvents.safety}
    />
  </div>

  <Sponsors
    heading={site.sponsors.heading}
    items={site.sponsors.items}
    {images}
  />

  <Faq
    heading={site.faq.heading}
    items={site.faq.items}
    cta={site.faq.cta}
    {images}
  />
</main>

<SiteFooter {images} footer={site.footer} />
