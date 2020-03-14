<script>
  export let thumbnail;
  export let containerClass;
</script>

<style>
  div {
    min-height: var(--app-page-min-height);
  }

  img {
    padding: var(--margin-xl) 0;
    width: 100%;
    object-fit: scale-down;
  }
</style>

<div class={containerClass}>
  <img src={thumbnail} />
</div>
