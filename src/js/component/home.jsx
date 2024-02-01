import React from "react";
import Navbar from "./navbar";
import { MyFooter } from "./footer";
import { Jumbotron } from "./jumbotron";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div class="container">
				<div className="row">
				<Jumbotron />
				</div>
				<div class="row p-5 ">
					<div class="col-lg-2 col-md-5 col-sm-11 m-2"><Card/></div>
					<div class="col-lg-2 col-md-5 col-sm-11 m-2"><Card/></div>
					<div class="col-lg-2 col-md-5 col-sm-11 m-2"><Card/></div>
					<div class="col-lg-2 col-md-5 col-sm-11 m-2"><Card/></div>
				</div>
			</div>
			<MyFooter />
		</div>
	);
};

export default Home;
