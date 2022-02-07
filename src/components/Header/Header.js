import headerStyle from './Header.module.css'
import HeaderInfo from './HeaderInfo';
// import HeaderLanguage from './HeaderLanguage';
const Header = props =>{
    return (
        <div className={headerStyle["header-container"]}>
            <div className={headerStyle["header-wrapper"]}>
                        <HeaderInfo/>
                        {/* <HeaderLanguage/>  */}
            </div>
        </div>
        
    )
}

export default Header;