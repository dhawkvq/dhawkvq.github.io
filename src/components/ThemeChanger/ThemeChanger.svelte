<script lang='ts'>
  import { SunIcon, MoonIcon } from './components'

  type themeProps = {
    light: () => void,
    dark: () => void
  }

  export let theme:themeProps
  const scaleProps = {
    duration: 700, 
    start: 0
  }
</script>

<div class='themeButtonCont'>
  {#if $theme === 'dark'}
    <MoonIcon handleClick={theme.light} {scaleProps}/>
  {:else}
    <SunIcon handleClick={theme.dark} {scaleProps}/>
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