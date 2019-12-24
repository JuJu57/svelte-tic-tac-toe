<script context="module">
    const players = ['X', 'O'];
    let current_player_to_play = '';
    let winner = null;
</script>

<script> 
    import Board from './Board.svelte';
</script>

<style>
    .game {
        display: flex;
        flex-direction: column;
    }
</style>

<div class="game">
    <Board/>
    {#if $winner}
        <p>{$winner} won the game!</p>
    {:else}
        <p>{$current_player_to_play}'s turn</p>
    {/if}
</div>