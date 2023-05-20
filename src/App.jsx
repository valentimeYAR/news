import Header from "./Components/Header/Header.jsx";
import Emergency from "./Components/Emergency/Emergency.jsx";
import Main from "./Components/Main/Main.jsx";
import s from './app.module.scss'
import LeftBlock from "./Components/LeftBlock/LeftBlock.jsx";
import MainBlock from "./Components/MainBlock/MainBlock.jsx";
import RightBlock from "./Components/RightBlock/RightBlock.jsx";

function App() {

    return (
        <div>
            <Header/>
            <Emergency/>
            <Main/>
            <div className={s.content}>
                <LeftBlock/>
                <MainBlock/>
                <RightBlock/>
            </div>
        </div>
    )
}

export default App
