import React from "react";

function Car2(props) {
    return <li>I am a { props.brand }</li>;
  }
  //Named Export
  export function Garage() {
    const cars = ['Ford', 'BMW', 'Audi','Maruti','Honda'];
    return (
        <>
        <h1>Cars in my garage?</h1>
          <ul>
          {cars.map((car) => <Car2 brand={car} />)}
        </ul>
      </>
    );
  }