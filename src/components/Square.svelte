<script>
    export let value; 
    export let handleClick;
</script>

<style>
    .square {
        background: #78bec5;
        color: white;
        border-radius: 4px;
        float: left;
        font-size: 48px;
        font-weight: bold;
        line-height: 68px;
        height: 68px;
        margin-right: 4px;
        margin-top: 4px;
        margin-bottom: 0px;
        padding: 0;
        text-align: center;
        width: 68px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, .2); 
    }

    .square:focus {
        outline: none;
        background: #bbb;
    }

    .square.X {
        background: #ecaf4f;
    }
    .square.O {
        background: #dc685a;
    }
</style>

<button class="square { value }" on:click={handleClick}>{ value }</button>
