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
					<div className="col-2"></div>
					<div className="col-8"><Jumbotron /></div>
					<div className="col-2"></div>
				</div>
				<div class="row">
					<div className="col-2"></div>
					<div className="col-8">
						<div className="row">
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
						<div class="col-lg-3 col-md-6 col-sm-11 my-5"><Card /></div>
						</div>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
			<MyFooter />
		</div>
	);
};

export default Home;
