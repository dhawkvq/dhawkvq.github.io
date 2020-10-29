<script>
  import { SunIcon, MoonIcon } from './components'

  export let theme
  const scaleProps = {
    duration: 700, 
    start: 0
  }
</script>

<div>
  {#if $theme === 'dark'}
    <MoonIcon 
      handleClick={theme.light} 
      theme={$theme}
      {scaleProps}
    /> 
  {:else}
    <SunIcon handleClick={theme.dark} {scaleProps}/>
  {/if}
</div>