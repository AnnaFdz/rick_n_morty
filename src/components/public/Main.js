import React, { Component } from "react";
import Cards from "./Cards";
import "./Main.css";
import RickAndMortyService from "../../services/RickAndMorty.service";
import imgRNM from "../../img/pngwing.com (3).png";
import Navbar from "./Navbar";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {personajes: [], buscar:""};

  }
componentDidMount(){
    // RickAndMortyService.getAllCharacters()
    // .then((data)=> this.setState({personajes : data.results}))
    // .catch((error) => console.log(error));

}

  render() {
    const {buscar} = this.state;
    return (
      <main>
        <Navbar setBuscar={(value) => this.setState({ buscar: value })}/>
        <section className="py-5 text-center container">
          <div >
            <div className="col-lg-6 col-md-8 mx-auto ">
              <img className="imagen" src={imgRNM}></img>
              <h1 className="fw-light color-r"> All Characters</h1>
              {/* <p className="lead text-body-secondary">
               
              </p> */}
              
            </div>
          </div>
        </section>

        {/* <Cards personajes={this.state.personajes}/> */}
        <Cards buscar={buscar}/>
      </main>
    );
  }
}

export default Main;
