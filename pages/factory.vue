<template>
	<div id="app">
		<Header/>
		<div class="container">
			<FactorySidebar/>
			<div class="main">
				
				<nuxt-child/>
				
				<Footer/>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '~/components/Header.vue'
import FactorySidebar from '~/components/FactorySidebar.vue'
import Footer from '~/components/Footer.vue'


export default {
	components: {
		Header,
		Footer,
		FactorySidebar,
	}
}
</script>
