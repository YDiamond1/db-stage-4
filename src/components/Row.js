export function MRow(props){
    const values=[];

    return (
        <tr>
            {
                Object.values(props.values).map(value => <td>{value}</td>)
            }
        </tr>
    );
}
