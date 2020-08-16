<script lang='ts'>
  import { scale } from 'svelte/transition'
  type SunProps = {
    duration: number,
    start: number
  } 

  export let handleClick: () => void
  export let scaleProps: SunProps

  let fade = false
</script>

{#if !fade}
  <div on:click={() => fade = true}
    in:scale='{scaleProps}'
    out:scale='{scaleProps}'
    on:outroend='{handleClick}'
  >
    <svg viewBox="0 0 515 513" fill='none' stroke='white' xmlns="http://www.w3.org/2000/svg">
      <path d="M391.5 255C391.5 329.884 331.233 390.5 257 390.5C182.767 390.5 122.5 329.884 122.5 255C122.5 180.116 182.767 119.5 257 119.5C331.233 119.5 391.5 180.116 391.5 255Z" fill="#F0EC82" stroke="black" stroke-width="15"/>
      <line x1="256.916" y1="8.08289" x2="256.083" y2="88.0838"  stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="206.874" y1="64.5229" x2="215.452" y2="94.8778" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="301.874" y1="421.523" x2="310.452" y2="451.878" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="376.314" y1="376.953" x2="398.711" y2="399.164" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="112.307" y1="111.602" x2="138.936" y2="136.421" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="63.8318" y1="203.402" x2="94.9613" y2="211.944" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="419.832" y1="301.402" x2="450.961" y2="309.944" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="418.422" y1="212.674" x2="449.394" y2="203.578" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="63.4216" y1="309.674" x2="94.3937" y2="300.578" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="115.086" y1="398.566" x2="138.083" y2="375.914" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="378.086" y1="136.567" x2="401.083" y2="113.914" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="299.665" y1="92.2268" x2="309.03" y2="61.335" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="204.665" y1="452.227" x2="214.03" y2="421.335" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="130.955" y1="40.8277" x2="171.592" y2="109.744" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="41.8886" y1="131.928" x2="111.697" y2="171.013" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="88.0308" y1="256.026" x2="8.02605" y2="256.287" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="112.309" y1="339.921" x2="42.9207" y2="379.747" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="171.676" y1="399.958" x2="130.958" y2="468.826" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="257.916" y1="424.083" x2="257.083" y2="504.084" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="340.565" y1="401.668" x2="380.728" y2="470.862" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="401.872" y1="338.77" x2="471.31" y2="378.509" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="506.027" y1="256.022" x2="426.022" y2="256.246" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="471.283" y1="131.923" x2="401.923" y2="171.798" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="381.778" y1="39.9619" x2="340.962" y2="108.772" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M257 169.004C287.587 168.695 348.197 186.062 345.939 258" stroke="black" stroke-width="16" stroke-linecap="round"/>
    </svg>
  </div>
{/if}

<style type='text/scss'>
  div {
    height: 50px;
    width: 50px;

    &:hover {
      cursor: pointer;
    }
  }
</style>
