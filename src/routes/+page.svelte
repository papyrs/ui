<script lang="ts">
    import Toolbar from "../lib/components/BottomBar.svelte";
    import IconChatBubbleOutline from "$lib/icons/IconChatBubbleOutline.svelte";
    import IconThumbUp from "$lib/icons/IconThumbUp.svelte";
    import IconShare from "$lib/icons/IconShare.svelte";
</script>

<main>
    <article class="deckgo-doc">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus vitae tortor sit amet ullamcorper. Maecenas pellentesque sit amet dolor sit amet efficitur. Quisque tortor erat, venenatis vitae lorem eget, posuere auctor risus. Cras fringilla metus id elit ultrices placerat. Vestibulum pulvinar convallis aliquet. Cras condimentum, ligula sed lacinia venenatis, nisi libero euismod sapien, et mattis orci est quis nulla. Vivamus sed purus posuere ligula rhoncus tempus.</div>

        <div>Vivamus sed justo nisl. Praesent vel lectus pellentesque, cursus velit sit amet, bibendum augue. Praesent elementum eget libero eget bibendum. Praesent ac neque mi. Phasellus dapibus accumsan orci, et blandit arcu vehicula id. Morbi eget varius lorem. Vivamus facilisis, nunc sed rhoncus facilisis, ipsum odio bibendum nisi, ut pretium diam dui at ante. Morbi ac purus at libero egestas imperdiet finibus eu est.</div>

        <div>Vestibulum venenatis erat vel lobortis suscipit. Donec magna est, fringilla a ultrices ut, mattis quis lorem. Fusce et varius nibh. Proin a massa tempus, vehicula mi non, auctor orci. Nunc eget leo sit amet elit ullamcorper facilisis ac sed ligula. Nulla nec magna eu orci placerat malesuada. Proin tempus vel mi dapibus porta. Etiam non purus fermentum est elementum fermentum in eget nibh. Aenean laoreet tellus vel mauris interdum aliquet. Sed id lectus a dolor molestie faucibus et et enim. Phasellus non ante purus. Nulla facilisi. Nam faucibus tristique ligula, ac varius orci laoreet suscipit. Integer vel arcu vitae leo ornare vulputate sit amet vitae libero. Vestibulum dapibus nulla eu libero ullamcorper, sed posuere nisi congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</div>

        <div>Integer sodales viverra luctus. Nam justo ligula, sodales ut sollicitudin vitae, tempor aliquam sem. In luctus tristique mauris et ultricies. Morbi feugiat, nunc vel malesuada feugiat, velit nisi tristique neque, vehicula imperdiet massa diam ac tortor. Pellentesque sit amet pulvinar nulla. Sed eu dui at tellus efficitur vulputate nec eget purus. Donec ante mi, tincidunt ac lacinia quis, pellentesque at libero. Ut ac tortor mauris. Praesent viverra nulla sed rutrum pellentesque. Mauris nisl tortor, semper quis lectus quis, scelerisque auctor enim. Sed non tempus nisi. Proin massa augue, sagittis in dignissim in, bibendum ut mauris.</div>

        <div>Mauris metus turpis, ullamcorper nec elit id, eleifend scelerisque lorem. Curabitur id est lacus. Fusce sapien metus, ultrices a molestie sed, porta in elit. Nullam condimentum elit id odio tincidunt, non malesuada neque sodales. Morbi gravida quam at mauris mattis, a consequat quam gravida. Duis interdum nibh vulputate, finibus turpis nec, placerat mauris. Nullam fermentum consequat tincidunt. Nulla facilisi. Donec id eros at dolor volutpat mollis ut non quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus venenatis nunc mauris, eu bibendum neque semper id. Integer nec lacus ligula.</div>
    </article>

    <Toolbar>
        <button class="icon"><IconThumbUp /></button>
        <button class="icon like"><IconChatBubbleOutline /></button>
        <button class="icon"><IconShare /></button>
    </Toolbar>
</main>

<style lang="scss">
    button {
      height: 100%;
    }

    .like {
      padding-top: 0.85rem;
    }
</style>