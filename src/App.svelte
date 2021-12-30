<script lang="ts">
	export let name: string;
	
</script>

<main>
	<p>Hello .</p>
</main>

<style>
	:root{
		--size:min(30vh,30vw);
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;

	}
	p {
		font-size:var(--size)
	}



</style>