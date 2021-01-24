import {Button, Modal} from "react-bootstrap";

export function Alert(props){
    return (
        <Modal show={props.show.isShow} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.show.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.show.text}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
