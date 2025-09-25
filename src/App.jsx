import './App.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { DefaultLayout } from '@/layouts/default-layout';

import { Hero } from './components/sections/Hero';
import Service from './components/sections/Service';
import Offre from './components/sections/Offre';
import Localisation from './components/sections/Localisation';
import Decouverte from './components/sections/Decouverte';
import Article from './components/sections/Article';
import Reservation from './components/sections/Reservation';
import { Footer } from './components/footer/footer';

function App() {
	return (
		<DefaultLayout>
			<PrimeReactProvider>
				<Hero />
				<Offre />
				<Service />
				<Localisation />
				<Decouverte />
				<Article />
				<Reservation />
			</PrimeReactProvider>
		</DefaultLayout>
	);
}

export default App;
