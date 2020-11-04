/** @format */

import "./App.css";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Navigation from "./component/NavigationBar";
import { useState } from "react";

function App() {
	const [state, setState] = useState(0);

	return (
		<div className='app'>
      <Navigation
        onToggleHome={() => setState(0)}
				onToggleCart={() => setState(1)}
				onToggleLogin={() => setState(2)}
			/>
			{state === 1 && <Cart />}
			{state === 2 && <Contact />}
		
		</div>
	);
}

export default App;