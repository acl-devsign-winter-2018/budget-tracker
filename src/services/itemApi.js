import { get, post } from './request';
import { config } from './firebase';

const URL = `https://${config.projectId}.firebaseio.com`;
const ITEMS_URL = `${URL}/items.json`;

export const getAll =  () => get(ITEMS_URL);

export const save = game => post(ITEMS_URL, game);