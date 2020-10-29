<script>
  import { getContext } from 'svelte'
  import router from 'page'
  export let path
  export let component
  const currentPath = getContext('currentPath')
  router(path, () => $currentPath = path)
</script>

{#if path === $currentPath}
  <slot />
  <svelte:component this={component} />
{/if}