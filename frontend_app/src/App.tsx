import PluginsContainer from '@/containers/PluginsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PluginsContainer />}>
					<Route path="/:plugin_id" element={<PluginsContainer />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
