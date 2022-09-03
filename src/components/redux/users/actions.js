import { ADD_CONTACT, DELETE_CONTACT, UPDATE } from './user-types';
export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
export const updateStatus = id => {
  return {
    type: UPDATE,
    payload: id,
  };
};
