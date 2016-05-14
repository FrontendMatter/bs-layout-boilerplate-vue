<template>
	<layout layout-type="fluid">
		<navbar slot="navbar" class="navbar-light bg-white ls-left-sidebar">
			
			<!-- Toggle Sidebar -->
			<button class="navbar-toggler pull-xs-left" type="button" v-sidebar-toggle data-target="#sidebar"><span class="material-icons">menu</span></button>

			<!-- Brand -->
			<span class="navbar-brand">Brand</span>
			
			<!-- Nav -->
			<app-navbar-nav></app-navbar-nav>

		</navbar>
		<sidebar slot="sidebar" class="sidebar-dark bg-primary" sidebar-id="sidebar">
			
			<!-- Brand -->
			<a v-link="{ name: 'home' }" class="sidebar-brand sidebar-brand-bg sidebar-brand-border m-b-0">Brand</a>

			<!-- Menu -->
			<ul class="sidebar-menu sm-active-button-bg">
				<li class="sidebar-menu-item" v-link-active>
					<a class="sidebar-menu-button" v-link="{ name: 'home', exact: true }"><i class="sidebar-menu-icon material-icons">home</i> Fixed layout</a>
				</li>
				<li class="sidebar-menu-item" v-link-active>
					<a class="sidebar-menu-button" v-link="{ name: 'sidebar', exact: true }"><i class="sidebar-menu-icon material-icons">menu</i> Sidebar layout</a>
				</li>
			</ul>

		</sidebar>

		<!-- Breadcrumb -->
		<ol class="breadcrumb">
			<li><a v-link="{ name: 'home' }">AdminPlus</a></li>
			<li class="active">Sidebar layout</li>
		</ol>

		<app-hello-world></app-hello-world>

	</layout>
</template>

<script>
	import { Layout, Navbar, Sidebar, SidebarToggle } from 'vue-bootstrap-layout'
	import AppHelloWorld from 'app/components/app-hello-world'
	import AppNavbarNav from 'app/components/app-navbar-nav'

	export default {
		components: {
			Layout,
			Navbar,
			Sidebar,
			AppNavbarNav,
			AppHelloWorld
		},
		directives: {
			SidebarToggle
		}
	}
</script>