<script lang='ts'>
  export let height:string = '24'
  export let width:string = '24'
  export let theme:string
</script>

<div style={`height:${height}px; width:${width}px; margin:5px;`}>
  <a href='https://www.linkedin.com/in/derrickhawkins/' target='_blank'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class:light={theme === 'light'}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>
</div>

<style type='text/scss'>

  svg {
    fill: var(--dark-fill-color);
    transition: all .7s ease;
    border-radius: 11px;

    &:hover {
      fill: var(--dark-social-link);
      box-shadow: 0 0 10px var(--dark-social-link), 0 0 30px var(--dark-social-link), 0 0 50px var(--dark-social-link);
      cursor: pointer;
    }
  }

  .light {
    fill: black;
  }

</style>