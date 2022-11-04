<script lang="ts">
  export let columns = 3;
</script>

<aside role="toolbar" style={`--bottom-bar-columns: ${columns}`}>
  <slot />
</aside>

<style lang="scss">
  @use '../styles/mixins/shadow';

  aside {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);

    z-index: var(--z-index);

    display: grid;
    grid-template-columns: repeat(var(--bottom-bar-columns), 1fr);

    margin: 0.75rem 0;

    @include shadow.extra-strong;

    @supports (-webkit-touch-callout: none) {
      bottom: env(safe-area-inset-bottom);
    }
  }
</style>
