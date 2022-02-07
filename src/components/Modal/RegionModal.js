import { useEffect, useRef } from "react";
import "./RegionModal.css"
const RegionModal = props =>{

    const headerRef = useRef()
    const modalRef = useRef()

    const handleOnDrag = ({movementX:moveX,movementY:moveY})=>{
    
        let getStyle = window.getComputedStyle(modalRef.current)
        let left = parseInt(getStyle.left)
        let top = parseInt(getStyle.top)
        modalRef.current.style.left = `${left+ moveX}px`
        modalRef.current.style.top = `${top+ moveY}px`

    }
    useEffect(()=>{
        headerRef.current.addEventListener("mousedown",()=>{
            document.addEventListener("mousemove",handleOnDrag)
        })
        document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",handleOnDrag)})
    },[])
    return (
        <>
        <div className="backdrop">
            
        </div>
        <div ref={modalRef} className="region-modal">
            <div ref={headerRef} className="region-modal-header">
                <div className="modal-title" unselectable="on" onMouseDown="return false">
                    Mức lương tối thiểu vùng 2017
                </div>
                <button className="modal-close-button" onClick={props.handleOnCloseButtonClicked}>
                    &times;
                </button>
            </div>
            <div className="modal-body">
                <div className="modal-body-content">
                    <ul className="modal-body-content">
                        <li><b>Vùng I:</b> 4.420.000 đồng/tháng</li>
                        <li><b>Vùng II:</b> 3.920.000 đồng/tháng</li>
                        <li><b>Vùng III:</b> 3.430.000 đồng/tháng</li>
                        <li><b>Vùng IV:</b> 3.070.000 đồng/tháng</li>
                        <br/>
                        <br/>
                        <li><b>Vùng 1:</b> Hà Nội, Quảng Ninh, Đà Nẵng, Tp.HCM, Bình Dương, Đồng Nai, Vũng Tàu.</li>
                        <li><b>Vùng 2:</b> Hải Phòng, Vĩnh Phúc, Thái Nguyên, Khánh Hoà, Bình Phước, Tây Ninh, Long An, An Giang, Cần Thơ, Cà Mau.</li>
                        <li><b>Vùng 3:</b> Hà Tây, Bắc Ninh, Hải Dương, Hưng Yên, Huế, Bình Định, Gia Lai, Đắc Lắc, Lâm Đồng, Ninh Thuận, Bình Thuận, ĐồngTháp, Tiền Giang, Vĩnh Long, Bến Tre, Kiên Giang, Hậu Giang, Sóc Trăng, Bạc Liêu.</li>
                        <li><b>Vùng 4:</b> là các tỉnh còn lại</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default RegionModal;