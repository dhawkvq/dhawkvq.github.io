<script lang='ts'>

  type themeProps = {
    light: () => void,
    dark: () => void
  }

  export let theme:themeProps
</script>

<div class='themeButtonCont'>
  <button on:click={theme.light}>
    Light
  </button> 
  <button on:click={theme.dark}>
    Dark
  </button>
</div>

<style>
  .themeButtonCont {
    position: absolute;
    top: 20px;
    right: 40px;
    display: flex;
  }
</style>