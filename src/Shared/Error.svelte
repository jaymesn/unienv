<script lang="ts">
	export let name: string;
	
</script>

<main>
	<h1>Error.</h1>
	<h2>type:<p>{name}</p></h2>
</main>

<style>
	:root{
		--size:min(30%,30%);
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
        width: 100%;
        height: 100%;

	}
	p {
		font-size:var(--size)
	}



</style>