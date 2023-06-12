import { Routes, Route } from 'react-router';
import './App.css';
import { OpenseaPreview } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path="/music/:dataKey" element={<OpenseaPreview />}></Route>
			</Routes>
		</>
	);
}

export default App;
