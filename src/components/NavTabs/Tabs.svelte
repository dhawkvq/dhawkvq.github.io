<script lang='ts'>
  import { Person, MyWork, ContactMe } from './components'
  export let activeTab: string
  export let setActive: (arg:string) => string
  
  // const capatilize = (arg:string) => `${arg[0].toUpperCase()}${arg.slice(1)}`
</script>


<div class='cont'>
  <Person 
    handleClick={() => setActive('about')} 
    {activeTab}
  />
  <MyWork 
    handleClick={() => setActive('projects')} 
    {activeTab}
  />
  <ContactMe 
    handleClick={() => setActive('contact')} 
    {activeTab}
  />
</div>

<style type='text/scss'>

  .cont {
    position: absolute;
    left: 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;  
    padding-right: 30px;
    border-right: 2px solid var(--dark-border-color)
  }

</style>