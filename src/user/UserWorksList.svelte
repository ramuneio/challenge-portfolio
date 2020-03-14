<script>
  import { Link } from "yrv";

  export let works;
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--height-tile), 1fr));
    gap: var(--margin-l) var(--margin-m);
    padding-bottom: var(--margin-xl);
  }

  img {
    width: 100%;
    height: var(--height-tile);
    object-fit: cover;
    border-radius: 2px;
    transition: all var(--time-transition);
    box-shadow: var(--box-shadow-s);
  }
  img:hover {
    transform: translateY(-1px);
    box-shadow: var(--box-shadow-m);
    opacity: 0.8;
  }

  h3 {
    font-weight: 500;
    margin-top: var(--margin-s);
  }

  @media (min-width: 0) and (max-width: 600px) {
    ul {
      grid-template-columns: 1fr;
    }

    img {
      height: fit-content;
    }
  }
</style>

<ul>
  {#each works as work}
    <li>
      <Link href={`#/works/${work.id}`}>
        <img src={work.thumbnail} />
        <h3>{work.title}</h3>
      </Link>
    </li>
  {/each}
</ul>
