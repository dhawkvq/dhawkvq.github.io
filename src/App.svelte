<script lang="ts">
  import Tabs from './Tabs.svelte'
</script>

<main>
  <div class='contentCont'>
    <Tabs />
	  <div class='pageWindow'></div>
  </div>
</main>

<style>
  main {
    border: 1px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .contentCont {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pageWindow {
    height: 600px;
    width: 700px;
    border: 1px dashed purple;
  }
</style>