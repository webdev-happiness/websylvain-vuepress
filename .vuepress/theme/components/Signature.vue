<template lang="html">
  <div class="signature">
    <div class="signature-head">
      <div class="signature-head-picture avatar avatar-xl">
        <img :src="$withBase(this.$site.themeConfig.domain +'/img/avatars/'+ signature.frontmatter.avatar)" :alt="signature.title">
        <i class="avatar-presence online"></i>
      </div>
      <p class="signature-head-title">Écrit par <a :href="signature.path">{{signature.title}}</a>
      <br>le <span>{{this.$page.frontmatter.published}}</span></p>
    </div>
    <div class="signature-description">
      <p><small>{{signature.frontmatter.description}}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    author: String
  },
  computed:{
    signature(){

      let signatures = this.$site.pages.filter(p => {
        if (p.path != this.not){
          return p.path.indexOf('/a-propos/auteurs/') >= 0;
        }
      });

      return signatures.filter(s => s.frontmatter.title == this.author)[0];

    }
  }
}
</script>

<style lang="stylus">
  .signature
      width: 100%
      .signature-head-picture
        float left
      .signature-head-title
        margin-left: 80px;
      .signature-description
        clear:both

</style>
