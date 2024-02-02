import React from "react";

function Card() {
    return (
        <div className="container">
            <div className="row" >
                <div className="card p-0">
                    <img className="card-img-top" src="https://images.pexels.com/photos/8430359/pexels-photo-8430359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card image cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;