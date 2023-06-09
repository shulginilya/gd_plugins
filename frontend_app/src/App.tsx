import PluginsContainer from '@/containers/PluginsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PluginsContainer />} />
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
