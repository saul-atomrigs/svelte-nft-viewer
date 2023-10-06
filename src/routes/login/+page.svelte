<script lang="ts">
	import { Auth } from 'aws-amplify';
	import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

	const proceedLogin = async () => {
		await Auth.federatedSignIn({
			provider: CognitoHostedUIIdentityProvider.Google
		});
	};
</script>

<div class="scene">
	<div class="wrap">
		<div class="wall wall-right" />
		<div class="wall wall-left" />
		<div class="wall wall-top" />
		<div class="wall wall-bottom" />
		<div class="wall wall-back" />
	</div>
	<div class="wrap">
		<div class="wall wall-right" />
		<div class="wall wall-left" />
		<div class="wall wall-top" />
		<div class="wall wall-bottom" />
		<div class="wall wall-back" />
	</div>
</div>

<div class="cover">
	<div class="absolute top-1/3 w-full flex justify-center">
		<img src="/images/interverse-logo-big.png" alt="INTERverse" class="w-[198px] md:w-[380px]" />
	</div>
	<div class="flex flex-col items-center absolute w-full bottom-0 mb-[40px] md:mb-[80px]">
		/** 구글 로그인 버튼 */
		<div
			on:click={proceedLogin}
			on:keydown={proceedLogin}
			on:keypress={proceedLogin}
			on:keyup={proceedLogin}
			aria-label="Sign in with Google"
			aria-hidden="true"
			class="bg-white w-3/4 h-[56px] rounded-lg flex items-center justify-center cursor-pointer"
		>
			<div class="px-3">
				<img src="/images/logo-google.png" width="26" alt="" />
			</div>
			Sign in with Google
		</div>
	</div>
</div>

<style>
	.cover {
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.55);
	}

	.wall {
		/* background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/18515/PIA09959-1280x800_copy.jpg); */
		background: url(/images/interverse-intro-bg.jpg);
		background-size: cover;
	}

	:global(html),
	:global(body) {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	:global(body) {
		background: #000;
		text-align: center;
	}

	:global(body)::before {
		content: '';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}

	.scene {
		display: inline-block;
		vertical-align: middle;
		perspective: 5px;
		perspective-origin: 50% 50%;
		position: relative;
	}

	.wrap {
		position: absolute;
		width: 1000px;
		height: 1000px;
		left: -500px;
		top: -500px;
		transform-style: preserve-3d;
		animation: move 12s infinite linear;
		animation-fill-mode: forwards;
	}

	.wrap:nth-child(2) {
		animation: move 12s infinite linear;
		animation-delay: 6s;
	}

	.wall {
		width: 100%;
		height: 100%;
		position: absolute;
		opacity: 0;
		animation: fade 12s infinite linear;
		animation-delay: 0;
	}

	.wrap:nth-child(2) .wall {
		animation-delay: 6s;
	}

	.wall-right {
		transform: rotateY(90deg) translateZ(500px);
	}

	.wall-left {
		transform: rotateY(-90deg) translateZ(500px);
	}

	.wall-top {
		transform: rotateX(90deg) translateZ(500px);
	}

	.wall-bottom {
		transform: rotateX(-90deg) translateZ(500px);
	}

	.wall-back {
		transform: rotateX(180deg) translateZ(500px);
	}

	@keyframes move {
		0% {
			transform: translateZ(-500px) rotate(0deg);
		}
		100% {
			transform: translateZ(500px) rotate(0deg);
		}
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		75% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
