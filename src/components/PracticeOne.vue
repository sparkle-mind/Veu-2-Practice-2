<template>
    
    <div>
        <h1 v-bind:class="{ positive: value > 0, negative: value < 0 }">{{value}}</h1>
        <button v-on:click="subtract">-</button>
        <button v-on:click="add">+</button>
    </div>
</template>

<script>
export default{
    name:"PracticeOne",
    data() {
        return {
            value:0,
            positive:false,
            negative:false
        };
    },
    methods:{
        add: function(){
            this.value=this.value+1;
            if(this.value ==5 ){
                alert("you added value above 5")
            }
            if(this.value>0){
                this.positive=true
            }
        },
        subtract:function(){
            this.value=this.value-1
            if(this.value == -1 ){
                alert("you are enter in negative value")
            }
            if(this.value<0){
                this.negative=true
            }
        }
    }
}
</script>

<style>
button{
    margin-right: 10px;
    padding: 5px;
    cursor: pointer;
}
.positive{
    color: green;
}
.negative{
    color: red;
}
</style>