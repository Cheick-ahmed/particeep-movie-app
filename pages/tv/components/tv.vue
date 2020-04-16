<template>
	<div class="rounded transform hover:-translate-y-2 transition duration-500 lg:mb-6">
		<template v-if="!tv">
			<div class="spinner py-16 lg:py-32"></div>
		</template>
		<template v-else>
			<nuxt-link :to=" { name : 'tv-slug', params : { slug : tv.id } } ">
				<img :src="img_path" :alt="tv.name" class="object-cover w-full">
			</nuxt-link>
			<div class="py-4 text-white tracking-wide">
				<h1 class="text-2xl mb-2"> {{ tv.name }} </h1> 
			</div>
		</template>
	</div>
</template>
<script>
	import moment from 'moment'
	export default {
		props : {
			tv : {
				required : true,
				type : Object
			}
		},
		computed : {
			img_path () {
				return `https://image.tmdb.org/t/p/w500/${this.tv.poster_path}`
			},
			release_date () {
				moment.locale('fr')
				return moment(this.tv.release_date, 'YYYY-MM-DD').format('Do MMMM YYYY');
			}
		}
	}
</script>