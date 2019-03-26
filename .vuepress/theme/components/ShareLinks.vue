<template lang="html">
  <div class="">
    <p>Partagez cet article sur les réseaux sociaux</p>
    <ul class="share-links">
      <li>
        <a target="_blank" :href="'http://www.facebook.com/sharer.php?u='+ url">
          <i class="fa fa-facebook-f"></i>
        </a>
      </li>
      <li>
        <a target="_blank" :href="'https://twitter.com/share?url='+url+'&amp;text='+ message +'&amp;hashtags='+ hashtags">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a target="_blank" :href="'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url">
          <i class="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a target="_blank" :href="'http://reddit.com/submit?url='+ url +'&amp;title='+ message">
            <i class="fa fa-reddit"></i>
        </a>
      </li>
      <li>
        <a target="_blank" :href="'https://plus.google.com/share?url=' + url">
          <i class="fa fa-google-plus"></i>
        </a>
      </li>
      <li>
        <a :href="'mailto:?Subject='+ message +'&amp;Body='+ url">
          <i class="fa fa-envelope"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    message: String,
    hashtags: String
  },
  data() {
    return {};
  }
}
</script>

<style lang="stylus">
  .share-links
    li
      list-style:none;
      display:inline-block;
      padding: 0px 15px;
      &:last-child
        padding-right:0px;
</style>
