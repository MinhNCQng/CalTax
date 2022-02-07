const DetailFieldValue = [
    {
        value:[
            <b>Lương GROSS</b>,
            "12,300,000",
        ],
        boldRow:true,
        key:"grossSalary"
    },
    {
        value:[
            <b>Bảo hiểm xã hội (8%)</b>,
            "- 984,000",
        ],
        boldRow:false,
        key:"socialInsurance"
    },
    {
        value:[
            <b>Bảo hiểm thất nghiệp (4% - lương tối thiểu vùng)</b>,
            "- 492,000",
        ],
        boldRow:false,
        key:"unemploymentInsurance"
    },
    {
        value:[
            <b>Thu nhập trước thuế	</b>,
            "10,639,500",
        ],
        boldRow:true,
        
    },
    {
        value:[
            <b>Giảm trừ gia cảnh bản thân</b>,
            "- 11,000,000",
        ],
        boldRow:false,
    },
    {
        value:[
            <b>Giảm trừ gia cảnh người phụ thuộc</b>,
            "- 8,800,000",
        ],
        boldRow:false,
    },
    {
        value:[
            <b>Thu nhập chịu thuế</b>,
            "0",
        ],
        boldRow:true,
    },
    {
        value:[
            <b>Thuế thu nhập cá nhân (*)</b>,
            "0",
        ],
        boldRow:false,
    },
    {
        value:[
            <>
                <b>Lương NET</b>
                <br/>
                (Thu nhập trước thuế - Thuế thu nhập cá nhân)
            </>,
            "0",
        ],
        boldRow:true,
    },
]

export default DetailFieldValue;