<slot />

<style lang="scss" global>
  @use '../lib/styles/mixins/main';
  @use '../lib/styles/mixins/doc';

  @import '../lib/styles/global.scss';

  :root {
    @include main.layout;
    @include doc.paragraphs;
  }

  article.deckgo-doc {
    @include doc.article;
    @include doc.spacing;
  }
</style>
