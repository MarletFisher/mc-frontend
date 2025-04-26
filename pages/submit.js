import { compileCardForm } from "@/lib/cardFormUtil";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { useFieldArray, useForm } from "react-hook-form";

export default function Submit(props) {
	// category, cardName, atk_points, def_points, prize_points, keywords, length, width, height, type, direction, ability, release,

	const [setTypes, setSetTypes] = useState([false]);
	const [submitModal, setSubmitModal] = useState(false);
	const [cardCount, setCardCount] = useState(0);

	const closeSubmitMsg = () => setSubmitModal(false);
	const openSubmitMsg = () => setSubmitModal(true);

	const { register, control, handleSubmit, setValue } = useForm({
		defaultValues: {
			cardSet: [
				{
					category: false,
					name: "",
					atk_points: 0,
					def_points: 0,
					prize_points: 1,
					length: 1,
					width: 1,
					height: 1,
					type: "",
					directions: "",
					ability: "",
					keywords: "",
					release: 0,
				},
			],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "cardSet",
	});

	function addCardSection() {
		// increment setCount
		append({
			category: false,
			name: "",
			atk_points: 0,
			def_points: 0,
			prize_points: 0,
			length: 1,
			width: 1,
			height: 1,
			type: "",
			directions: "",
			ability: "",
			keywords: "",
			release: 0,
		});
		setCardCount(cardCount + 1);
		setTypes.push(false);
	}

	function removeCardSection(index) {
		remove(index);
		setCardCount(cardCount - 1);
		setSetTypes((prevArray) => [...prevArray.splice(index, 1)]);
	}

	function switchCardType(index) {
		// setSetTypes((prevArray) => [...prevArray], false);
		setSetTypes((prevArray) => {
			const newArr = [...prevArray];
			newArr[index] = !newArr[index];
			return newArr;
		});
	}

	async function submitForm(data) {
		console.log("button pressed");
		// console.log(JSON.stringify(data.cardSet));

		compileCardForm(data.cardSet);
		openSubmitMsg();
	}

	const fillTest = () => {
		// card 1
		setValue("cardSet[0].name", "Dark Magician");
		setValue("cardSet[0].atk_points", "2500");
		setValue("cardSet[0].def_points", "2100");
		setValue("cardSet[0].prize_points", "5");
		setValue("cardSet[0].type", "Magician");
		setValue("cardSet[0].length", "1");
		setValue("cardSet[0].width", "1");
		setValue("cardSet[0].height", "3");
		setValue("cardSet[0].keywords", "Condition,Action");
		setValue("cardSet[0].directions", "queen");
		setValue(
			"cardSet[0].ability",
			"Condition: Tribute 2 pieces, Action: Once per turn, destroy 1 piece in line 3"
		);

		//card 2
		setValue("cardSet[1].name", "Blue Eyes White Dragon");
		setValue("cardSet[1].atk_points", "3000");
		setValue("cardSet[1].def_points", "2500");
		setValue("cardSet[1].prize_points", "6");
		setValue("cardSet[1].type", "Dragon");
		setValue("cardSet[1].length", "1");
		setValue("cardSet[1].width", "1");
		setValue("cardSet[1].height", "3");
		setValue("cardSet[1].keywords", "Condition,Flying,Action");
		setValue("cardSet[1].directions", "rook");
		setValue(
			"cardSet[1].ability",
			"Condition: Tribute 2 pieces, Action: Once per turn, destroy all pieces in line 3"
		);
		console.log(control._formValues.cardSet);
	};

	return (
		<>
			<Container>
				Search & display UI here eventually
				{/* <SearchForm format="short"></SearchForm> */}
				&nbsp;&nbsp;
			</Container>
			<br />
			<br />
			<Stack className="submit-form-width" direction="horizontal">
				<Form onSubmit={handleSubmit(submitForm)} className="max-width">
					<Row className="mb-5">
						<Col>
							{fields.map((field, index) => (
								<div key={field.id}>
									<Row>
										<Col>
											<Row className="mb-3">
												<Col xs="auto">
													<Form.Check
														type="switch"
														onClick={() => {
															switchCardType(index);
														}}
														{...register(`cardSet.${index}.category`)}
													/>
												</Col>
												<Col>{setTypes[index] ? "spell" : "monster"}</Col>
											</Row>
											<Row className="mb-2 ">
												<Col>
													<Form.Control
														type="text"
														placeholder="card name"
														{...register(`cardSet.${index}.name`)}
													/>
												</Col>
												{!setTypes[index] && (
													<Col xs={7}>
														<Row>
															<Col>
																<InputGroup>
																	<InputGroup.Text>ATK</InputGroup.Text>
																	<Form.Control
																		type="number"
																		placeholder="pts"
																		aria-label="atk"
																		step={100}
																		min={0}
																		{...register(`cardSet.${index}.atk_points`)}
																	/>
																</InputGroup>
															</Col>
															<Col>
																<InputGroup>
																	<InputGroup.Text>DEF</InputGroup.Text>
																	<Form.Control
																		// controlId="defPts"
																		type="number"
																		placeholder="pts"
																		aria-label="def"
																		step={100}
																		min={0}
																		{...register(`cardSet.${index}.def_points`)}
																	/>
																</InputGroup>
															</Col>
															<Col>
																<InputGroup>
																	<InputGroup.Text>PRZ</InputGroup.Text>
																	<Form.Control
																		// controlId="defPts"
																		type="number"
																		placeholder="pts"
																		aria-label="prz"
																		min={0}
																		{...register(
																			`cardSet.${index}.prize_points`
																		)}
																	/>
																</InputGroup>
															</Col>
														</Row>
													</Col>
												)}
											</Row>
											<Row className="mb-2 align-items-center">
												<Col>
													<Form.Control
														type="text"
														placeholder="type"
														{...register(`cardSet.${index}.type`)}
													/>
												</Col>

												{!setTypes[index] && (
													<Col>
														<Row>
															<Col>
																<InputGroup size="sm">
																	<InputGroup.Text>len</InputGroup.Text>
																	<Form.Control
																		type="number"
																		aria-label="length"
																		min={1}
																		{...register(`cardSet.${index}.length`)}
																	/>
																</InputGroup>
															</Col>
															<Col>
																<InputGroup size="sm">
																	<InputGroup.Text>wid</InputGroup.Text>
																	<Form.Control
																		type="number"
																		aria-label="width"
																		defaultValue={1}
																		min={1}
																		{...register(`cardSet.${index}.width`)}
																	/>
																</InputGroup>
															</Col>
															<Col>
																<InputGroup size="sm">
																	<InputGroup.Text>hgt</InputGroup.Text>
																	<Form.Control
																		type="number"
																		aria-label="height"
																		defaultValue={1}
																		min={1}
																		max={3}
																		{...register(`cardSet.${index}.height`)}
																	/>
																</InputGroup>
															</Col>
														</Row>
													</Col>
												)}
											</Row>
											<Row className="mb-2 align-items-center">
												<Col xs={10}>
													<Form.Control
														type="text"
														placeholder="keywords, seperated by commas e.g. 'Condition,Initiative'"
														{...register(`cardSet.${index}.keywords`)}
													/>
												</Col>
												{!setTypes[index] && (
													<Col>
														<InputGroup size="sm">
															<InputGroup.Text>DIR</InputGroup.Text>
															<Form.Select
																aria-label="directions"
																{...register(`cardSet.${index}.directions`)}
															>
																<option>queen</option>
																<option>rook</option>
																<option>bishop</option>
																<option>knight</option>
																<option>pawn</option>
																<option>vertical</option>
																<option>horizontal</option>
															</Form.Select>
														</InputGroup>
													</Col>
												)}
												{setTypes[index] && (
													<Col>
														<InputGroup size="sm">
															<InputGroup.Text>PRZ</InputGroup.Text>
															<Form.Control
																// controlId="defPts"
																type="number"
																placeholder="pts"
																aria-label="prz"
																{...register(`cardSet.${index}.prize_points`)}
															/>
														</InputGroup>
													</Col>
												)}
											</Row>
											<Row className="mb-2">
												<Col>
													<InputGroup>
														<InputGroup.Text>ability</InputGroup.Text>
														<Form.Control
															as="textarea"
															aria-label="ability"
															{...register(`cardSet.${index}.ability`)}
														/>
													</InputGroup>
												</Col>
											</Row>
										</Col>
										<Col xs={3}>
											<Row>
												<Col>
													<Stack>
														<Button
															className="p2 ms-auto "
															variant="danger"
															disabled={cardCount == 0}
															onClick={() => removeCardSection(index)}
														>
															-
														</Button>
													</Stack>
												</Col>
											</Row>
										</Col>
									</Row>
								</div>
							))}
						</Col>
					</Row>
					<Stack direction="horizontal" gap={3}>
						<Button className="p-2" variant="info" onClick={addCardSection}>
							add new
						</Button>
						<Button variant="primary" type="submit" className="p-2 ms-auto">
							submit
						</Button>
						<Button variant="secondary" className="p-2">
							reset default
						</Button>
						<Button variant="warning" onClick={fillTest}>
							dev
						</Button>
					</Stack>
				</Form>
			</Stack>

			<Modal show={submitModal} onHide={closeSubmitMsg}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeSubmitMsg}>
						close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
