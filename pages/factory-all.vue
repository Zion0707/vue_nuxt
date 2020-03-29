<template>
	<div id="app">
		<Header/>
		<div class="container">
			<FactoryAllSidebar/>
			<div class="main">
				
				<nuxt-child/>
				
				<Footer/>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '~/components/Header.vue'
import FactoryAllSidebar from '~/components/FactoryAllSidebar.vue'
import Footer from '~/components/Footer.vue'


export default {
	components: {
		Header,
		Footer,
		FactoryAllSidebar,
	}
}
</script>
