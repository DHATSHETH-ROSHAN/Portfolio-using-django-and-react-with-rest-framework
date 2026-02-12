import "./css/Loader.css";

function Loader()  {
    return (
        <div className="loader-wrapper">
            <div className="neon-loader">
                <span className="orbit orbit1"></span>
                <span className="orbit orbit2"></span>
                <span className="orbit orbit3"></span>
                {/* <p className=" loader-text">Loading Portfolio...</p> */}
            </div>
        </div>
    );
}

export default Loader;