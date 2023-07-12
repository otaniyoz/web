<section>
  <slot/>
</section>

<style>
  section {
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(8, 1fr);
    padding-bottom: var(--gap-large);
  }

  @media screen and (max-width: 1200px) {
    section {
      grid-template-columns: repeat(6, 1fr);
    }
  }
</style>
