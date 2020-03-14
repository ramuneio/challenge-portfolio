<script>
  import { onMount } from "svelte";
  import Creator from "./Creator.svelte";
  import Loader from "../common/Loader.svelte";

  let users = [];

  onMount(async () => {
    users = await fetchUsers();
  });

  async function fetchUsers() {
    try {
      // Not bothering with pagination, just loading first page
      const res = await fetch("https://api.site.com/api/v1/promoted/users");
      let { users } = await res.json();
      return users;
    } catch (e) {
      // Just swallowing for demo
      return [];
    }
  }
</script>

<style>
  header {
    margin-bottom: var(--margin-l);
  }

  h1 {
    margin-bottom: var(--margin-s);
  }

  :global(.creator-container:not(:last-of-type)) {
    border-bottom: solid 1px var(--theme-border);
  }
</style>

<header class="f__c">
  <h1>Discover our creators</h1>
  <p>Here is a curated selection</p>
</header>

{#each users as user}
  <Creator
    id={user.id}
    name={user.name}
    avatar={user.avatar}
    profession={user.profession}
    works={user.works}
    screenName={user.screen_name} />
{:else}
  <Loader />
{/each}
