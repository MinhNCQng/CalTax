import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import { Layout } from "antd";

import 'antd/dist/antd.css';



const App = ()=>{
    return (
        
            <Layout>
                <Header/>
                <Main/>
            </Layout>
            
    )
}

export default App;