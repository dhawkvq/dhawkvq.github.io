<script lang='ts'>
  import IconMaker from './IconMaker.svelte'
  import GitHub from './images/GitHub.svg'
  import LinkedIn from './images/LinkedIn.svg'
  // import GithubIcon from './IconMaker.svelte'
</script>

<div class='aboutCont'>
  <p>About Me</p>
  <div class='socialsCont'>
    <a href='https://www.github.com/dhawkvq' target='_blank'>
      <GitHub height='50' width='50' fill='white' />
    </a>
    <a href='https://www.linkedin.com/in/derrickhawkins/' target='_blank'>
      <LinkedIn height='50' width='50' fill='white'/>
    </a>
  </div>
</div>

<style>

  a {
    margin: 0 5px;
  }

  .aboutCont {
    border: 1px dashed orange;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    align-self: center;
  }

  .socialsCont {
    width: 100%;
    border: 1px dashed white;
    display: flex;
    justify-content: center;
  }
</style>