import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";

export function Header(props){
    return(
        <Navbar bg="light" className={"mb-4"} expand="lg">
            <Navbar.Brand>Lobster</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Main</Nav.Link>
                    <Nav.Link href="/login">Add a person</Nav.Link>
                    <Nav.Link href="#home">Suitability</Nav.Link>
                    <Nav.Link href="#link">Security</Nav.Link>
                </Nav>
                <Button variant="dark">Update a day</Button>
            </Navbar.Collapse>
        </Navbar>

    );
}
