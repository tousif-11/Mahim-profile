import ach1 from "../images/ach1.jpeg";
import ach2 from "../images/ach2.jpeg";
import ach3 from "../images/ach3.jpeg";
import ach4 from "../images/ach4.jpeg";

const Achievement = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 ">
            <div>
                <img src={ach1} alt="Achievement 1" />
            </div>
            <div>
                <img src={ach2} alt="Achievement 2" />
                
            </div>
            <div>
                <img src={ach3} alt="Achievement 3" />

            </div>
            <div>
                <img src={ach4} alt="Achievement 4" />
            </div>
        </div>
    );
};

export default Achievement;