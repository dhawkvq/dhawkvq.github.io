<script lang='ts'>
  import { Person, MyWork, ContactMe } from './components'
  export let activeTab: string
  export let setActive: (arg:string) => string
  export let theme:string
</script>


<div class:light={theme === 'light'}>
  <Person 
    handleClick={() => setActive('about')} 
    {...{theme,activeTab}}
  />
  <MyWork 
    handleClick={() => setActive('projects')} 
    {...{theme,activeTab}}
  />
  <ContactMe 
    handleClick={() => setActive('contact')} 
    {...{theme,activeTab}}
  />
</div>

<style type='text/scss'>

  div {
    position: absolute;
    left: 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;  
    padding-right: 30px;
    border-right: 2px solid var(--dark-border-color);
    transition: all .8s ease;

    &.light {
      border-right: 2px solid var(--light-border-color);
    }
  }

</style>