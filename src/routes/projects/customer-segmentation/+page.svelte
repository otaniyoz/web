<script lang="ts">
  import List from "$lib/components/List.svelte";
  import Paragraph from "$lib/components/Paragraph.svelte";
  import Heading from "$lib/components/Heading.svelte";
</script>

<svelte:head>
  <title>Customer segmentation</title>
</svelte:head>

<Heading headingTitle="Customer segmentation" headingLevel={2} />
<section>
  <article class="sub-section">
    <Paragraph
      paragraphContent="In 2023, I was tasked with identifying types of customers a company had. This was a broad task and I had a couple of hours to present the solution, so I focused on customer segmentation for marketing purposes based on the Recency-Frequency-Monetary (RFM) model and k-means as it is a simple and efficient solution."
    />
  </article>
</section>
<section>
  <article class="sub-section">
    <Heading headingTitle="Exploration" headingLevel={3} />
    <Paragraph
      paragraphContent="I looked over the data, removed duplicates, dropped values with too little information, and checked formatting."
    />
    <Paragraph
      paragraphContent="I noticed that the number of registered users regularly spiked every weekend for a whole month:"
    />
    <img
      alt="Bin plot of the RFM model"
      src="../../customer-segmentation/0.png"
    />
    <Paragraph
      paragraphContent="This, however, could be influenced by many factors and required additional (unavailable) information to draw any conclusion, so I decided not to dig into it."
    />
    <Paragraph
      paragraphContent="Aside from using RFM model, it was possible to explore customer segmentation strategies based on technologies like operating systems and device types or demographics like country:"
    />
    <img
      alt="Bin plot of the RFM model"
      src="../../customer-segmentation/1.png"
    />
  </article>
</section>
<section>
  <article class="sub-section">
    <Heading headingTitle="RFM analysis" headingLevel={3} />
    <Paragraph
      paragraphContent="To perform RFM analysis, I calculated the number of days since the last purchase (recency), the number of purchases (frequency), and the amount of money spent (monetary value) for each user."
    />
    <img
      alt="Bin plot of the RFM model"
      src="../../customer-segmentation/2.png"
    />
    <Paragraph
      paragraphContent="Upon itinial examination: most customers seemed to use the platform regularly. However a large percentage of customers also seemed to come to the platform for a single-time purchase. This could be related to the regular spikes in the number of registered users from earlier (e.g. special offers)."
    />
  </article>
</section>
<section>
  <article class="sub-section">
    <Heading headingTitle="K-means" headingLevel={3} />
    <Paragraph
      paragraphContent="For k-means, I did additional data proccessing: I removed outliers, standarised data, and found optimal number of clusters with the elbow method."
    />
    <Paragraph
      paragraphContent="I decided to go with four clusters, which arguably was not an optimal number, but it seemed practical in terms of presenting my solution:"
    />
    <img
      alt="Bin plot of the RFM model"
      src="../../customer-segmentation/3.png"
    />
  </article>
</section>
<section>
  <article class="sub-section">
      <List
        listTitle="Segments"
        listDescription="I grouped customers into four segments based on their RFM scores:"
        listRows={[
          "Segment 1 had the best recency and frequency, and the second best monetary",
          "Segment 3 spent the most amount of money with reasonable recency and frequency",
          "Segment 0 spent the reasonable amount of money with reasonable recency and frequency",
          "Segment 2 spent the least amount of money on the platform with the highest recency and lowest frequency",
        ]}
      />
    <img
      alt="Bin plot of customer segments"
      src="../../customer-segmentation/4.png"
    />
  </article>
</section>

<style>
  .sub-section {
    display: grid;
    row-gap: var(--gap-regular);
    padding-bottom: var(--gap-large);
    grid-area: auto / 1 / auto / 7;
  }
</style>
