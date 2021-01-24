import {MRow} from "./Row";
import React from 'react';
import {Table} from "react-bootstrap";

export function RTable({values, ...props}){
    return (
        <div className="height-of-table table-responsive" >
        <Table striped bordered hover >

            <thead>
            <tr>
            {
                Object.keys(values[0]).map(value => <th>{value}</th>)
            }
            </tr>
            </thead>

            <tbody >
            {
                values.map(value=><MRow values={value}/>)
            }
            </tbody>

        </Table>
        </div>
    );
    //return ("Hello");
}
