<script>
  import router from 'page'
  import { afterUpdate, setContext } from 'svelte'
  export let currentPath
  setContext('currentPath', currentPath)
  afterUpdate(() => router.start())
</script>

<slot />