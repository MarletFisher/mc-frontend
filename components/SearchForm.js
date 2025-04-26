import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import CardsUI from "./CardsUI";

export default function SearchForm(props) {
	const static_data = {
		size: "sm",
		cards: [
			{
				name: "Dark Magician",
				type: "Magician",
				keywords: ["Condition", "Action"],
				ability:
					"Condition: Tribute 2 pieces, Action: Once per turn, destroy 1 piece in line 3",
				rarity: 0,
				availability: false,
				release: 1,
				img: "",
				author: "anon",
				atk_points: 2500,
				def_points: 2100,
				prize_points: 5,
				length: 1,
				width: 1,
				height: 3,
				centivalue: 0,
				directions: "Q",
				category: 1,
			},
			{
				name: "Blue Eyes White Dragon",
				type: "Dragon",
				keywords: ["Condition", "Flying", "Action"],
				ability:
					"Condition: Tribute 2 pieces, Action: Once per turn, destroy all pieces in line 3",
				rarity: 0,
				availability: false,
				release: 1,
				img: "",
				author: "anon",
				atk_points: 3000,
				def_points: 2500,
				prize_points: 6,
				length: 1,
				width: 1,
				height: 3,
				centivalue: 0,
				directions: "",
				category: 1,
			},
			{
				name: "Captain of the Knight Cavalry",
				type: "Knight",
				atk_points: 2400,
				def_points: 2000,
				prize_points: 6,
				keywords: "condition",
				ability: "Condition: Tribute 2 Knights",
				category: 1,
				length: 1,
				width: 1,
				height: 3,
				centivalue: 0,
				rarity: 0,
				availability: true,
				release: "1",
				img: "",
				author: "game_admin",
				directions: "Q",
				id: 2,
			},
			{
				name: "Knight Squad Commander",
				type: "Knight",
				atk_points: 2000,
				def_points: 1800,
				prize_points: 4,
				keywords: "condition,aura",
				ability:
					"Condition: Tribute 1 Knight, Aura: All Knights gain Movement 1",
				category: 1,
				length: 1,
				width: 1,
				height: 3,
				centivalue: 0,
				rarity: 0,
				availability: true,
				release: "1",
				img: "",
				author: "game_admin",
				directions: "B",
				id: 4,
			},
		],
	};

	return (
		<>
			<Form>
				<Row className="mb-3">
					<Col xs={6}>
						<Form.Group controlId="cardName">
							<Form.Control type="text" placeholder="card name" />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="atkMin">
							<Form.Control type="number" placeholder="atk min" step={100} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="atkMax">
							<Form.Control type="number" placeholder="atk max" step={100} />
						</Form.Group>
					</Col>
				</Row>
				<Row className="mb-3">
					<Col xs={6}>
						<Form.Group controlId="cardType">
							<Form.Control type="text" placeholder="type" />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="defMin">
							<Form.Control type="number" placeholder="def min" step={100} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="defMax">
							<Form.Control type="number" placeholder="def max" step={100} />
						</Form.Group>
					</Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<Form.Group controlId="ability">
							<Form.Control type="text" placeholder="ability text here" />
						</Form.Group>
					</Col>
				</Row>
				<Form.Group className="mb-3" controlId="cardReleased">
					<Form.Check type="checkbox" label="Released" />
				</Form.Group>
				<Stack direction="horizontal">
					<Button className="ms-auto me-2" variant="primary" type="submit">
						Submit
					</Button>
					<Button variant="secondary">Reset Default</Button>
				</Stack>
			</Form>
			&nbsp; &nbsp;
			<CardsUI format={props.format} cards={static_data.cards}></CardsUI>
		</>
	);
}
