<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import { Auth } from 'aws-amplify';

	/** if user is authenticated, redirect to /my-nfts. Otherwise, redirect to /login */
	onMount(async () => {
		try {
			goto('/my-nfts');
		} catch (e: any) {
			if (e === 'The user is not authenticated') {
				if (import.meta.env.VITE_ATOMRIGS_DEBUGGING) {
					console.log('로그인 페이지로 이동');
				}
				goto('/login');
			} else {
				console.error(e);
			}
		}
	});
</script>

<div class="fullViewPort centeredContainer">
	<!-- https://loading.io/css/ -->
	<div class="lds-ellipsis">
		<div />
		<div />
		<div />
		<div />
	</div>
</div>

<style>
	.fullViewPort {
		width: 100vw;
		height: 100vh;
	}

	.centeredContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.lds-ellipsis {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ellipsis div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #7a7a7a;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.lds-ellipsis div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
</style>
