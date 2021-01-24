import {RTable} from "./Table";
import {Col} from "react-bootstrap";
import {requests_w, requests} from "../requests";
import {useEffect, useState} from "react";

export function RequestTable(props) {
    const [information, setInformation] = useState({data: null});
    useEffect(()=>{
        requests_w.get(props.fromUrl)
            .then(resp=>setInformation({data:resp.data}))
    },[information]);

    if(information.data)  return (
        <div id={props.pname}>
            <p className="h2">{props.pname}</p>
            <RTable values={information.data}/>
        </div>
    );
    else {
        console.log(information.data);
        return (<div><p className={"h3"}>Loading data...</p></div>);
    }

}
