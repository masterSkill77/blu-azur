import './App.css';
import { Menu } from '@/components/navbar/menu';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import Fifth from './components/fifth';
import Sixth from './components/sixth';
import Seventh from './components/navbar/seventh';
import { DefaultLayout } from '@/layouts/default-layout';

function App() {
	return (
		<DefaultLayout>
			<PrimeReactProvider>
				<Menu />
				<Second />
				<Third />
				<Fourth />
				<Fifth />
				<Sixth />
				<Seventh />
			</PrimeReactProvider>
		</DefaultLayout>
	);
}

export default App;
