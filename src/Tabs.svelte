<script lang='ts'>

  export let activeTab: string
  export let setActive: (arg:string) => string
  
  let buttons = ['about', 'projects', 'contact' ]
  const capatilize = (arg:string) => `${arg[0].toUpperCase()}${arg.slice(1)}`
</script>


<div class='cont'>
  {#each buttons as button}
    <h1 
      class:active="{ activeTab === button }"
      on:click="{() => setActive(button) }"
    > 
      { button === 'about' ? 'About Me': capatilize(button) } 
    </h1>
  {/each}
</div>

<style>
  .cont {
    border: 1px dashed blue;
    display: flex;
    justify-content: center;
  }

  .active {
    color: purple;
  }

  h1 {
    margin: 5px;
  }

  h1:hover {
    cursor: pointer;
  }

</style>