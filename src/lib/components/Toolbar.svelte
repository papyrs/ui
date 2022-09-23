<aside role="toolbar">
  <slot />
</aside>

<style lang="scss">
  @use '../styles/mixins/shadow';

  aside {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    margin: 0.75rem 0;

    @include shadow.extra-strong;
  }
</style>
