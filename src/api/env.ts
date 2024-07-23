export const URL_BASE = 'https://ima.ghostspirit.net';

export enum RESOURCES {
  GAMES = 'games',
  GAME_RESOLVE = 'games/:_arg1/resolve',
  GAME_CARD_IMAGE = 'games/:_arg1/:_arg2',
}

export const getUrl = (resource: string, _arg1?: string, _arg2?: string) => {
  let resourceFinal = resource;
  if (_arg1) resourceFinal = resourceFinal.replace(':_arg1', _arg1);
  if (_arg2) resourceFinal = resourceFinal.replace(':_arg2', _arg2);
  return `${URL_BASE}/${resourceFinal}`;
};
