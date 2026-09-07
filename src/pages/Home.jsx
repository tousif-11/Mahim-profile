import home_photo from "../images/home_photo.jpeg";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex  items-center  border border-black rounded-3xl h-77 justify-around gap-4">
                <img src={home_photo} alt="Home" className="w-40 rounded-2xl h-auto" />
             <p className="text-2xl font-bold">Abdullah Al Mahim</p>
            </div>
        </div>
    );
};

export default Home;