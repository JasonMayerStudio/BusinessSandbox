import * as types from './actionTypes';

import {
  getTemplates,
  getOneTemplate,
} from '../api/templateApi';

export function requestTemplates() {
  return { type: types.REQUEST_TEMPLATES };
}

export function receiveTemplatesSuccess(templates) {
  return {
    type: types.RECEIVE_TEMPLATES_SUCCESS,
    templates,
    receivedAt: Date.now(),
  };
}

export function receiveTemplatesFailure(error) {
  return {
    type: types.RECEIVE_TEMPLATES_FAILURE,
    error,
  };
}

export function fetchTemplates(query) {
  return function dispatchGetTemplates(dispatch) {
    dispatch(requestTemplates());

    return getTemplates(query)
      .then((templates) => {
        dispatch(receiveTemplatesSuccess(templates));
      })
      .catch((error) => {
        dispatch(receiveTemplatesFailure(error));
      });
  };
}

export function requestOneTemplate() {
  return { type: types.REQUEST_ONE_TEMPLATE };
}

export function receiveOneTemplateSuccess(template) {
  return {
    type: types.RECEIVE_ONE_TEMPLATE_SUCCESS,
    template,
    receivedAt: Date.now(),
  };
}

export function receiveOneTemplateFailure(error) {
  return {
    type: types.RECEIVE_ONE_TEMPLATE_FAILURE,
    error,
  };
}

export function fetchOneTemplate(id) {
  return function dispatchGetOneTemplate(dispatch) {
    dispatch(requestOneTemplate());

    return getOneTemplate(id)
      .then((template) => {
        dispatch(receiveOneTemplateSuccess(template));
        return template;
      })
      .catch((error) => {
        const errorObj = error || new Error('An unknown error has occurred.');
        dispatch(receiveOneTemplateFailure(errorObj));
        throw errorObj;
      });
  };
}
