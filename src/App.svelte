<script lang="ts">
  import { colorTheme, currentPath } from './stores'
  import { ThemeChanger, NavTabs, Router, Route } from './components'
  import { AboutMe, Contact, Projects, NotFound } from './pages'
</script>


<div class='app'>
  <nav class:light={$colorTheme === 'light'}>
    <span class='linkContainer'>
      <a href="/" class:active={$currentPath === '/'}>Home</a>
      <a href="/portfolio" class:active={$currentPath === '/portfolio'}>Portfolio</a>
      <a href="/contact" class:active={$currentPath === '/contact'}>Contact</a>
    </span>
    <ThemeChanger theme={colorTheme} />
  </nav>
  <main class:light={$colorTheme === 'light'}>
    <Router {currentPath} >
      <Route path='/' component={AboutMe} />
      <Route path='/portfolio' component={Projects} />
      <Route path='/contact' component={Contact} />
    </Router>
  </main>
</div>

<style type='text/scss'> 

  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h1 {
    color: white;
  }

  main {
    background-color: var(--dark-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    transition: background-color .8s ease;
  }

  .linkContainer {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
      color: white;
      margin: 0 5px;
      padding: 0;

      &.active {
        color: red;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px dashed green;
    background-color: var(--dark-bg-color);
    padding: 10px;
    position: sticky;
    top: 0;
    transition: background-color .8s ease;
  }

  .light {
    background-color: var(--light-bg-color)
  }

</style>