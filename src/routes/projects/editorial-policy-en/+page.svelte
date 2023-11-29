<script lang="ts">
  import Link from "$lib/components/Link.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import typographString from "../../../utils/typographString";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Editorial policy</title>
</svelte:head>

<section>
  <Heading classes="grid-col17" level={1}>
    Editorial policy
    <svelte:fragment slot="subtitles">
      <Link classes="regular-weight regular-size large-line-height" href="{base}/projects/editorial-policy-ru" outside={false}>Editorial policy in russian</Link>
    </svelte:fragment>
  </Heading>
  <p class="grid-col17">{typographString("This is a living collection of stylistic guidelines and conventions I use in most cases. Edge cases are resolved with common sense.")}</p>
</section>
<section>
  <Heading classes="grid-col17" level={2}>Use British English</Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>Color</p>
      <p>Center</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>Colour</p>
      <p>Centre</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Use International System of Units")} 
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>10 inches</p>
      <p>1 mile</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>25 centimeters</p>
      <p>1.61 kilometers</p>
    </div>
  </figure>
  <p class="grid-col17">{typographString("Notable exceptions: litre.")}</p>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    Use 24 hour time 
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>2:30PM</p>
      <p>7:15AM</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("14:30")}</p>
      <p>{typographString("7:15")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Use Coordinated Universal Time to specify time zones")}
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>9:30, Dubai time</p>
      <p>8AM PST</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("9:30 UTC+4")}</p>
      <p>{typographString("8:00 UTC-8")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    Use Oxford comma
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>{typographString("Biscuits, marmalade and tea")}</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("Biscuits, marmalade, and tea")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Don't use roman numerals")} 
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>I, II, III, IV, V, VI...</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("1, 2, 3, 4, 5, 6...")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Use the ellipsis only for numeric ranges and breaks in quotes")}
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>2010-2012</p>
      <p>To be continued...</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("2010...2012")}</p>
      <p>{typographString("To be continued")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Write single digit numbers as words")}
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>3 days before friday</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("Three days before friday")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Don't capitalise days of the week and months")}
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>Her flight is on Tuesday</p>
      <p>Last edited on 30 October 2023</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("Her flight is on tuesday")}</p>
      <p>{typographString("Last edited on 30 october 2023")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Currency sign goes after value and is separated with no-break hair space")} 
  </Heading>
  <figure class="grid-col17 grid no-gap two-columns">
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Bad</p>
      <p>$100</p>
      <p>9.99$</p>
    </div>
    <div class="regular-right-padding">
      <p class="heavy-weight small-bottom-padding">Good</p>
      <p>{typographString("$100")}</p>
      <p>{typographString("9.99$")}</p>
    </div>
  </figure>
</section>
<section>
  <Heading classes="grid-col17" level={2}>
    {typographString("Use common sense to punctuate quotes")}
  </Heading>
</section>