import { writable } from 'svelte/store';

function createLightDarkTheme(){
  const { subscribe, set, update } = writable('dark')

  return {
    subscribe,
    light: () => set('light'),
    dark: () => set('dark'),
  };
}

export const colorTheme = createLightDarkTheme(); 

export const currentPath = writable('/')