<script>
  import { Link } from "yrv";
  import CreatorLink from "./CreatorLink.svelte";

  export let id;
  export let name;
  export let profession;
  export let works;
  export let avatar;
  export let screenName;
</script>

<style>
  .creator-container {
    padding: var(--margin-m) 0;
  }
</style>

<div class="creator-container">
  <CreatorLink {name} {profession} {avatar} {screenName} />
</div>
