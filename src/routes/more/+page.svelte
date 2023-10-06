<script lang="ts">
	import MoreMenuPanel from '../../lib/components/MoreMenuPanel.svelte';
	import LogoutConfirmDialog from '../../lib/components/LogoutConfirmDialog.svelte';
	import AppLayout from '$lib/components/AppLayout.svelte';

	let openLogoutConfirm = false;

	const onReqLogout = () => {
		openLogoutConfirm = true;
	};
</script>

/** 더보기 */
<AppLayout>
	<div class="pt-[20px] px-[16px]">
		<MoreMenuPanel on:reqlogout={onReqLogout} />
	</div>

	<LogoutConfirmDialog bind:open={openLogoutConfirm} />
</AppLayout>
