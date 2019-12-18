<script>
    import { is_game_finished, winner } from '../stores/store.js';
    import Square from './Square.svelte';

    let squares = Array(9).fill('');
    let isXTurn = true;

    function handleClick(i) {
        if ($is_game_finished || squares[i] !== '') {
            return;
        }

        squares[i] = isXTurn ? 'X' : 'O';
        if (calculateWinner(squares)) {
            is_game_finished.set(true);
            winner.set(isXTurn ? 'X' : 'O');
            return;
        }

        isXTurn = !isXTurn;
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

</script>

<style>
    .board-row:after {
        clear: both;
        content: "";
        display: table;
    }
</style>

<div class="board-row">
    <Square value={squares[0]} handleClick={() => handleClick(0)} />
    <Square value={squares[1]} handleClick={() => handleClick(1)} />
    <Square value={squares[2]} handleClick={() => handleClick(2)} />
</div>
<div class="board-row">
    <Square value={squares[3]} handleClick={() => handleClick(3)} />
    <Square value={squares[4]} handleClick={() => handleClick(4)} />
    <Square value={squares[5]} handleClick={() => handleClick(5)} />
</div>
<div class="board-row">
    <Square value={squares[6]} handleClick={() => handleClick(6)} />
    <Square value={squares[7]} handleClick={() => handleClick(7)} />
    <Square value={squares[8]} handleClick={() => handleClick(8)} />
</div>
