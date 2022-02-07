const DetailTableRow = props =>{
    const element = props.value
    const isBold = props.bold;
    const boldColor = "#EDEDED"
    return (<tr>
        {element.map((element,index)=>
            <td key={index} style={
                {
                    backgroundColor:isBold ? boldColor:"", 
                    textAlign:"right",
                    padding:"6px",
                    border:"1px solid #CCCCCC"
                }
            }>{element}</td>
        )}
    </tr>)
}
export default DetailTableRow