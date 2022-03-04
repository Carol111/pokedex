import {api} from './api';

export async function getPokemon() {
  console.log('getPokemon');

  try {
    const response = await api.get('pokemon');
    console.log('response', response);
    return response;
  } catch (error) {
    console.log('error', error);
  }
}
