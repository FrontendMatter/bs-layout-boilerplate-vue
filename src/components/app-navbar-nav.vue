<template>
	<ul class="nav navbar-nav">
		<li class="nav-item">
			<a class="nav-link" v-link="{ name: 'home', exact: true }">Fixed</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" v-link="{ name: 'sidebar', exact: true }">Sidebar</a>
		</li>
	</ul>
</template>