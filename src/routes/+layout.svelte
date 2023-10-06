<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Auth } from 'aws-amplify';

	import type { IAccount } from '$lib/interfaces';
	import { accountData } from '$lib/store/core';

	import '../app.postcss';

	function getTokensAndUserInfo(data: any): IAccount {
		const {
			pool: { userPoolId: authProviderId },
			signInUserSession: { accessToken: accessTokenData, idToken: idTokenData }
		} = data;

		const {
			jwtToken: idToken,
			payload: {
				'cognito:groups': cognitoGroups,
				'cognito:username': federatedUserId,
				email,
				name: displayName,
				sub: authUserId
			}
		} = idTokenData;

		const federatedProvider = cognitoGroup[0].split('_')[2].toLowerCase();

		return {
			accessToken: accessTokenData.jwtToken,
			idToken,
			displayName,
			email,
			authUserId,
			authProvider: 'cognito-user-pool',
			authProviderId,
			federatedUserId,
			federatedProvider
		};
	}

	onMount(async () => {
		try {
			const authedUser = await Auth.currentAuthenticatedUser();

			// get data from current user
			const {
				accessToken,
				idToken,
				displayName,
				email,
				authUserId,
				authProviderId,
				federatedUserId,
				federatedProvider
			} = getTokensAndUserInfo(authedUser);

			// set accountData in store
			accountData.set({
				accessToken,
				idToken,
				displayName,
				email,
				authUserId,
				authProvider: 'cognito-user-pool',
				authProviderId,
				federatedUserId,
				federatedProvider
			});
		} catch (err) {
			console.error(err);
		}
	});
</script>
