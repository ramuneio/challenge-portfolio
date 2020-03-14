<script>
  import { Link } from "yrv";
</script>

<style>
  header {
    height: var(--app-header-height);
    padding: 0 var(--margin-xl);
  }

  span {
    height: 2.5rem;
    width: fit-content;
    padding-right: var(--margin-m);
    border-right: solid 1px var(--theme-border);
  }

  img {
    height: 0.75rem;
  }

  @media (min-width: 0) and (max-width: 600px) {
    header {
      padding: 0 var(--margin-l);
    }
  }
</style>

<header class="f__r-ai--cen">
  <span class="f__r-ai--cen">
    <Link href="#/">
      <img src="./assets/logo.png" />
    </Link>
  </span>
</header>
