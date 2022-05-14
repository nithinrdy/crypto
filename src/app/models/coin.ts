export interface Coin {
	id: string;
	symbol: string;
	name: string;
	image: string;
	current_price: Number;
	market_cap: Number;
	market_cap_rank: Number;
	fully_diluted_valuation: Number | null;
	total_volume: Number;
	high_24h: Number;
	low_24h: Number;
	price_change_24h: Number;
	price_change_percentage_24h: Number;
	market_cap_change_24h: Number;
	market_cap_change_percentage_24h: Number;
	circulating_supply: Number;
	total_supply: Number | null;
	max_supply: Number | null;
	ath: Number;
	ath_change_percentage: Number;
	ath_date: string;
	atl: Number;
	atl_change_percentage: Number;
	atl_date: string;
	roi: object | null;
	last_updated: string;
}
