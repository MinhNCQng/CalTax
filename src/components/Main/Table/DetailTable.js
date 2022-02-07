const DetailTable = props =>{
    const styleColumn = props.style;
    const children = props.children;
    return (
        <div>
            <table style={{ width: "460px", borderCollapse: "collapse", fontSize:"12px" }}>
                <colgroup>
                    {styleColumn.map((colWidth, index) => {
                        return <col key={index} span="1" style={{ width: `${colWidth}%` }} />
                    })}
                </colgroup>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}
export default DetailTable;