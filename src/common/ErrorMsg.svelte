<script>
  export let errorMsg;
</script>

<style>
  div {
    height: 100%;
    width: 100vw;
  }

  i {
    font-size: 4rem;
    color: hsla(var(--hsl-theme-pri), 0.5);
  }

  p {
    margin-top: var(--margin-xs);
    color: hsl(var(--hsl-grey-l));
  }
</style>

<div class="f__c-both--cen" aria-hidden="true">
  <i class="material-icons">warning</i>
  <p>{errorMsg}</p>
</div>
