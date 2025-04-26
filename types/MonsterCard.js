import CardForm from "./CardForm";

export default class MonsterCard extends CardForm {
	constructor(
		atk_points = 0,
		def_points = 0,
		prize_points = 0,
		length = 1,
		width = 1,
		height = 1,
		directions = "S",
		...args
	) {
		super(...args);
		this.atk_points = atk_points;
		this.def_points = def_points;
		this.prize_points = prize_points;
		this.length = length;
		this.width = width;
		this.height = height;
		this.centivalue = 0;
		this.directions = directions;
		this.img = "";

		// monster card
		this.category = 1;
	}
}
