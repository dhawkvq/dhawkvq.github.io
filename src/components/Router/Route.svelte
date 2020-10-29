<script lang='ts'>
  import { getContext } from 'svelte'
  import router from 'page'
  export let path: string
  export let component:any
  const currentPath = getContext('currentPath')
  router(path, () => $currentPath = path)
</script>

{#if path === $currentPath}
  <slot />
  <svelte:component this={component} />
{/if}