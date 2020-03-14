<script>
  import { Link } from "yrv";

  export let name;
  export let avatar;
  export let screenName;
  export let profession = null;
  export let roles = null;
</script>

<style>
  .creator-link {
    max-width: var(--width-section-s);
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: repeat(3, max-content);
    gap: var(--margin-xs) var(--margin-s);
    transition: all var(--time-transition);
  }
  .creator-link-name {
    width: 100%;
    height: fit-content;
  }
  .creator-link .creator-link-name i {
    transition: all var(--time-transition);
    color: transparent;
  }
  .creator-link:hover {
    opacity: 0.8;
  }
  .creator-link:hover .creator-link-name i {
    color: hsl(var(--hsl-theme-pri));
    transform: translateX(4px);
  }
  .avatar {
    grid-row: 1/-1;
  }

  .creator-link-roles {
    flex-wrap: wrap;
  }
  .creator-link-roles label {
    margin: 0 var(--margin-xs) var(--margin-xs) 0;
  }

  h2 {
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: hsl(var(--hsl-grey-l));
  }
  h2::first-letter {
    text-transform: uppercase;
  }

  h3 {
    line-height: 1.25rem;
    font-size: 0.9375rem;
    color: hsl(var(--hsl-grey-l));
  }

  label {
    font-size: 0.625rem;
    line-height: 0.625rem;
    background: hsla(var(--hsl-theme-pri), 0.3);
    color: hsl(var(--hsl-grey-m));
    border-radius: 4px;
    padding: var(--margin-xs) var(--margin-s);
  }
</style>

<Link href="#/{screenName}">
  <div class="creator-link">
    {#if avatar}
      <img src={avatar} class="avatar" alt="avatar" />
    {:else}
      <span class="avatar f__r-both--cen">
        <i class="material-icons">face</i>
      </span>
    {/if}

    {#if profession}
      <h2 class="txt-truncated">{profession}</h2>
    {/if}

    <span class="f__r-ai--cen creator-link-name">
      <h3 class="txt-truncated">{name}</h3>
      <i class="material-icons">arrow_right_alt</i>
    </span>

    {#if roles}
      <span class="f__r-ai--cen creator-link-roles">
        {#each roles as role}
          <label class="f__r-both--cen">{role}</label>
        {/each}
      </span>
    {/if}
  </div>
</Link>
