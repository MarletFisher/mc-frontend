import CardInterface from "@/components/CardInterface";
// import Error from "next/error";
import { useRouter } from "next/router";
import { Badge } from "react-bootstrap";
// import router from "next/router";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
// import useSWR from "swr";

export default function CardByID() {
	const router = useRouter();
	const { id } = router.query;
	const API_URL = `http://localhost:8080/cards/${id}`;
	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	// const { data, error, isLoading } = useSWR(id ? API_URL : null, fetcher);

	// if (isLoading) return `Loading...`;

	// if (error || data == null || data == {}) {
	// 	return <Error statusCode={404} />;
	// }

	const data = {
		name: "Knight Squad Commander",
		type: "Knight",
		atk_points: 2000,
		def_points: 1800,
		prize_points: 4,
		keywords: "condition,aura",
		ability: "Condition: Tribute 1 Knight, Aura: All Knights gain Movement 1",
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
	};

	const types = data.keywords.split(",");

	console.log(types);

	return (
		<>
			<Container>
				<Row>
					<Col>
						<Row>
							<Col>
								<h2>{data.name}</h2>
							</Col>
						</Row>
						<Row>
							<Col>
								<h3>
									<Badge bg="secondary">{data.type}</Badge>
								</h3>
							</Col>
						</Row>
						<Row>
							{types.map((type) => (
								<Col xs="auto">
									<h4>
										<Badge bg="secondary">{type}</Badge>
									</h4>
								</Col>
							))}
						</Row>
						<Row>
							<Col className="mt-4">
								<h5>{data.ability}</h5>
							</Col>
						</Row>
						<Row>
							<Col>
								<Stack gap={3} className="pt-4">
									<div>ATTACK: {data.atk_points}</div>
									<div>DEFENSE: {data.def_points}</div>
									<div>PRIZE: {data.prize_points}</div>
								</Stack>
							</Col>
							<Col>
								<Stack gap={3} className="pt-4">
									<div className="">LENGTH: {data.length}</div>
									<div className="">WIDTH: {data.width}</div>
									<div className="">HEIGHT: {data.height}</div>
								</Stack>
							</Col>
						</Row>
					</Col>
					<Col xs={5}>
						<CardInterface card={data} />
					</Col>
				</Row>
			</Container>
		</>
	);
}
