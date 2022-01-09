<script lang="ts">
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" 
    ];
</script>
<div>  
    <div class="month-bar">
        <p>Its</p> 
        <p class="month-title">  
            { monthNames[ (new Date).getMonth() ] } 
        </p> 
        <div></div>
    </div>
</div>

<style>

    .month-bar {
        width:100%;
        height: 50px;
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
    }
 
</style>