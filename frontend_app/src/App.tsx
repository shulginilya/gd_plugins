import PluginsContainer from '@/containers/PluginsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PluginsContainer />}>
					<Route path="/:tab_id" element={<PluginsContainer />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</>
);

export default App;
