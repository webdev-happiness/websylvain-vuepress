<template>
	<div>
		<ul class="posts-list">
			<li v-for="post in recentFiles">
				<article class="post">
					<aside class="post-side">
						<template v-if="post.path.split('/')[2] == 'case-study'">
							<p class="post-side-icon"><i class="fa fa-code"></i></p>
							<p class="post-side-title">Etude de cas</p>
						</template>
						<template v-else>
							<p class="post-side-icon"><i class="fa fa-newspaper-o "></i></p>
							<p class="post-side-title">Article</p>
						</template>
						<p  class="post-side-author">Par {{post.frontmatter.author}}</p>
					</aside>
					<section class="post-preview">
						<h2><a :href="post.path">{{post.title}}</a></h2>
						<p class="post-preview-infos">
							<small>
								Le <span>{{post.frontmatter.published}}</span> | <span>{{post.frontmatter.categories}}</span>
							</small>
						</p>
						<p class="post-preview-content">{{post.frontmatter.description}}<a :href="post.path"> &rarr; lire la suite</a></p>
					</section>
				</article>
				<hr>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			not: String
		},
		data() {
			return {};
		},
		computed:{
			recentFiles() {
				let files = this.$site.pages.filter(p => {
					if (p.path != this.not){
						return p.path.indexOf('/posts/') >= 0;
					}
				}).sort((a,b) => {
					let aDate = new Date(a.frontmatter.published).getTime();
					let bDate = new Date(b.frontmatter.published).getTime();
					let diff = aDate - bDate;
					if(diff > 0) return -1;
					if(diff < 0) return 1;
					return 0;
				}).slice(0,10);

				return files;
			}
		}
	}
</script>

<style lang="stylus">
	@import '../theme/websylvain-styles/theme/variables.styl'

	ul.posts-list
		margin-left: 0px
		padding-left: 0px
		li
			list-style: none
			margin-bottom:25px;
			article
				h2
					margin-top:0px;
					margin-bottom: 0px


.post-side-icon
	width:100%;
.post-side-title
	font-weight: bold;
	text-transform: uppercase;

@media (min-width: $MQNarrow)
	.post-preview, .post-side
		display:inline-block
		vertical-align:middle
		box-sizing: border-box
	.post-side
		width: 20%
		text-align:center;
		padding-right: 15px;
		i.fa
			font-size:30px;
	.post-preview
		width:80%

@media (max-width: $MQNarrow)
	.post-side-icon, .post-side-title, .post-side-author
		display:inline;
	.post-side-title
		margin-left: 15px
	.post-side-author
		display:none;
</style>
