import ExplainProvider from "./components/ExplainContext.js/ExplainProvider";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = ()=>{
    return (
        <ExplainProvider>
            <Header/>
            <Main/>
        </ExplainProvider>
    )
}

export default App;