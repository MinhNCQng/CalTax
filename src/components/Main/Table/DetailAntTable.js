function DetailAntTable({ columns, dataSource, showTableHeader }) {
  const columnDataIndexs = columns.map((column) => column.dataIndex);
  const boldColor = "#EDEDED"
  const rowStyle = {
                    backgroundColor: boldColor, 
                    textAlign:"right",
                    padding:"6px",
                    border:"1px solid #CCCCCC"
                    }
  return (
    <div>
      <table style={{ width: "460px", borderCollapse: "collapse", fontSize:"12px" }}>
        {showTableHeader && (
          <thead>
            <tr>
              {columns.map((column) => {
                return <th key={column.key} style={rowStyle}>{column.title}</th>;
              })}
            </tr>
          </thead>
        )}
        <tbody align="right">
          {dataSource.map((dataElement) => (
            <tr key={dataElement.key}>
              {columnDataIndexs.map((element, index) => {
                  
                return (
                  dataElement[element] && (
                    <td key={index} style={ {...rowStyle,  backgroundColor: dataElement.rowBold ? boldColor:"" }  } >{dataElement[element]}</td>
                  )
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetailAntTable;
