<template>
	<div class="container py-8 md:py-16 lg:py-12 font-header">
		<div class="flex flex-wrap lg:flex-no-wrap justify-between">
			<div class="w-full md:w-4/12 lg:w-3/12 mb-16 md:mb-0">
				<img :src="img_path" :alt="movie.title" class="shadow-xl w-full object-cover">
			</div>
			<div class="w-full md:w-7/12 lg:w-8/12 text-white tracking-wide">
				<div class="mb-8">
					<h1 class="text-4xl sm:text-5xl "> {{ movie.title }} ({{ release_year }})</h1>
					<div class="mt-1 flex items-center mb-6 sm:mb-10">
						<div class="mt-2 font-medium text-base leading-5 text-gray-300 mr-4" v-for="g in movie.genres">
							{{ g.name }} 
						</div>
					</div>
					<h2 class="text-gray-500 font-medium tracking-wider text-xl"> {{ movie.tagline }} </h2>
				</div>
				<div>	
					<h3 class="text-gray-300 text-4xl mb-4">Synopsis</h3>
					<p class="mb-6 md:mb-12 text-base text-gray-600 leading-6 tracking-wide">
						{{ movie.overview }}
					</p>
					<a :href="movie.homepage" target="_blank" v-if="movie.homepage != '' " class="px-6 py-3 rounded bg-orange-600 text-black"> Trailer </a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import moment from 'moment'
	export default {
		components : {
			//
		},
		data () {
			return {
				movie : null,
				recommendations : null
			}
		},
		computed : {
			release_year () {
				moment.locale('fr')
				return moment(this.movie.release_date, 'YYYY-MM-DD').format('YYYY');
			},
			img_path () {
				return `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
			}
		},
		async asyncData({app, params}) {
			let movie = await app.$axios.get(`/movie/${params.slug}?api_key=0f3f33dced31eeefc8ffbfc3c474b7b6&language=fr`)
			return { movie : movie.data }
		}
	}
</script>