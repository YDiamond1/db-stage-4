import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {requests} from "../requests";

export function Header(props){
    return(
        <Navbar fixed={"top"} bg="light" className={"mb-4"} expand="lg">
            <Navbar.Brand>Lobster</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Main</Nav.Link>
                    <Nav.Link href="/login">Add a person</Nav.Link>
                    <Nav.Link href="/suitability">Suitability</Nav.Link>
                    <Nav.Link href="#link" disabled>Security</Nav.Link>
                </Nav>
                <Button variant="dark" onClick={(event =>{
                    requests.get("/api/lodger/update_day")
                        .then(resp =>
                            window.location.reload(false)
                        )
                })}>Update a day</Button>
            </Navbar.Collapse>
        </Navbar>

    );
}
