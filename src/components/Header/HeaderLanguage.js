import LanguageItem from "./LanguageItem";
import VietNamFlag from "../../assets/languages/vietnam_flag.png"
import EUFlag from "../../assets/languages/united_kingdom_flag.png"
const HeaderLanguage = props =>{
    
    return (
        <div className="language-icon-container">
            <LanguageItem imgObj={VietNamFlag}/>
            <LanguageItem imgObj={EUFlag}/>
        </div>
    )
}

export default HeaderLanguage;