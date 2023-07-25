import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx"
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
		<div className="container">
			<Navbar />
			<div className="container divv">
				<Jumbotron />
			</div>
			<div className="row">
				<Card col-3 ml-25 />
				<Card col-3 />
				<Card col-3 />
				<Card col-3 />
			</div>	
			<Footer/>
		</div>
		</>
	);
};

export default Home;
