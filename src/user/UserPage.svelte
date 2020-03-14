<script>
  import UserWorksList from "./UserWorksList.svelte";
  import fetchData from "../common/fetchData";
  import Loader from "../common/Loader.svelte";
  import ErrorMsg from "../common/ErrorMsg.svelte";
  import { onMount } from "svelte";

  export let router;

  let profileRequest;
  let worksRequest;
  let { params } = router;
  let { screenName } = params;

  onMount(async () => {
    profileRequest = fetchData(
      `https://api.site.com/api/v1/users/${screenName}/profile`,
      json => json.profile
    );
    worksRequest = fetchData(
      `https://api.site.com/api/v1/users/${screenName}/works`,
      json => json.works
    );
  });
</script>

<style>
  header {
    display: grid;
    width: 100%;
    grid-template-columns: max-content minmax(
        var(--width-section-s),
        var(--width-section-m)
      );
    grid-template-rows: auto 1.5rem auto;
    gap: var(--margin-s) var(--margin-m);
    margin: 0 auto;
    padding-bottom: var(--margin-l);
  }

  h1 {
    margin-top: auto;
    text-transform: uppercase;
  }

  h2 {
    line-height: 0.9375rem;
    font-size: 0.9375rem;
    color: hsla(var(--hsl-grey-l), 0.7);
  }

  p {
    margin-bottom: auto;
    font-size: 0.8125rem;
    line-height: 1.4375rem;
  }

  .avatar {
    height: 8rem;
    width: 8rem;
    grid-row: 1/-1;
    margin: auto;
  }

  .user-info {
    margin-bottom: auto;
  }
  .user-info span {
    margin-right: var(--margin-m);
  }
  .user-info i {
    font-size: 1rem;
    color: hsl(var(--hsl-grey-l));
    margin-right: var(--margin-xxs);
  }

  @media (min-width: 0) and (max-width: 600px) {
    header {
      grid-template-columns: max-content 1fr;
    }
  }
</style>

{#if profileRequest}
  {#await profileRequest}
    <Loader />
  {:then profile}
    <header class="f__r-both--cen">
      {#if profile.avatar.thumb}
        <img src={profile.avatar.thumb} class="avatar" />
      {:else}
        <span class="avatar f__r-both--cen">
          <i class="material-icons">face</i>
        </span>
      {/if}

      <h1>{profile.user.screen_name}</h1>

      <div class="user-info f__r-ai--cen">
        {#if profile.profession}
          <span class="f__r-ai--cen">
            <i class="material-icons">category</i>
            <h2>{profile.profession}</h2>
          </span>
        {/if}

        {#if profile.location}
          <span class="f__r-ai--cen">
            <i class="material-icons">room</i>
            <h2>{profile.location}</h2>
          </span>
        {/if}
      </div>

      <p>{profile.bio}</p>
    </header>

    {#await worksRequest}
      <Loader />
    {:then works}
      <UserWorksList {works} />
    {:catch error}
      <ErrorMsg errorMsg="Failed to load works" />
    {/await}
  {:catch error}
    <ErrorMsg errorMsg={error.message} />
  {/await}
{/if}
