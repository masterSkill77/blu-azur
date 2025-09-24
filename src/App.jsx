import './App.css';
import { Menu } from '@/components/navbar/menu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
        

function App() {
	return (
		<>
			<PrimeReactProvider>
				<Menu />
				<Second/>
				<Third/>
				<Fourth/>
			</PrimeReactProvider>
		</>
	);
}

export default App;
