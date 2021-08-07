import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';
import omit from 'lodash/omit';
import cookies from 'js-cookie';
import isUndefined from 'lodash/isUndefined';

import { handleError } from './errorHandler';

function showError(description) {
  const toast = createStandaloneToast();
  if (typeof window !== 'undefined') {
    toast({
      description,
      title: 'An error occurred.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    });
  }
}

function requestHandler(config) {
  const newConfig = config;
  const token = cookies.get('adminToken');
  if (config.includeAuth === true && token) {
    newConfig.headers.Authorization = `Token ${token}`;
  }
  return newConfig;
}

function requestErrorHandler(error) {
  showError(error);
  return Promise.reject(error);
}

function responseHandler(response) {
  if (isUndefined(response.data.success)) {
    return response.data;
  }

  if (!response.data.success) {
    showError(handleError(omit(response.data, ['success'])));
    return Promise.reject(response.data);
  }
  return response.data;
}

function responseErrorHandler(error) {
  if (error.response) {
    showError(handleError(omit(error.response.data, ['success'])));
    return Promise.reject(error.response.data);
  }
  if (error.request) {
    showError(handleError(error.request));
    return Promise.reject(error.request);
  }
  showError(handleError(error));
  return Promise.reject(error);
}

export default function intercept() {
  const requestHandlers = axios.interceptors.request.handlers;
  const responseHandlers = axios.interceptors.response.handlers;
  if (requestHandlers.length === 0) {
    axios.interceptors.request.use(requestHandler, requestErrorHandler);
  }
  if (responseHandlers.length === 0) {
    axios.interceptors.response.use(responseHandler, responseErrorHandler);
  }
}
