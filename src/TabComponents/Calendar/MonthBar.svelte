<script lang="ts">
    import { range,getNumEnd,Names } from "../../Shared/Utils";
</script>

<div class="month-bar">
    <p> {(new Date).getDate() + getNumEnd()} </p>
    <p class="month-title"> { Names.month[ (new Date).getMonth() ]} </p> 
</div>

<style>

    .month-bar {
        margin-top:.5rem;
        margin-bottom:.5rem;
        border-radius:1rem;
        background-color: rgb(100,100,100);
        width:40vw;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .month-bar p {
        font-size:2rem;
        margin-top:0px;
        margin-bottom:0px;
    }
    
    .month-title {
        margin-left:0.5rem;
        margin-right:0.5rem;
    }
    .month-day {
        margin-right:0.5rem;
        margin-left:0.5rem;
    }
 
</style>