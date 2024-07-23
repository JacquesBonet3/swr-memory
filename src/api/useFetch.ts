import axios from 'axios';
import { getUrl } from './env';
import { ArgType } from '../types/game.type.ts';
import useSWRMutation from 'swr/mutation';


export const useGet = (resource: string) => {
  const fetcher = (url: string, { arg }: { arg: ArgType }) =>
    axios.get(getUrl(url, arg._arg1, arg._arg2));

  return useSWRMutation(resource, fetcher);
};

