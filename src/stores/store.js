import { writable } from 'svelte/store';

export const is_game_finished = writable(false);
export const winner = writable(null);