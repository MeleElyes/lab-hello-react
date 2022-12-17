// src/App.js
import './App.css';
import Hello from './Hello'
import Icone from './Icone'


const firstImg = {
  image : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
  title : "Declarative",
  descriptif : "React makes it painless to create interactive UIS"
}
const scdImg = {
  image : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
  title : "Components",
  descriptif : "Build encapsulated components that manage their state"
}
const thirdImg = {
  image : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
  title : "Single-way",
  descriptif : "A set of immutable values are passed to the component's"
}
const fourImg = {
  image : "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
  title : "JSX",
  descriptif : "Statically-typed designed to run on modern browsers"
}


function App() {
  return (
    <>
    <div className="App">
      <Hello/>
    </div>
    <div className="Img">
      <Icone {...firstImg}/>
      <Icone {...scdImg}/>
      <Icone {...thirdImg}/>
      <Icone {...fourImg}/>
    </div>
    </>
  );
}
export default App;