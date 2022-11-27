import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="bg">
				<Header />
			</div>
		</div>
	);
}

export default App;