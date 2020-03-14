<script>
  import { Link } from "yrv";
  import CreatorLink from "../creators/CreatorLink.svelte";

  export let title;
  export let description;
  export let name;
  export let avatar;
  export let profession;
  export let roles;
  export let screenName;
  export let containerClass;
</script>

<style>
  summary {
    height: fit-content;
    display: grid;
    padding-top: var(--margin-xl);
    gap: var(--margin-xl);
  }

  div {
    display: grid;
    gap: var(--margin-xs);
  }

  i {
    color: hsla(var(--hsl-black), 0.9);
    font-size: 1.25rem;
    margin-right: var(--margin-xxs);
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-weight: 700;
  }
</style>

<summary class={containerClass}>
  <div class="f__c">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>

  <div class="f__c">
    <span class="f__r-ai--cen">
      <i class="material-icons">loyalty</i>
      <h2>Credit</h2>
    </span>
    <CreatorLink {name} {avatar} {screenName} {roles} />
  </div>
</summary>
