import React from 'react'

function Sixth() {
    return (
        <div className="flex flex-col gap-[10px] px-[5rem] py-[3rem] border border-solid">
            <div className="flex gap-[10px] justify-between ">
                <div className="flex-1 flex flex-col justify-end rounded-xl bg-[url('assets/images/1.png')] bg-cover bg-center text-white p-4 h-[300px]">
                    <h1>Un patrimoine culturel</h1>
                    <p>De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.</p>
                    <p>À voir: Le Festival de Cannes, Carnaval de Nice, Fête du Citron</p>
                </div>
                <div className=" rounded-xl flex-1 flex flex-col justify-end bg-[url('assets/images/2.png')] bg-cover bg-center text-white p-4 h-[300px]">
                    <h1>Le sport au rythme de la Méditerranée</h1>
                    <p>Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.  
À voir : Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez</p>
                    <p>paragraphe2</p>
                </div>
            </div>

            <div className="flex  gap-[10px] justify-between">
                <div className="flex-1 flex flex-col justify-end  rounded-xl bg-[url('assets/images/3.png')] bg-cover bg-center text-white p-4 h-[300px]">
                    <h1>Une destination gourmande et authentique</h1>
                    <p>Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.</p>
                    <p>paragraphe2</p>
                </div>
                <div className="flex-1 flex flex-col justify-end  rounded-xl bg-[url('assets/images/4.png')] bg-cover bg-center text-white p-4 h-[300px]">
                    <h1>Des expériences inoubliables en famille</h1>
                    <p>Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.</p>
                    <p>paragraphe2</p>
                </div>
                <div className="flex-1 flex flex-col justify-end  rounded-xl bg-[url('assets/images/5.png')] bg-cover bg-center text-white p-4 h-[300px]">
                    <h1>L’évasion en pleine nature</h1>
                    <p>Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.</p>
                    <p>À Voir: Grand Canyon du Verdon</p>
                </div>
            </div>
        </div>
    )
}

export default Sixth
