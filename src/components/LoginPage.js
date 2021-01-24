import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from "react-router";
import {useState} from "react";
import {requests} from "../requests";

export function LoginPage(props){
    const inputs = ["Name", "Age", "Main feature", "Chosen Animal"];
    const [person, setPerson] = useState({name:"", age:"", main_feature:"", chosen_animal:"", sex:""});
    const history = useHistory();

    const handler = nameOfInput => event => {
        setPerson((state, props)=>{
            state[nameOfInput.toLowerCase().replaceAll(" ","_")] = event.target.value;
            return({...state});
        });
    }

    const redirect = (ev) => {
        ev.preventDefault();
        //history.push("/");
        console.log(person);
        requests.post(props.toUrl, person)
            .then(
            resp => props.handlerShow("Added a lodger","Alert")
        )
            .catch(
                err => {
                    props.handlerShow("This lodger existed", "error");
                    console.log(err);
                }
            )
    };
    return (
        <div className="auth-page">
            <Container className="full-height align-items-center mb-1">
                <Row className="justify-content-center ">
                    <Col lg={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title><h1 className="text-center">Create a person</h1></Card.Title>
                                <Card.Text>
                                    <Form onSubmit={redirect}>
                                        {
                                            inputs.map(nameOfInput=>(
                                                <Form.Group as={Col} controlId={nameOfInput.toLowerCase().replaceAll(" ","_")}>
                                                    <Form.Label>{nameOfInput}</Form.Label>
                                                    <input
                                                        className="form-control form-control-lg"
                                                        type="text"
                                                        value={person[nameOfInput]}
                                                        onChange={handler(nameOfInput)} />
                                                </Form.Group>
                                            )
                                            )
                                        }
                                        <Form.Group as={Col} controlId="radio">
                                            <div id="sex">
                                                <Form.Check onChange={handler("sex")} name="sex" inline label="Male" type="radio" id="male" value="male"/>
                                                <Form.Check onChange={handler("sex")} inline name="sex" label="Female" type="radio" id="female" value="female"/>
                                            </div>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="Button">
                                            <Button variant="dark" type="submit" >
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
