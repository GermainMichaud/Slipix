// == Import npm
import React from 'react';
import classNames from 'classnames';
import { Route, useLocation } from 'react-router-dom';

// == Import
import Header from 'src/frontend/components/Header';
import Home from 'src/frontend/components/Home';
import Footer from 'src/frontend/components/Footer';
import Presentation from 'src/frontend/components/Presentation';
import News from 'src/frontend/components/News';

import Support from 'src/frontend/components/Support';
import Contact from 'src/frontend/components/Contact';

// Guides
import Guides from 'src/frontend/components/Guides';
import Guide from 'src/frontend/components/Guides/Guide';
import RoleChampion from 'src/frontend/components/Guides/RoleChampion';
import ProgressLol from 'src/frontend/components/Guides/ProgressLol';
import LowElo from 'src/frontend/components/Guides/LowElo';
import WinLane from 'src/frontend/components/Guides/WinLane';
import VisionGame from 'src/frontend/components/Guides/VisionGame';

// Tutoriels
import Tutoriels from 'src/frontend/components/Tutoriels';
import Champion from 'src/frontend/containers/Tutoriels/Champion';

// Trollpicks
import TrollPicks from 'src/frontend/components/TrollPicks';
import XinAutoroute from 'src/frontend/components/TrollPicks/XinAutoroute';

// Lanes
import Jungle from 'src/frontend/components/Tutoriels/Jungle';
import Midlane from 'src/frontend/components/Tutoriels/Midlane';
import Toplane from 'src/frontend/components/Tutoriels/Toplane';

// == Composant
const App = () => {
  const location = useLocation();
  // return the current pathname
  const currentPath = location.pathname;
  const isHome = currentPath === '/';
  const isPresentation = currentPath === '/presentation';
  const isNews = currentPath === '/nouveaute';
  const isTutoriel = currentPath === '/tutoriels-champions';
  const isJungle = currentPath === '/tutoriels-jungle';
  const isJungle1 = currentPath === '/tutoriels-champions/jungle/zac';
  const isJungle2 = currentPath === '/tutoriels-champions/jungle/olaf';
  const isJungle3 = currentPath === '/tutoriels-champions/jungle/ekko';
  const isJungle4 = currentPath === '/tutoriels-champions/jungle/lee-sin';
  const isJungle5 = currentPath === '/tutoriels-champions/jungle/gragas';
  const isSupportPage = currentPath === '/me-soutenir';
  const isContact = currentPath === '/me-contacter';
  const isGuides = currentPath === '/guides';
  const isGuide = currentPath === '/guides/mental&rage';
  const isRoleChampion = currentPath === '/guides/role-champion';
  const isProgressLol = currentPath === '/guides/progresser-sur-leagueOfLegends';
  const isLowElo = currentPath === '/guides/sortir-du-bas-elo';
  const isWinLane = currentPath === '/guides/gagner-sa-phase-de-lane';
  const isVisionGame = currentPath === '/guides/vision-du-jeu';
  const isTrollPicks = currentPath === '/trollpicks';
  const isXinAutoroute = currentPath === '/trollpicks/xinZhao-autoroute';

  const appClass = classNames('app', {
    'app--home': isHome,
    'app--presentation': isPresentation,
    'app--news': isNews,
    'app--tutoriels': isTutoriel,
    'app--jungle': isJungle || isJungle1 || isJungle2 || isJungle3 || isJungle4 || isJungle5,
    'app--supportPage': isSupportPage,
    'app--contact': isContact,
    'app--guides': isGuides,
    'app--guide': isGuide,
    'app--roleChampion': isRoleChampion,
    'app--progressLol': isProgressLol,
    'app--lowElo': isLowElo,
    'app--winLane': isWinLane || isVisionGame,
    'app--trollPicks': isTrollPicks || isXinAutoroute,
    // 'app--error': isError,
  });

  return (
    <div className="app">
      <div className={appClass}>
        <Header />
        <main>
          {/* {!appIsLoad && <Loader />} */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/presentation">
            <Presentation />
          </Route>
          <Route exact path="/nouveaute">
            <News />
          </Route>
          {/* <Partenaires />
          */}
          <Route exact path="/tutoriels-champions">
            <Tutoriels />
          </Route>
          <Route exact path="/tutoriels-jungle">
            <Jungle />
          </Route>
          <Route exact path="/tutoriels-champions/jungle/:name">
            <Champion />
          </Route>
          <Route exact path="/tutoriels-midlane">
            <Midlane />
          </Route>
          <Route exact path="/tutoriels-toplane">
            <Toplane />
          </Route>
          <Route exact path="/guides">
            <Guides />
          </Route>
          <Route exact path="/guides/mental&rage">
            <Guide />
          </Route>
          <Route exact path="/guides/role-champion">
            <RoleChampion />
          </Route>
          <Route exact path="/guides/progresser-sur-leagueOfLegends">
            <ProgressLol />
          </Route>
          <Route exact path="/guides/sortir-du-bas-elo">
            <LowElo />
          </Route>
          <Route exact path="/guides/gagner-sa-phase-de-lane">
            <WinLane />
          </Route>
          <Route exact path="/guides/vision-du-jeu">
            <VisionGame />
          </Route>
          <Route exact path="/trollpicks">
            <TrollPicks />
          </Route>
          <Route exact path="/trollpicks/xinZhao-autoroute">
            <XinAutoroute />
          </Route>
          <Route exact path="/me-soutenir">
            <Support />
          </Route>
          <Route exact path="/me-contacter">
            <Contact />
          </Route>
        </main>
        <Footer />
      </div>

    </div>
  );
};

// == Export
export default App;