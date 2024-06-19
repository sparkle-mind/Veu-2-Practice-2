<template>
    
<div>
    <div class="stock-wrp">
        <div class="item">{{ item }}</div>

        <h2 v-if="item <= 0" v-bind:class="{finish:true}">Sorry !!! Item was Finished...</h2>
        <h2 v-else-if="item >= 0 && item <=10 " v-bind:class="{few:true}">Few items left !!!</h2>
        <h2 v-else v-bind:class="{available:true}">Item is available ...</h2>
    </div>
        
</div>
</template>

<script>
export default{
    name:"StockList",
    data(){
        return {
            item:4,
        }
    },
  
}
</script>

<style>
.stock-wrp{
    max-width: 800px;
    width: 100%;
    margin: 30px auto;
    border: 1px solid #302f2f;
    padding: 30px;
    background-color:#c7c7c736;
    border-radius: 14px;
}
.item{
    font-size: 32px;
}
h2{
    font-size: 24px;
    line-height: 1.2;
}
.finish{
    color: red;
}
.few{
    color: orange;
}
.available{
    color: green;
}

</style>