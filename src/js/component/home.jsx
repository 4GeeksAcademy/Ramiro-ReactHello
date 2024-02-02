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
					<div className="row p-2">
						<Jumbotron />
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
					</div>
			</div>
			<MyFooter />
		</div>
	);
};

export default Home;
