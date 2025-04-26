export default class CardForm {
	constructor(
		name = "",
		type = "",
		keywords = "",
		ability = "",
		rarity = 0,
		release = 1,
		img = "",
		author = "anon"
	) {
		this.name = name;
		this.type = type;
		this.keywords = keywords;
		this.ability = ability;
		this.rarity = rarity;
		this.availability = false;
		this.release = release;
		this.img = img;
		this.author = author;
	}
}
