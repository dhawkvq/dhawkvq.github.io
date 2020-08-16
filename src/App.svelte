<script lang="ts">
  import { colorTheme } from './stores/colorTheme'
  import { ThemeChanger, NavTabs } from './components'
  import { AboutMe, Contact, Projects } from './pages'

  let activeTab = 'about'

  const setActive = (arg: string) => activeTab = arg

</script>


<main class:light={$colorTheme === 'light'}>
  <NavTabs {...{activeTab,setActive}} />
  <ThemeChanger theme={colorTheme} />
  <div class='contentCont'>
     <div class='pageWindow'>
      {#if activeTab === 'projects'}
        <Projects />
      {:else if activeTab === 'contact'}
        <Contact />
      {:else }
        <AboutMe theme={$colorTheme}/>
      {/if}
    </div>
  </div>
</main>

<style type='text/scss'> 

  main {
    background-color: var(--dark-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    transition: background-color .8s ease;
  }

  .light {
    background-color: var(--light-bg-color)
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