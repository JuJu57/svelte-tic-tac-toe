<script>
    import { onMount } from 'svelte';
    import { winner, squares, winner_lines, players, last_player_to_play } from '../stores/store.js';
    import Square from './Square.svelte';

    onMount(() => {
        last_player_to_play.set($players[Math.floor(Math.random() * $players.length)])
    });

    const handleClick = (i) => {
        if ($winner || $squares[i] !== '') {
            return;
        }

        const player_one = $players[0];
        const player_two = $players[1];
        const current_player = $last_player_to_play === player_one ? player_two : player_one;
        $squares[i] = current_player;
        if (calculateWinner()) {
            winner.set($squares[i]);
            return;
        }

        last_player_to_play.set(current_player);
    };

    const calculateWinner = () => {
        for (let i = 0; i < $winner_lines.length; i++) {
            const [a, b, c] = $winner_lines[i];

            if ($squares[a] && $squares[a] === $squares[b] && $squares[a] === $squares[c]) {
                return $squares[a];
            }
        }

        return null;
    };
</script>

<style>
    .board-row:after {
        clear: both;
        content: "";
        display: table;
    }
</style>

<div class="board-row">
    <Square value={$squares[0]} handleClick={ () => handleClick(0) } />
    <Square value={$squares[1]} handleClick={ () => handleClick(1) } />
    <Square value={$squares[2]} handleClick={ () => handleClick(2) } />
</div>
<div class="board-row">
    <Square value={$squares[3]} handleClick={ () => handleClick(3) } />
    <Square value={$squares[4]} handleClick={ () => handleClick(4) } />
    <Square value={$squares[5]} handleClick={ () => handleClick(5) } />
</div>
<div class="board-row">
    <Square value={$squares[6]} handleClick={ () => handleClick(6) } />
    <Square value={$squares[7]} handleClick={ () => handleClick(7) } />
    <Square value={$squares[8]} handleClick={ () => handleClick(8) } />
</div>
