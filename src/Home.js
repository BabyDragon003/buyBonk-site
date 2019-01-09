// import Navbar from './components/Navbar';
import ContentBody from './components/ContentBody';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
    return (
        <div className="App">
            <ContentBody />
            <ToastContainer pauseOnFocusLoss={true} position="top-right" autoClose={3000} toastClassName={'toast-theme text-white'}/>
        </div>
    );
}

export default Home;
