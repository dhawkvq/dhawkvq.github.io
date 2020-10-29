<script lang='ts'>
  import router from 'page'
  import { afterUpdate, setContext } from 'svelte'
  import { writable } from 'svelte/store'
  export let currentPath
  setContext('currentPath', currentPath)
  afterUpdate(() => router.start())
</script>

<slot />