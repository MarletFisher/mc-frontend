import validate from "@/lib/cardValidater";
import MonsterCard from "@/types/MonsterCard";

export async function sendCardData(data) {
	try {
		const res = await fetch(`${MC_CONCEPT_API_URL}/cards/test`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		return res.status === 200 ? JSON.stringify(data) : [];
	} catch (err) {
		console.log(err);
		return err;
	}
}

export function compileCardForm(data) {
	let formSet = [];

	data.forEach((card) => {
		if (!card.category) {
			formSet.push(compileMonsterCard(card));
		} else {
			formSet.push(compileSpellCard(card));
		}
	});

	formSet.forEach((card) => {
		console.log(validate(card));
		console.log(JSON.stringify(card));
	});

	// sendCardData(formSet);
}

function compileMonsterCard(card) {
	const result = new MonsterCard();

	result.name = card.name;
	result.type = card.type;
	result.atk_points = card.atk_points;
	result.def_points = card.def_points;
	result.prize_points = card.prize_points;
	result.keywords = card.keywords;
	result.ability = card.ability;
	result.category = 1;
	result.length = card.length;
	result.width = card.width;
	result.height = card.height;
	// centivalue
	// rarity
	// availability
	// img
	result.directions = card.directions;

	return result;
}

function compileSpellCard(card) {
	const result = {};

	result.name = card.name;
	result.type = card.type;
	result.atk_points = 0;
	result.def_points = 0;
	result.prize_points = card.prize_points;
	result.keywords = card.keywords;
	result.ability = card.ability;
	result.category = 2;
	result.length = 0;
	result.width = 0;
	result.height = 0;
	result.centivalue = 0;
	result.rarity = 0;
	result.availability = false;
	result.img = "";
	result.directions = "S";

	return result;
}
