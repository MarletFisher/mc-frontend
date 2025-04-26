import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardInterface from "./CardInterface";

export default function CardDetail(props) {
	console.log(props.cardID);

	return (
		<>
			<Container>
				<Row>
					<Col></Col>
					<Col xs={5}>
						<CardInterface card={data} />
					</Col>
				</Row>
			</Container>
		</>
	);
}
