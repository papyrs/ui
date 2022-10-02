<script lang="ts">
  export let fill = false;
</script>

<!-- tweaked from source: https://fonts.google.com/icons?selected=Material%20Icons%20Sharp%3Athumb_down_off_alt%3A -->
<svg
  width="24px"
  height="24px"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  ><g><rect x="0" y="0" width="24" height="24" style="fill:none;" /></g><g
    ><g>
      {#if !fill}
        <rect x="19" y="9" width="4" height="12" /><path
          d="M1,12.4l0,-4.4l8.31,0l-1.12,-5.38l1.64,-1.62l7.17,7.18l0,12.82l-12.31,0l-3.69,-8.6Zm14,6.6l0,-9.99l-4.34,-4.35l0.61,2.93l0.5,2.41l-8.77,0l0,1.99l3.01,7.01l8.99,0Z"
          style="fill-rule:nonzero;" />
      {:else}
        <rect x="19" y="9" width="4" height="12" /><path
          d="M1,12.4l0,-4.4l8.31,0l-1.12,-5.38l1.64,-1.62l7.17,7.18l0,12.82l-12.31,0l-3.69,-8.6Z"
          style="fill-rule:nonzero;" />
      {/if}
    </g></g
  ></svg>
