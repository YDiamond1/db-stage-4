import {Button, Col, Container, FormControl, InputGroup, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useState} from "react";
import {requests} from "../requests";
import {isNodeFlagSet} from "tsutils";

export function Suitability(props){

    const [lodger1, setLodger1] = useState(null);
    const [lodger2, setLodger2] = useState(null);
    const [lodgers1, setLodgers1] = useState([]);
    const [lodgers2, setLodgers2] = useState([]);
    const [suitability, setSuitability] = useState(null);


    console.log(lodger1,lodger2,lodgers1,lodgers2);
    const search1 = event =>{
        requests.get(`/api/search?search=${event.target.value}`)
            .then(resp =>{
                if(resp.data.count == 1){
                    setLodger1(resp.data.results[0]);
                }
                else if(resp.data.count >1){
                    setLodgers1(resp.data.results)
                }
            })
            .catch(error =>
                setLodger1("Not Found")
            )
    }
    const search2 = event =>{
        requests.get(`/api/search?search=${event.target.value}`)
            .then(resp =>{
                if(resp.data.count == 1){
                    setLodger2(resp.data.results[0]);
                }
                else if(resp.data.count >1){
                    setLodgers2(resp.data.results)
                }
            })
            .catch(error =>
                setLodger2("Not Found")
            )
    }

    function Total(props){
        if(suitability == null) return (<div id="button_of_couple"></div>);
        else if(suitability != "Not Found") {
            let message = "";
            let variant = "";
            if (Math.abs(suitability.mutual_interest) <= 10) {
                message = "Super couple"
                variant = "success"
            } else if (Math.abs(suitability.mutual_interest) <= 20){
                message = "Excelent couple"
                variant = "primary"
            }
            else if(Math.abs(suitability.mutual_interest) <= 50) {
                message = "Good couple"
                variant = "warning"
            }
            else {
                message = "Bad couple"
                variant = "danger"
            }
            return (
                <Button variant={variant} className="my-button circle-btn" block onClick={ev =>
                requests.get(`/api/couples/set?man_id=${lodger1.person_id}&woman_id=${lodger2.person_id}`)}>{message}</Button>
            );

        }
        else return (<p className="h2 text-center">Unable to create a pair</p> )
    }

    function List(lodger){
        if(lodger == "Not Found")
            return (<ListGroup>
                {
                   <ListGroupItem>{lodger}</ListGroupItem>
                }
            </ListGroup>)
        if(lodger != null){
            return (
                <ListGroup variant={"flush"} >
                {
                    Object.entries(lodger).map(([key, value]) => <ListGroupItem>{key + ": " + value}</ListGroupItem>)
                }
                </ListGroup>
            );
        }
    }

    return (
        <Container className="justify-content-center full-height align-items-center" >
        <Row className="halffull-height-row1 align-content-end">
           <Col lg={4}>
               <label htmlFor="search1" className={"h1"}>Search</label>
               <InputGroup className="mb-3">
                   <FormControl
                       id={"search1"}
                       placeholder="Name of lodger"
                       list="datalistOptions"
                       onChange={search1}
                   />
                   <datalist id="datalistOptions">
                       {
                           lodgers1.map(value => <option value={value.name}/>)
                       }
                   </datalist>
               </InputGroup>
           </Col>


           <Col lg={4} className={"justify"}>
            <Button variant={"dark"} disabled={!(lodger1!=null && lodger2!=null && lodger1!="Not Found" && lodger2!="Not Found")} block className={"my-button"}
                    onClick={ev =>
                requests.get(`/api/suitability/get/?man_id=${lodger1.person_id}&${lodger2.person_id}`)
                    .then(resp=>setSuitability(resp.data))
                    .catch(error => setSuitability("Not Found"))
                    } >
                See a chance
            </Button>
           </Col>


           <Col lg={4}>
               <label htmlFor="search2" className={"h1"}>Search</label>
               <InputGroup className="mb-3">
                   <FormControl
                       id={"search2"}
                       placeholder="Name of lodger"
                       list="datalistOptions2"
                       onChange={search2}
                   />
                   <datalist id="datalistOptions2">
                       {
                           lodgers2.map(value => <option value={value.name}/> )
                       }
                   </datalist>
               </InputGroup>
           </Col>
        </Row>



        <Row className={"justify-content-center halffull-height-row2 align-items-start"}>
            <Col lg={4}>
                {
                    List(lodger1)
                }
            </Col>
            <Col lg={4}>
                {
                    <Total/>
                }
            </Col>
            <Col lg={4}>
                {
                    List(lodger2)
                }
            </Col>
        </Row>
        </Container>
    );
}
