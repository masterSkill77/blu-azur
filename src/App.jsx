import './App.css';
import { Menu } from '@/components/navbar/menu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

function App() {
	return (
		<>
			<PrimeReactProvider>
				<Menu />
				<div>Hero</div>
			</PrimeReactProvider>
			
		</>
	);
}

export default App;
