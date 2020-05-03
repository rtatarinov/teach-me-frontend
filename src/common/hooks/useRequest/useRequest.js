import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '@common/constants';
import { getToken } from '@utils/token';

const defaultConfig = {
  url: '',
  method: 'get',
  initialIsLoading: false,
  withCredentials: false,
  baseURL: API_URL,
  onSuccess: Function.prototype,
  onError: Function.prototype,
};

export const useRequest = (config) => {
  const settings = { ...defaultConfig, ...config };
  const {
    url,
    method,
    baseURL,
    initialIsLoading,
    onSuccess,
    onError,
    withCredentials,
  } = settings;

  const [isLoading, setIsLoading] = useState(initialIsLoading);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const token = getToken();

  const handleSuccessRequest = (serverData) => {
    setIsLoading(false);

    if (serverData) {
      setError(null);
      setData(serverData);

      if (onSuccess) {
        onSuccess(serverData);
      }
    }
  };

  const handleErrorRequest = (serverError) => {
    setIsLoading(false);

    if (serverError) {
      setError(serverError);

      if (onError) {
        onError(serverError);
      }
    }
  };

  const request = async (payload, options) => {
    try {
      setIsLoading(true);

      let requestConfig = {
        baseURL,
        withCredentials,
        url,
        method,
      };

      if (payload) {
        requestConfig = { ...requestConfig, data: payload };
      }

      if (options) {
        requestConfig = { ...requestConfig, ...options };
      }

      if (withCredentials && token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
      }

      const { data: serverData } = await axios(requestConfig);

      handleSuccessRequest(serverData);
    } catch (errors) {
      if (axios.isCancel(errors)) {
        console.error('Request canceled by axios', errors.message);
      } else {
        handleErrorRequest(errors);
      }
    }
  };

  const state = { data, isLoading, error, settings };

  return [state, request];
};
