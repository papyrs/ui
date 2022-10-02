<script lang="ts">
  import IconUser from '$lib/icons/IconUser.svelte';

  export let photoUrl: string | undefined;
  export let alt: string;
</script>

{#if photoUrl}
  <img loading="lazy" {photoUrl} {alt} />
{:else}
  <IconUser />
{/if}

<style lang="scss">
  img {
    width: 24px;
    min-height: 24px;
    border: 1px solid black;
  }
</style>
