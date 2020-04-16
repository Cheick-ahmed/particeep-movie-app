<template>
	<div class="border-b border-gray-700 py-2">
		<nav class="container">
			<div class="">
				<div class="relative flex items-center justify-between h-16">
					<div class="flex-1 flex items-center justify-center justify-between">
						<div class="flex-shrink-0">
							<nuxt-link :to=" { name : 'index' } ">
								<img class="h-12 w-auto" src="~assets/images/logo.svg" alt="" />
							</nuxt-link>
						</div>
						<div class="">
							<div class="flex">
								<nuxt-link :to=" { name : 'index' } " class="hover:text-orange-400 px-3 py-4 rounded-md text-sm sm:text-base font-medium leading-5 text-white focus:outline-none uppercase" :class="{ 'text-orange-400' : this.$route.name === 'index' }">
								Films
							</nuxt-link>
								<nuxt-link :to=" { name : 'tv' } " class="hover:text-orange-400 px-3 py-4 rounded-md text-sm sm:text-base font-medium leading-5 text-white focus:outline-none uppercase" :class=" { 'text-orange-400' : this.$route.name === 'tv' || this.$route.name === 'tv-slug' } ">Television</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
	export default {
		//
	}
</script>