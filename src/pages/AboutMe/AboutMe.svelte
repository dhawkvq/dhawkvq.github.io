<script lang='ts'>
  import { GitHubIcon, LinkedInIcon } from './icons'
  export let theme:string
</script>

<div class='aboutCont' class:light={theme === 'light'}>
  <p>About Me</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Est pellentesque elit ullamcorper dignissim. Sed vulputate odio ut enim blandit volutpat maecenas. 
    Porttitor eget dolor morbi non. Interdum varius sit amet mattis. Venenatis urna cursus eget nunc. 
    Sit amet luctus venenatis lectus. Felis imperdiet proin fermentum leo vel orci. 
    Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. 
    Sed faucibus turpis in eu mi bibendum neque egestas congue.
  </p>
  <div class='socialsCont'>
    <GitHubIcon height='50' width='50' theme={theme}/>
    <LinkedInIcon height='50' width='50' theme={theme}/>
  </div>
</div>

<style type='text/scss'>

  p {
    align-self: center;
  }

  .aboutCont {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;

    &.light {
      color: black;
    }
  }

  .socialsCont {
    width: 100%;
    border: 1px dashed white;
    display: flex;
    justify-content: center;
  }
</style>