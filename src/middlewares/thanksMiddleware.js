import axios from 'axios';
import {
  FETCH_ALL_THANKS,

  saveAllThanks,
  setThanksIsLoad,
} from 'src/actions/thanks';

const thanksMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_THANKS:
      axios({
        method: 'get',
        url: 'https://backend.slipix-progresser-sur-league-of-legends.fr/thanks',
      })
        .then((response) => {
          store.dispatch(saveAllThanks(response.data));
          store.dispatch(setThanksIsLoad(true));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
        });
      break;

    default:
      next(action);
  }
};

export default thanksMiddleware;
