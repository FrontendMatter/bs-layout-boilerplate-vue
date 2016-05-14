<template>
	<layout layout-type="fixed">
		<navbar slot="navbar" class="navbar-dark bg-primary">
			<div class="container">
				
				<!-- Navbar toggle -->
				<button class="navbar-toggler hidden-md-up pull-xs-right last-child-xs" type="button" data-toggle="collapse" data-target="#navbar"><span class="material-icons">menu</span></button>

				<!-- Brand -->
				<a class="navbar-brand" v-link="{ name: 'home' }">Brand</a>

				<!-- Collapse -->
				<div class="collapse navbar-toggleable-xs" id="navbar">
					<app-navbar-nav></app-navbar-nav>	
				</div>

			</div>
		</navbar>

		<!-- Breadcrumb -->
		<ol class="breadcrumb">
			<li><a v-link="{ name: 'home' }">BS Layout</a></li>
			<li class="active">Fixed layout</li>
		</ol>

		<app-hello-world></app-hello-world>
		
	</layout>
</template>

<script>
	import { Layout, Navbar } from 'vue-bootstrap-layout'
	import AppHelloWorld from 'app/components/app-hello-world'
	import AppNavbarNav from 'app/components/app-navbar-nav'

	export default {
		components: {
			Layout,
			Navbar,
			AppNavbarNav,
			AppHelloWorld
		}
	}
</script>