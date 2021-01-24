import {RTable} from "./Table";
import {Col, Container, Row} from "react-bootstrap";
import {RequestTable} from "./requestTable";

export function Home(props){
    const points = [{x:0,y:2}, {x:3,y:1},{x:3,y:1}];

    return (
    <Container className="full-height">
        <Row className={"my-4 align-items-center"}>
            <Col lg = {6}>
                <RequestTable fromUrl=" " pname="Schedulers"/>
            </Col>
            <Col lg={4}>
                <div>
                    <RequestTable fromUrl=" " pname="Dates"/>
                </div>
                <div>
                    <RequestTable fromUrl=" " pname="Deadline expires"/>
                </div>
            </Col>
        </Row>
    </Container>
    );
}
