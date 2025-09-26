	//import {useState} from "react"
	//import './App.css'
	//import Button from '@mui/material/Button';
	//import SearchBox from "./SearchBox.jsx"
	//import InfoBox from "./InfoBox.jsx"
	import WeatherApp from  "./WeatherApp.jsx"


	function App() {
		/*
		let [text , SetText] = useState(0)
		
		let handleClick=()=>{
			console.log("button was clicked")
			SetText((prev)=> (prev + 1))
		}
		function and state variable that controls the clicking of 
		the button.
		*/



	  return (
		<>
		{/* Button designs in MUI that you can use it your project.
		  //<h1>MaterialUIDmeo</h1>
		  //<Button variant = "contained" onClick={handleClick} color="success">Click me</Button>
		  //<Button variant = "contained" onClick={handleClick}>Click me</Button>
		  //<h2>{text}</h2>
		*/}
		  <WeatherApp/>
		 
		</>
	  )
	}

	export default App
