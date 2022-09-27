<script lang="ts">
  export let fill = false;
</script>

{#if !fill}
  <!-- source: https://fonts.google.com/icons?selected=Material%20Icons%20Sharp%3Athumb_down_off_alt%3A -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
    style="transform: rotate(180deg) scaleX(-1)"
    ><g><rect fill="none" height="24" width="24" /></g><g
      ><g
        ><rect height="12" width="4" x="19" y="3" /><path
          d="M1,11.6V16h8.31l-1.12,5.38L9.83,23L17,15.82V3H4.69L1,11.6z M15,5v9.99l-4.34,4.35l0.61-2.93l0.5-2.41H9.31H3v-1.99 L6.01,5H15z" /></g
      ></g
    ></svg>
{:else}
  <!-- source: https://fonts.google.com/icons?selected=Material%20Icons%20Sharp%3Athumb_up%3A -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
    style="transform: scaleX(-1)"
    ><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path
      d="M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z" /></svg>
{/if}
