import './App.css';
import { Menu } from '@/components/navbar/menu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Second from './components/second';
import Third from './components/third';
        

function App() {
	return (
		<>
			<PrimeReactProvider>
				<Menu />
				<Second/>
				<Third/>
			</PrimeReactProvider>
		</>
	);
}

export default App;
