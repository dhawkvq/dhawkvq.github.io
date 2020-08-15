<script lang='ts'>
  import { SunIcon } from './components'

  type themeProps = {
    light: () => void,
    dark: () => void
  }

  export let theme:themeProps
  console.log($theme)
</script>

<div class='themeButtonCont'>
  {#if $theme === 'dark'}
    <SunIcon handleClick={theme.light}/>
  {:else}
    <p>Moon</p>
  {/if}
</div>

<style>
  .themeButtonCont {
    position: absolute;
    top: 20px;
    right: 40px;
    display: flex;
  }
</style>