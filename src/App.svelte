<script lang="ts">
  import { colorTheme } from './stores/colorTheme'
  import ThemeButton from './ThemeChanger.svelte'
  import { AboutMe, Contact, Projects } from './pages'
  import Tabs from './Tabs.svelte'

  let activeTab = 'about'

  const setActive = (arg: string) => activeTab = arg
</script>


<main class:dark="{ $colorTheme === 'dark' }">
  <ThemeButton theme={colorTheme} />
  <div class='contentCont'>
    <Tabs {...{activeTab,setActive}} />
     <div class='pageWindow'>
      active tab is {activeTab}
      {#if activeTab === 'projects'}
        <Projects />
      {:else if activeTab === 'contact'}
        <Contact />
      {:else }
        <AboutMe />
      {/if}
    </div>
  </div>
</main>

<style> 
  main {
    background-color: var(--light-theme-bg-color);
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

</style>