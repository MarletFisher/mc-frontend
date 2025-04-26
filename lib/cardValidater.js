const MIN_LENGTH = 1;
const MIN_WIDTH = 1;
const MIN_HEIGHT = 1;

const MAX_LENGTH = 3;
const MAX_WIDTH = 3;
const MAX_HEIGHT = 3;

const MIN_ATK = 0;
const MIN_DEF = 0;
const MIN_PRZ = 0;

const MAX_ATK = 9999;
const MAX_DEF = 9999;
const MAX_PRZ = 100;

// returns bool
export default function validate(card) {
	let valid = true;

	valid = regexCheck(card);
	valid = format(card);
	valid = quantityLimits(card);

	return valid;
}

function regexCheck(card) {
	let valid = true;

	try {
		const name_re = /^[A-z-',.0-9 éèàá&!#]*$/;
		const type_re = /^[A-zéèàá]*$/;
		const keyword_re = /^[A-z,]*$/;
		// const number_re = /^[0-9]*[0-9]*[0-9]*[0-9]$/;
		const ability_re = /^[A-z :."'%()+=<>éèàá0-9-!#&]*$/;
		const movement_set = new Set([
			"queen",
			"rook",
			"bishop",
			"knight",
			"pawn",
			"stationary",
			"vertical",
			"horizontal",
		]);

		valid = card.name.match(name_re);
		valid = card.type.match(type_re);
		valid = card.keywords.match(keyword_re);
		valid = card.ability.match(ability_re);

		valid = movement_set.has(card.directions.toLowerCase());

		return valid;
	} catch (err) {
		console.log("ERROR: regex check failed... ", err);
		return false;
	}
}

function quantityLimits(card) {
	let valid = true;

	// console.log(JSON.stringify(card));

	valid = card.atk_points >= MIN_ATK && card.atk_points <= MAX_ATK;
	valid = card.def_points >= MIN_DEF && card.def_points <= MAX_DEF;
	valid = card.prize_points >= MIN_PRZ && card.prize_points <= MAX_PRZ;

	valid = card.length >= MIN_LENGTH && card.length <= MAX_LENGTH;
	valid = card.width >= MIN_WIDTH && card.width <= MAX_WIDTH;
	valid = card.height >= MIN_HEIGHT && card.height <= MAX_HEIGHT;

	return true;
}

function format(card) {
	try {
		const whitespaces_re = /\s+/g;

		card.name = card.name.trim().replace(whitespaces_re, " ");
		card.type = card.type.trim().replace(whitespaces_re, " ");
		card.ability = card.ability.trim().replace(whitespaces_re, " ");
		card.directions = card.directions.trim().replace(whitespaces_re, " ");

		// different because I want no spaces in between
		card.keywords = card.keywords.trim().replaceAll(" ", "").toLowerCase();

		card.atk_points = Number(card.atk_points);
		card.def_points = Number(card.def_points);
		card.prize_points = Number(card.prize_points);

		card.length = Number(card.length);
		card.width = Number(card.width);
		card.height = Number(card.height);

		card.directions = card.directions[0].toUpperCase();

		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
}
