import React, { Component } from "react";
// import "./Ali.css";
// class Ali extends Component {
//   state = {
//     name: "Ali",
//   };n
//   design = {
//     color: "purple",
//     fontSize: 40,
//   };
//   checkClass() {
//     let classs = this.state.name.length === 0 ? "warning" : "error";
//     return classs;
//   }
//   checkNote = () => {
//     let name = this.state.name;
//     return name.length === 0 ? "No Notes" : name;
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h1
//           style={{
//             fontSize: 40,
//             color: "red",
//           }}
//         >
//           {" "}
//           {this.state.name + "   "}Is Red
//         </h1>
//         <h2 className="blue">Blue</h2>
//         <h1 style={this.design}>Purple</h1>
//         <h1 className={this.checkClass()}>{this.checkNote()}</h1>
//       </React.Fragment>
//     );
//   }
// }
class Map extends Component {
  constructor(props) {
    super(props);
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        alert(error);
      }
    );
  }
  state = {
    people: [
      { name: "mamal", age: 22, city: "Tehran" },
      { name: "Sina", age: 20, city: "Shiraz" },
      { name: "Hasan", age: 25, city: "Yazd" },
      { name: "Mohsen", age: 30, city: "Esfahan" },
    ],
  };

  style = {
    fontSize: "30px",
    color: "black",
    margin: "20px auto",
    fontSize: "30px",
    border: "2px solid red",
    textAlign: "center",
    width: "60%",
  };
  render() {
    return (
      <React.Fragment>
        <div style={this.style}>
          <ul style={{ listStyle: "none" }}>
            <li>
              {this.state.people.map((x) => (
                <li>
                  {x.name}--- {x.city} ---{x.age}
                  <hr></hr>
                </li>
              ))}
            </li>
          </ul>
          <h2 style={this.container}>Latitude:&gt; {this.state.lat}</h2>
          <h2 style={this.container}>Longitude:&gt; {this.state.long}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;
// export const Myfunction = () => {
//   let myClass = {
//     fontSize: "30px",
//     color: "purple",
//   };
//   return (
//     <div style={myClass}>
//       <p>This a p tag in the function</p>
//       <h1>فاطول!</h1>
//     </div>
//   );
// };
// export const Propses = (props) => {
//   return (
//     <>
//       <h1>{props.text}</h1>
//       <h1>{props.textt}</h1>
//       <h1>{props.texttt}</h1>
//     </>
//   );
// };
