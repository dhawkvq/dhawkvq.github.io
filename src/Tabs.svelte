<script lang='ts'>
  let active:string = 'about';
</script>

<div class='cont'>
  <h1 
    class:active="{ active === 'about' }"
    on:click="{() => active = 'about' }"
  > About Me </h1>
  <h1 
    class:active="{ active === 'projects' }"
    on:click="{() => active = 'projects' }"
  > Projects </h1>
  <h1 
    class:active="{ active === 'contact' }"
    on:click="{() => active = 'contact' }"
  > Contact </h1>
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