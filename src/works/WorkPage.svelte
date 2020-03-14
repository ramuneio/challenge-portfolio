<script>
  import { onMount } from "svelte";
  import fetchData from "../common/fetchData";
  import Loader from "../common/Loader.svelte";
  import Work from "./Work.svelte";
  import WorkInfo from "./WorkInfo.svelte";

  export let router;

  let workRequest;
  let { params } = router;
  let { workId } = params;

  onMount(async () => {
    workRequest = fetchData(
      `https://api.site.com/api/v1/works/${workId}`,
      json => json.work
    );
  });
</script>

<style>
  .work-container {
    border-top: solid 1px var(--theme-border);
    display: grid;
  }

  .work-container :global(.avatar) {
    background: hsl(var(--hsl-grey-vvl));
  }

  @media (min-width: 0) and (max-width: 1000px) {
    .work-container {
      grid-template-columns: 1fr;
    }

    :global(.work-info) {
      grid-column: 1;
    }

    :global(.work) {
      grid-column: 1;
    }
  }

  @media (min-width: 1000px) {
    .work-container {
      grid-template-columns: 2fr 1fr;
      gap: var(--margin-xl);
    }

    :global(.work-info) {
      grid-column: 2;
      grid-row: 1;
    }

    :global(.work) {
      grid-row: 1;
      grid-column: 1;
      height: 100%;
      padding-right: var(--margin-xl);
      border-right: solid 1px var(--theme-border);
    }
  }
</style>

{#if workRequest}
  {#await workRequest}
    <Loader />
  {:then work}
    <div class="work-container">
      <WorkInfo
        avatar={work.author.profile.avatar.thumb}
        name={work.author.profile.name}
        profession={work.author.profile.profession}
        screenName={work.author.screen_name}
        roles={work.own_roles}
        containerClass="work-info"
        title={work.title}
        description={work.description} />

      <Work containerClass="work" thumbnail={work.thumbnail} />
    </div>
  {:catch error}
    <p>{error.message}</p>
  {/await}
{/if}
