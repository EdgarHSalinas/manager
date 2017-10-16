import { EMAIL_CHANGED } from './types';

export const emailChanged = (text) => {  // Action Creator
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
