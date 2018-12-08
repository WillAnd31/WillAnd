<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">
html {
	padding: 0;
	margin: 0;
	box-sizing: border-box;

	#app {
		font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-image: url(/img/fabric.png);
		background-color: #eceded;
		min-height: 100vh;
	}
}
</style>
