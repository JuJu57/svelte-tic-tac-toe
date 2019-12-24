import { derived, readable, writable } from 'svelte/store';

const winner_lines = readable([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]);
const players = readable(['X', 'O']);
const last_player_to_play = writable('');
const current_player_to_play = derived([last_player_to_play, players], ([$last_player_to_play, $players], set) => {
    const new_player_to_play = $players.filter(p => p !== $last_player_to_play);

    set(new_player_to_play);
    
    return () => null;
});
const squares = writable(Array(9).fill(''));
const winner = writable(null);

export { 
    winner_lines,
    players,
    last_player_to_play,
    current_player_to_play,
    squares,
    winner
};