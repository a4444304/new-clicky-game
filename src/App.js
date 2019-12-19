import React, { Component } from "react";
import VegCard from "./components/VegCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import veg from "./vegetable.json";
import Title from "./components/Title";

class App extends Component {
  // this will set this.state.veg to the vegetable json array
  state = {
    veg,
    topscore: 0,
    currentscore: 0,
    chosenVegetable: []
  };

  pickVegetable = id => {
    var shuffleVegetable = this.state.veg;
    if (this.state.chosenVegetable.includes(id) && this.state.currentscore> this.state.topscore) {
      this.setState({
         currentscore: 0,
         chosenVegetable: [],
         topscore: this.state.currentscore  
      });
    } else {
      shuffleVegetable.forEach(() => {
        this.setState({
        veg: shuffleVegetable.sort(() => Math.random() -0.5),
        currentscore: this.state.currentscore + 1,
        chosenVegetable: this.state.chosenVegetable.concat([id]) 
        })
      })
    };
    if (this.state.currentscore === 11) {
        this.setState({
          currentscore: 0,
          chosenVegetable: [],
          topscore: 12
        });
    };
  };

  // this will map over (this.state.veg) and render 
  // a VegCard component for each vegetable object
  render() {
    return (
      <Wrapper>
      <Nav
      topscore={this.state.topscore}
      currentscore={this.state.currentscore}
      />
      <Title>
        {this.state.veg.map(veggie => (
          <VegCard
          pickVegetable={this.pickVegetable}
          id={veggie.id}
          key={veggie.id}
          name={veggie.name}
          image={veggie.image}  
          />
        ))}
      </Title>
      </Wrapper>
    );
  }
}
    
export default App;
