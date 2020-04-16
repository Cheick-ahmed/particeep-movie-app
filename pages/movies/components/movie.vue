<template>
	<div class="rounded transform hover:-translate-y-2 transition duration-500 lg:mb-6">
		<template v-if="!movie">
			<div class="spinner py-16 lg:py-32"></div>
		</template>
		<template v-else>
			<nuxt-link :to=" { name : 'movies-slug', params : { slug : movie.id } } ">
				<img :src="img_path" :alt="movie.title" class="object-cover w-full">
			</nuxt-link>
			<div class="py-4 text-white tracking-wide">
				<h1 class="text-2xl mb-2"> {{ movie.title ||  movie.name }} </h1> 
				<p class="text-sm text-orange-400" v-if="withDate"> {{ release_date}} </p>
			</div>
		</template>
	</div>
</template>
<script>
	import moment from 'moment'
	export default {
		props : {
			movie : {
				required : true,
				type : Object
			},
			withDate : {
				required : false,
				default : false
			}
		},
		computed : {
			img_path () {
				return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
			},
			release_date () {
				moment.locale('fr')
				return moment(this.movie.release_date, 'YYYY-MM-DD').format('Do MMMM YYYY');
			}
		}
	}
</script>