import React from 'react';
import { Link } from 'react-router-dom';
import Youtube from 'src/frontend/components/Youtube';
import { motion } from 'framer-motion';

import { useTitle } from 'src/hooks/useTitle';
import { animationOne, transition } from 'src/utils/animations';
import './progressLol.scss';

// images
import logoSlipix from 'src/assets/images/guides/progressLol/slipixLogo.png';
import quicklyProgress from 'src/assets/images/guides/progressLol/quicklyProgress.jpg';
import initiative from 'src/assets/images/guides/progressLol/initiative.jpg';
import trust from 'src/assets/images/guides/progressLol/trust.jpg';
import time from 'src/assets/images/guides/progressLol/time.jpg';
import sylasBroken from 'src/assets/images/guides/progressLol/sylasBroken.jpg';
import brandJungleWtf from 'src/assets/images/guides/progressLol/brandJungleWtf.jpg';
import zedForet from 'src/assets/images/guides/progressLol/zedForet.jpg';
import giveEverything from 'src/assets/images/guides/progressLol/giveEverything.jpg';
import trollPicture from 'src/assets/images/guides/progressLol/trollPicture.jpg';
import trollPotter from 'src/assets/images/guides/progressLol/trollPotter.jpg';


const progressLol = () => {
  useTitle('Progresser sur League of Legends');
  return (
    <motion.div
      className="progressLol"
      key="progressLol"
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <div className="breadcrumb">
        <Link className="breadcrumb__link" to="/">Accueil</Link> &gt;
        <Link className="breadcrumb__link" to="/guides"> guides</Link> &gt;
        progresser sur League of Legends
      </div>
      <h1 className="globalTitle-page">Progresser sur League of Legends</h1>
      <p className="paragraph">Salut la <span className="red">#TEAMSLIP</span> c'est COACH SLIPIX et on va parler de la progression dans LEAGUE OF LEGENDS</p>
      <img className="logo" src={logoSlipix} alt="" />
      <div className="backgroundParagraphe progressLol__intro">
        <p className="intro">Progresser sur League of Legends, L'objectif de beaucoup de joueurs !</p>
        <p className="paragraph">Progresser pour s'am??liorer et ainsi atteindre un <span className="green">objectif personnel</span>, ou
          bien rejoindre un ami dans un rank + ??lev?? ? Ou tout simplement progresser
          car on passe beaucoup de temps sur le jeu. Il y a plein de fa??ons
          diff??rentes de s'am??liorer et on va le voir ensemble en d??tails, et aussi
          avec l'aide de beaucoup de mes vid??os !
        </p>
        <p className="paragraph">J'ai remarqu?? avec l'experience de mes coachings que il y a une courbe de
          progression tr??s diff??rente selon les joueurs, bien evidemment il y a
          toujours des personnes "<span className="green">dou??es</span>" comme dans la musique mais surtout
          certaines personnes qui optimisent bien mieux cette <span className="green">courbe</span> !
        </p>
        <p className="paragraph">On va parler dans la globalit?? de comment progresser sur League of Legends
          alors attachez vos ceintures il y a du boulot !
        </p>
        <ul>
          <p className="paragraph">Voici les diff??rentes cat??gories qu'il faut maitriser pour progresser :</p>
          <li><i className="fas fa-book progressLol__icon__book" />L'optimisation du temps de jeu</li>
          <li><i className="fas fa-book progressLol__icon__book" />Cr??er votre champion Pool (vos champions jou??s)</li>
          <li><i className="fas fa-book progressLol__icon__book" />??tre positif, une grande force !</li>
          <li><i className="fas fa-book progressLol__icon__book" />Ma technique secr??te</li>
          <li><i className="fas fa-book progressLol__icon__book" />La connaissance</li>
        </ul>
        <div className="progressLol__intro__pictures">
          <img className="progressLol__intro__pictures__image" src={quicklyProgress} alt="" />
          <img className="progressLol__intro__pictures__image" src={initiative} alt="" />
          <img className="progressLol__intro__pictures__image" src={trust} alt="" />
        </div>
      </div>
      <div className="backgroundParagraphe progressLol__optimization">
        <h2><i className="fas fa-hourglass-half icons__hourglass" />L'optimisation du temps de jeu<i className="fas fa-hourglass-half icons__hourglass" /></h2>
        <p className="paragraph">Bien ??videmment on a pas tous les m??me emploi du temps et on ne peut pas
          tous passer le m??me nombre d'heures sur le jeu.
        </p>
        <p className="paragraph">Les adultes avec un travail r??gulier et une vie de famille auront moins
          de temps qu'un jeune ??tudiant sur League of Legends, mais ce n'est pas une
          excuse pour baisser les bras et se dire "<span className="green">oui mais je ne peux pas trop jouer donc je stuck</span>".
        </p>
        <p className="paragraph">NON et NON ! On peut tr??s bien garder une bonne progression, et on va
          parler de l'optimisation de votre temps.
        </p>
        <img className="progressLol__optimization__pictureTime" src={time} alt="" />
        <p className="paragraph">Si vous avez que 2 parties par jours (ce qui est d??j?? pas mal) vous devez
          absolument rester "<span className="green">logique</span>".
        </p>
        <p className="paragraph">C'est ?? dire que pour le peu de games que vous allez faire il va falloir
          rester IMPERATIVEMENT sur votre r??le et votre champion principal.
        </p>
        <p className="paragraph">Si vous commencez ?? jouez de tout et n'importe quoi tout en faisant peu de games dans la semaine votre niveau va totalement s'affaiblir.
        </p>
        <p className="paragraph">Alors si vous ne pouvez pas trop jouer, rester sur vos acquis et <span className="green">spammez vos champions pr??f??r??s</span> !
        </p>
        <p className="paragraph beforeYoutube">Voici un coaching tr??s int??ressant d'un abonn?? qui ne connait pas assez son champion, par manque d'optimisation de son temps de jeu et parce qu'il jouait <span className="green">trop de champions</span>.</p>
        <Youtube videoId="MSSYY_bY9KM" SameSite="Strict" />
        <p className="paragraph afterYoutube"><span className="red">Attention</span> on part du principe que vous voulez progresser, je ne vous oblige pas ?? jouer les m??me champions, si vous avez peu de temps et que vous voulez juste jouer tranquilou, allez en normale draft mais ne p??nalisez pas vos alli??s en class??es.</p>
      </div>
      <div className="backgroundParagraphe progressLol__championPool">
        <h2><i className="fas fa-users icons__users" />Cr??er  votre champion Pool<i className="fas fa-users icons__users" /></h2>
        <p className="paragraph">Il est tr??s important pour progresser rapidement dans league of legends
          d'avoir un <span className="green">champion pool</span> pas trop grand pour tr??s vite s'habituer aux m??chaniques.
        </p>
        <p className="paragraph">Un joueurs qui va jouer 25 champions a 99% de chance de stuck dans son elo
          et je ne rigole vraiment pas sur les stats.
        </p>
        <p className="paragraph">Tout le temps dans mes coachings je refais le champion pool de l'??l??ve car
          il est souvent beaucoup trop grand.
        </p>
        <p className="paragraph">Je conseille <span className="green">3 champions maximum</span> (3 dans votre r??le principal et 1
          champion en r??le secondaire).
        </p>
        <div className="progressLol__pictures">
          <img className="progressLol__pictures__image" src={sylasBroken} alt="" />
          <img className="progressLol__pictures__image" src={brandJungleWtf} alt="" />
          <img className="progressLol__pictures__image" src={zedForet} alt="" />
        </div>
        <p className="paragraph">Le probl??me quand vous jouez trop de champions c'est que vous ne serez
          jamais ?? l'aise avec vos champions.
        </p>
        <p className="paragraph">Il est pratiquement impossible de maitriser ?? la perfection 10 champions
          pour un joueur normal (c'est le niveau des joueurs pro). Par manque
          d'habitude vous allez vous concentrer sur vos sorts, vos combos, vous
          n'allez pas conna??tre vos d??g??ts
          par c??ur et donc votre cerveau va se concentrer UNIQUEMENT sur la
          <span className="green"> micro-gestion</span> (la gestion de votre champion) et va ignorer en grande partie
          la <span className="green">macro-game</span> (vision de jeu).
        </p>
        <p className="paragraph">Si vous ne savez pas quels champions ou r??les jouer n'h??sitez pas ??
          visiter mon guide "<span className="gold">TROUVER SON R??LE/CHAMPION</span>" :
        </p>
        <Link to="/guides/role-champion" className="link" target="_blanc">Cliquez ici</Link>
      </div>
      <div className="backgroundParagraphe progressLol__positive">
        <h2><i className="fas fa-plus icons__positive" />??tre positif, une grande force !<i className="fas fa-plus icons__positive" /></h2>
        <p className="paragraph">Vous allez vivre beaucoup de <span className="green">d??ceptions</span> dans League of Legends, c'est pour
          cela qu'il va falloir essayer de retenir le <span className="green">positif</span> pour avancer dans votre
          qu??te de progression !
        </p>
        <p className="paragraph">??tre n??gatif et de mauvaise foi, c'est retenir que le mauvais, oublier les
          games faciles et se trouver des excuses dans la d??faite.
        </p>
        <p className="paragraph">Il n'y a pas de place pour les <span className="green">pleurnicheuses</span> dans le haut elo de League
          of Legends, alors si vous partez du principe que vous ??tes bloqu??s dans
          votre elo/ranking ?? cause de vos alli??s, on est mal barr??s !
        </p>
        <img className="progressLol__positive__troll" src={trollPicture} alt="" />
        <p className="paragraph">Une d??faite avec un tr??s bon score ? Oui c'est dur ?? encaisser mais
          retenez le fait que vous avez r??ussi ?? ??tre tr??s bien dans la game et que
          forc??ment vous avez prit du plaisir ?? la jouer.
        </p>
        <p className="paragraph">Il faut accepter que <span className="green">pas toutes les games sont gagnables</span> et peu importe
          votre niveau de jeu.
        </p>
        <p className="paragraph">J'ai un exemple parfait. Faker (un des meilleurs joueurs du monde) avait
          fait 5 d??faites pour monter un nouveau compte jusqu'au platine , et oui
          m??me les + grands peuvent perdre des parties, ??a reste un jeu 5v5.
        </p>
        <img className="progressLol__positive__faker" src={giveEverything} alt="" />
        <p className="paragraph">Ce qu'il faut retenir c'est de TOUT donner ?? chaque game , <span className="green">on en apprend toujours et m??me dans la d??faite</span> !
        </p>
        <p className="paragraph">Pour ceux qui me suivent pendant mes
          lives vous le savez d??j??, m??me quand j'encha??ne des mauvaises parties je
          suis toujours la ?? jouer dans la bonne humeur et ??a n'affecte en rien mon
          gameplay.
        </p>
        <p className="paragraph">Si vous voulez + de conseils pour g??rer votre <span className="green">mental</span> & votre <span className="green">rage</span>,
          n'h??sitez pas ?? aller voir mon guide sur ce sujet :
        </p>
        <Link to="/guides/mental&rage" className="link" target="_blanc">Cliquez ici</Link>
      </div>
      <div className="backgroundParagraphe progressLol__secret">
        <h2><i className="fas fa-user-ninja icons__ninja" />Ma technique secr??te<i className="fas fa-user-ninja icons__ninja" /></h2>
        <p className="paragraph">Il n'y a pas de miracles dans League of Legends pour progresser, il faut
          jouer jouer et jouer, on ne peut pas atteindre un elo sans y mettre du sien.
        </p>
        <p className="paragraph">Par contre avec le temps j'ai remarqu?? que les ??l??ves qui jouaient "<span className="green">safe</span>"
          et qui ne tentaient pas de plays progressaient beaucoup moins vite que les ??l??ves <span className="green">agressifs</span>.
        </p>
        <p className="paragraph">Et vous allez voir que c'est logique avec les d??tails, c'est pour ??a que
          je vais vous expliquer ma technique secr??te dans cette vid??o :
        </p>
        <p className="intro">La technique Paire de Couilles. </p>
        <p className="paragraph beforeYoutube">(Oui d??sol?? pour le nom mais j'en suis fier)</p>
        <Youtube videoId="EDA82qt7AyY" SameSite="Strict" />
        <p className="paragraph afterYoutube">Vous l'avez donc compris, on tente les plays, on se sort les doigts, on connait ses <span className="green">limites</span> et le potentiel de son champion et donc on sait quand on peut go in ou reculer ! </p>
        <p className="paragraph">Jouer safe vous emp??che de conna??tre vos <span className="green">limites</span> et c'est le probl??me de
          BEAUCOUP de joueurs bloqu??s dans un elo.
        </p>
        <p className="paragraph">J'ai remarqu?? que certains ??l??ves n'osaient pas tenter les plays parce
          qu'ils avaient <span className="green">peur de se faire flame</span> par les alli??s en cas de fail.
        </p>
        <p className="paragraph">Si le jugement de vos alli??s vous fait peur il y a le bouton "MUTE".
          Faites moi confiance il n'y a aucun int??r??t ?? jouer safe dans
          l'apprentissage d'un champion ou d'un r??le.
        </p>
        <p className="paragraph betweenYoutube">
          Voici une vid??o ou je coach un abonn?? qui joue LUX et qui <span className="green">se laisse totalement dominer</span> par un RYZE ?? cause de son gameplay beaucoup trop safe,
          vous allez voir le probl??me directement li?? ?? ma technique.
        </p>
        <Youtube videoId="yX6EcSmjQRU" SameSite="Strict" />
        <p className="paragraph betweenYoutube">
          Une autre vid??o int??ressante ou je coach une abonn??e qui joue support et qui
          elle aussi se laisse dominer, ne tente pas de plays, ne poke pas bref
          <span className="green">??vitez ce genre de gameplay</span> si vous voulez progresser !
        </p>
        <Youtube videoId="-Y35aQrFt9g" SameSite="Strict" />
        <p className="paragraph betweenYoutube">Pour terminer ce th??me encore un coaching tr??s important d'un ??l??ve qui joue Ahri, il a r??ussi a avoir un <span className="green">tr??s bon score</span> mais il perd la partie par manque d'initiative.<br /><span className="green">Il laisse ses adversaires dominer la map</span> et les objectifs alors qu'il peut changer les choses avec ses ressources !</p>
        <Youtube videoId="djvQl7o_He0" SameSite="Strict" />
      </div>
      <div className="backgroundParagraphe progressLol__knowledge">
        <h2><i className="fas fa-book icons__book" />La connaissance<i className="fas fa-book icons__book" /></h2>
        <p className="paragraph">C'est bien beau d'avoir les <span className="green">mechaniques du champion</span>, d'??tre ?? l'aise dans
          son gameplay, d'avoir du temps pour jouer, d'??tre positif ?? 100% mais il
          manque quelque chose de vital mes petits : <span className="green">LA CONNAISSANCE & LE SAVOIR</span> !
        </p>
        <p className="paragraph">Premi??rement il est vital de conna??tre son champion par coeur ! Le stuff ??
          faire selon le patch, les sorts ?? augmenter en priorit??, la fa??on de jouer
          les teamfights, les bonnes Ma??trises, conna??tre les champion counter ou
          qu'on counter etc...
        </p>
        <p className="paragraph">Tout ??a se travail en jouant ?? fond le champion, oui je me r??p??te beaucoup
          mais encore une fois j'insiste n'h??sitez pas ?? spam un champion pr??cis
          quand vous voulez progresser rapidement dessus, ce n'est pas en le jouant <span className="green">1 partie par jour que vous allez vous am??liorer</span>.
        </p>
        <p className="paragraph beforeYoutube">Dans ce coaching je vais vous expliquer pourquoi c'est tr??s important de conna??tre le potentiel de votre champion ?? 100%</p>
        <Youtube videoId="90Fk-maGe8k" SameSite="Strict" />
        <p className="paragraph afterYoutube">Pour ce qui est du stuff et des runes ?? utiliser ainsi que les sorts ?? am??liorer en priorit?? selon les patchs je vous conseille d'utiliser <span className="green">PROBUILD</span>, car les meilleurs joueurs sont oblig??s d'optimiser pour pouvoir monter donc ??a sera ?? 95% le bon stuff ?? faire.</p>
        <a className="link" href="https://www.probuilds.net/" target="_blanc">ProBuild Cliquez ici</a>
        <p className="paragraph afterYoutube">Le stuff est-il si important que ??a dans League of Legends ? Bien evidemment que oui, acheter le mauvais stuff c'est mal investir les golds que l'on obtient dans la faille.</p>
        <p className="paragraph">League of Legends est un jeu gros jeu de snowball (<span className="green">effet boule de neige</span>)
          donc quand vous avez de l'avance et que vous n'achetez pas les bon objets vous
          n'arriverez pas ?? carry certaines games.
        </p>
        <p className="paragraph">Je vous conseille d'aller sur le client de League of legends et d'aller
          dans "<span className="green">collection</span>" pour voir et lire tous les objets du jeu, histoire de
          bien se familiariser et d'essayer par vous m??me d'imaginer un stuff pour
          votre personnage.
        </p>
        <p className="paragraph">Il est important de <span className="green">comprendre ce que l'on fait</span> et pas de copier b??tement un stuff d'une vid??o ou d'un guide.
        </p>
        <p className="paragraph betweenYoutube">Dans ce coaching d'un ??l??ve, on
          remarque que le stuff dans la game en g??n??ral est une catastrophe, mal
          optimis?? donc les joueurs perdent un <span className="green">gros potentiel de victoire</span> !
        </p>
        <Youtube videoId="V5ZCs62ujoI" SameSite="Strict" />
        <p className="paragraph betweenYoutube">Maintenant voici une vid??o qui regroupe un peu tout ce qu'on a dit, ??a devrait compl??ter le guide ??crit !</p>
        <Youtube videoId="AC1t5ESlfrM" SameSite="Strict" />
        <p className="paragraph betweenYoutube">Et pour terminer voici l'??pisode 1 de ma s??rie de gameplays "<span className="green">PROGRESSER SUR LEAGUE OF LEGENDS</span>" au programme environ 30 vid??os ou je joue plein de champions dans des r??les diff??rents et j'explique tout ce que je fais dans les games. Parfait pour <span className="green">bien apprendre</span> et reproduire ensuite dans vos parties !</p>
        <Youtube videoId="EsgqDFrnVt0" SameSite="Strict" />
      </div>
      <div className="backgroundParagraphe">
        <p className="paragraph">Pour r??sumer sur cette page qui parle de la progression dans League of Legends, optimisez votre temps de jeu, trouvez vos champions principaux, soyez positifs, tentez les plays pour conna??tre vos limites et renseignez-vous sur vos champions au maximum !<br /> <span className="gold">Le diamant est tout proche</span>, donnez tout pour l'obtenir...</p>
        <p className="paragraph">J'esp??re que ce guide vous aura aid??, ?? bient??t sur la faille la <span className="red">#TEAMSLIP</span></p>
        <img className="progressLol__pictures__trollPotter" src={trollPotter} alt="" />
        <p className="end">N'h??sitez pas ?? aller consulter les autres guides de Coach Slipix</p>
      </div>
    </motion.div>
  );
};

export default progressLol;
