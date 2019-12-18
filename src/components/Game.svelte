<script> 
    import { is_game_finished, winner } from '../stores/store.js';
    import Board from './Board.svelte';
</script>

<style>
    .game {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="game">
    <Board />
    {#if $is_game_finished}
        <p>{$winner} won the game!</p>
    {/if}
</div>