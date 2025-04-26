import styles from "@/styles/Card.module.css";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function CardInterface(props) {
	const card = props.card;
	console.log(card);

	// can add loading placeholders later
	// adjust text to match

	return (
		<>
			<Container
				className={`${styles.cardFoundation} ${styles.cardBorder} ${styles.roundedBorder}`}
			>
				<Row>
					<Col
						className={`m-2 mx-2 ${styles.cardTitle} ${styles.cardBg} ${styles.roundedBorder}`}
					>
						{card?.name}
					</Col>
				</Row>
				<Row>
					<Col
						xs="auto"
						className={`ms-2 mx-2  ${styles.cardBg} ${styles.roundedBorder}`}
					>
						{card?.type}
					</Col>
				</Row>
				<Row>
					<Col md={5} className="ratio ratio-1x1 mt-2">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
							fluid
							rounded
							thumbnail
						/>
					</Col>
				</Row>
				<Row>
					<Col
						className={`auto m-2 ${styles.cardBg} ${styles.abilityBox} ${styles.roundedBorder}`}
					>
						{card?.ability}
					</Col>
				</Row>
			</Container>
		</>
	);
}
