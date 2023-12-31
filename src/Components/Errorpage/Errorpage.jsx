import { useRouteError } from "react-router-dom";
import "./Errorpage.css";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div id="error-page">
            <div id="error-container">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
    
};

export default Errorpage;