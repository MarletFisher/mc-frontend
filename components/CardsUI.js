import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardInterface from "./CardInterface";

export default function CardsUI(props) {
	return (
		<>
			<Container>
				<Row>
					{props.cards.map((card) => (
						<Col md={5} lg={4} xl={3} className="mb-4">
							<CardInterface card={card} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
}
