import React from 'react';
import { useTitle } from 'src/hooks/useTitle';

// picture
import championBroken from 'src/assets/images/picturesYoutube/ChampionBroken.jpg';
import lowEloProblem from 'src/assets/images/picturesYoutube/PROBLEMEBASELO.jpg';
import trueOneShot from 'src/assets/images/picturesYoutube/VraiOneShot.jpg';
import tierlist from 'src/assets/images/home/tierlist.jpg';
import logoLol from 'src/assets/images/logoLol.png';
import logoSlipix from 'src/assets/images/SlipixLogo.png';

// import
import SocialNetwork from 'src/frontend/components/SocialNetwork';
import Publicity from './Publicity';
import './home.scss';

const Home = () => {
  useTitle();
  return (
    <div className="home">
      <div className="home__introduction">
        <img className="home__introduction__logo" src={logoLol} alt="" />
        <h1>Bienvenue sur mon site League of Legends</h1>
        <img className="home__introduction__logo" src={logoSlipix} alt="Slipix" />
      </div>
      <div className="home__introduction__content">
        <p><strong className="home__introduction__content__important">Progresser </strong>et <strong className="home__introduction__content__important">apprendre</strong> peu importe votre niveau, dans la bonne ambiance c'est ici !</p><br />
        <p className="home__introduction__content__italic">"La persévérance, c'est ce qui rend l'impossible possible, le possible probable et le probable réalisé." <span className="home__introduction__content__important">-Moine de IONIA</span></p>
      </div>
      <div className="home__content">
        <h2>Découvrez les 4 vidéos tendances</h2>
      </div>
      <div className="home__news">
        <a href="https://www.youtube.com/watch?v=J_WiOifXAv4" target="_blanc"><img src={championBroken} alt="3 champion broken" /></a>
        <a href="https://www.youtube.com/watch?v=Krg3QdeQqX4&t=34s" target="_blanc"><img src={lowEloProblem} alt="problème bas élo" /></a>
        <a href="https://www.youtube.com/watch?v=bMXWro5I1bM&t=18s" target="_blanc"><img src={trueOneShot} alt="le vrai one shot" /></a>
        <a href="https://www.youtube.com/watch?v=YFYA-_KQ6BU&t=" target="_blanc"><img src={tierlist} alt="tierlist" /></a>
      </div>
      <h2>Mes réseaux sociaux et plateformes</h2>
      <SocialNetwork />
      <Publicity />
    </div>
  );
};

export default Home;
