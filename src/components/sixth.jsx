import React from 'react'
import { CircleChevronRight } from 'lucide-react'
function Sixth() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 px-8 py-12">
      
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-end rounded-xl bg-[url('assets/images/1.png')] bg-cover bg-center text-white p-4 h-[300px]">
        <h1 className="font-bold text-lg">Un patrimoine culturel</h1>
        <p>
          De Picasso à Cocteau, la Côte d’Azur a toujours été une terre
          d’inspiration pour les artistes. Musées, galeries et sites
          historiques jalonnent la région, offrant un voyage au cœur de l’art
          et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.
        </p>
        <p>À voir : <a href="" className='underline'>Le Festival de Cannes, Carnaval de Nice, Fête du Citron</a></p>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-end rounded-xl bg-[url('assets/images/2.png')] bg-cover bg-center text-white p-4 h-[300px]">
        <h1 className="font-bold text-lg">Le sport au rythme de la Méditerranée</h1>
        <p>
          Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant
          par le Marathon des Alpes-Maritimes, la région vibre au rythme des
          grands événements sportifs. Cyclisme sur la Route des Crêtes, golf
          sur des parcours prestigieux et voile lors des Régates de Saint-Tropez
          complètent ce décor idéal pour les amateurs de sport et d’adrénaline.
          <br />
          À voir : <a href="" className='underline'>  Grand prix de Monaco, Ironman France - Nice, Marathon des
           Alpes-Maritimes, Régates de Saint-Tropez</a>
        </p>
      </div>

      
      <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-end rounded-xl bg-[url('assets/images/3.png')] bg-cover bg-center text-white p-4 h-[300px]">
        <h1 className="font-bold text-lg">Une destination gourmande et authentique</h1>
        <p>
          Les marchés provençaux dévoilent des saveurs du terroir, entre
          fromages affinés, huile d’olive et spécialités méditerranéennes.
          Vignerons passionnés et restaurants raffinés offrent une expérience
          gastronomique où tradition et créativité se rencontrent dans un cadre
          enchanteur.
        </p>
        <button className="bg-[#4097FF] flex items-center gap-4 text-white border border-white py-3 px-6 rounded-full mt-10 font-bold">
                  <a href='' className="whitespace-nowrap">
                      Réservez dès maintenant votre séjour !
                  </a>
                  <CircleChevronRight />
        </button>

      </div>

      <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-end rounded-xl bg-[url('assets/images/4.png')] bg-cover bg-center text-white p-4 h-[300px]">
        <h1 className="font-bold text-lg">Des expériences inoubliables en famille</h1>
        <p>
          Entre villages pittoresques, marchés publics animés et escapades sur
          la route du littoral, Saint-Raphaël propose un cadre idéal pour partager
          des moments inoubliables. La diversité des activités en plein air fait
          de la région une destination prisée par les amateurs de découvertes et
          d’aventures en famille.
        </p>
      </div>

      <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-end rounded-xl bg-[url('assets/images/5.png')] bg-cover bg-center text-white p-4 h-[300px]">
        <h1 className="font-bold text-lg">L’évasion en pleine nature</h1>
        <p>
          Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer,
          offrant des panoramas spectaculaires. Randonnées, balades côtières et
          sentiers sauvages permettent de s’imprégner d’un environnement
          préservé, idéal pour une parenthèse hors du temps.
        </p>
        <p>À voir : Grand Canyon du Verdon</p>
        <button className="bg-[#4097FF] flex items-center gap-4 text-white border border-white py-3 px-6 rounded-full mt-10 font-bold">
          <a href='' className="whitespace-nowrap">
            Réservez dès maintenant votre séjour !
          </a>
          <CircleChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Sixth
