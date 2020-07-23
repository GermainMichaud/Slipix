import React from 'react';

import refuseResist from '../../../assets/images/refuseResist.png';
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <h1 className="globalTitle-page">Me Contacter</h1>
    <div className="contact__content">
      <p className="contact__content__title">Pour me contacter c'est simple il y a 2 options :</p>
      <p>-M'envoyer un Mail à cette adresse : <span className="gold">deiizfamilyhd@gmail.com</span>
        (Seulement pour les propositions professionnelles style partenariat, sponsor
        etc...)
      </p>
      <p>-M'envoyer directement un message privé sur Discord en rejoignant le serveur <span className="red">#TEAMSLIP</span></p>
      <h4>NOTES IMPORTANTES</h4>
      <p className="contact__content__refuseResist">Je ne prend plus de réservations pour du coaching car je veux me concentrer sur le coaching de ma team REFUSE RESIST.<img src={refuseResist} alt="" /><br /> Il est donc inutile de m'envoyer un message privé sur discord à ce sujet.<br /> Pareil pour les "conseils", il y a mes vidéos, mes guides et mes coachings en live pour ça. Ce n'est pas que je veux pas c'est que je n'ai pas le temps de répondre par écrit.</p>
    </div>
  </div>
);

export default Contact;
