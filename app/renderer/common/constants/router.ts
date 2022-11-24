const ROUTER = {
  root: '/',
  tomato: '/tomato',
};
export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  tomato: 'tomato',
};

export const ROUTER_ENTRY = [
  {
    url: 'https://github.com/Poivre-hxx/tomato',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.tomato,
    key: ROUTER_KEY.tomato,
    text: '使用',
  },
  {
    url: 'https://github.com/Poivre-hxx/tomato',
    key: 'code',
    text: '源码',
  },
];
