<script>
  import { Router, Route } from "yrv";
  import UserPage from "./user/UserPage.svelte";
  import CreatorsPage from "./creators/CreatorsPage.svelte";
  import WorkPage from "./works/WorkPage.svelte";
  import Header from "./common/Header.svelte";
</script>

<style>
  main {
    min-height: 100vh;
  }

  section {
    min-height: var(--app-page-min-height);
    margin: 0 var(--margin-xl);
  }

  footer {
    height: var(--app-footer-height);
    background: hsl(var(--hsl-offwhite));
  }

  @media (min-width: 0) and (max-width: 700px) {
    section {
      margin: 0 var(--margin-l);
    }
  }
</style>

<main>
  <Header />
  <section class="f__c">
    <Router>
      <Route exact path="/" component={CreatorsPage} />
      <Route path="/:screenName" component={UserPage} let:router />
      <Route path="/works/:workId" component={WorkPage} let:router />
    </Router>
  </section>
  <footer />
</main>
