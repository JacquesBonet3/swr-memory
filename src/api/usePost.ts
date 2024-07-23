import axios from 'axios';
import useSWRMutation from 'swr/mutation';

import { ArgType } from '../types/game.type.ts';
import { getUrl } from './env';

export const usePost = (resource: string) => {
  const fetcher = (url: string, { arg }: { arg: ArgType }) =>
    axios.post(getUrl(url, arg._arg1, arg._arg2), {
      ...arg,
      _arg1: undefined,
      _arg2: undefined,
    });

  return useSWRMutation(resource, fetcher);
};

