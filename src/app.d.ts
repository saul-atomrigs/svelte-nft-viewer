// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	// NOTE: UI 개발용 임시 type
	type NftItem = {
		id: string;
		name: string;
		subtitle: string;
		thumbnail: string;
		hasBenefit: boolean;
		network: 'avalanche' | 'binance' | 'ethereum' | 'polygon';
		mediaType: 'image' | 'video' | 'audio';
	};
}

export {};
