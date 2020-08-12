<script lang="ts">
  import { lightDarkTheme } from './stores/lightDarkTheme'
  import Tabs from './Tabs.svelte'
</script>

<main class:dark="{ $lightDarkTheme === 'dark' }">
  <div class='themeButtonCont'>
    <button on:click={lightDarkTheme.light}>
      Light
    </button> 
    <button on:click={lightDarkTheme.dark}>
      Dark
    </button>
  </div>
  <div class='contentCont'>
    <Tabs />
	  <div class='pageWindow'>
    <h2>the theme is {$lightDarkTheme}</h2>
    </div>
  </div>
</main>

<style>
  main {
    background-color: var(--light-theme-bg-color);
    border: 1px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .dark {
    background-color:var(--dark-theme-bg-color);
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

  .themeButtonCont {
    position: absolute;
    top: 20px;
    right: 40px;
    display: flex;
  }
</style>