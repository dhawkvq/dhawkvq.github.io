<script lang='ts'>
  import { GitHubIcon, LinkedInIcon } from './icons'
  export let theme:string
</script>

<div class='aboutCont'>
  <p>About Me</p>
  <div class='socialsCont'>
    <GitHubIcon height='50' width='50' theme={theme}/>
    <LinkedInIcon height='50' width='50' theme={theme}/>
  </div>
</div>

<style>

  p {
    align-self: center;
  }

  .aboutCont {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .socialsCont {
    width: 100%;
    border: 1px dashed white;
    display: flex;
    justify-content: center;
  }
</style>