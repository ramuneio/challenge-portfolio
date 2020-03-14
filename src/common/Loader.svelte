<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  i {
    color: hsl(var(--hsl-grey-vvl));
    animation: spin infinite 3s;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>

<div class="f__r-both--cen" aria-hidden="true">
  <i class="material-icons">toys</i>
</div>
