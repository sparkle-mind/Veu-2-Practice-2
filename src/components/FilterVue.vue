<template>
    <div class="filter-wrp">
        <h1>Filter</h1>
        <h3>{{ sam | Ucase }}</h3>
        <!-- we can add filter function in main.js and then use anywhere  -->
        <!-- we can add filter in existing componrnt into computed and then use currunt component only  -->
        <label> Enter Rupee :- </label>
        <input type="number" placeholder="Enter Rupee" v-model="RupeeInput">
        <h4> Rupee to Dollar :- {{ RupeeInput }} Rupee = {{ RupeeInput | Converter }} dollar</h4>


        <label> Enter Em Value :- </label>
        <input type="number" placeholder="Enter Em" v-model="EmInput">
        <h4>Em to Px: {{ EmInput }} = {{ EmInput | EmToPixel }}px</h4>

        <br><br><br>

        <div>Give Me Books which price is more than 300</div>
        <h3>{{ filteredBooks.join(', ') }}</h3>
    </div>


</template>

<script>
export default {
    name: "FilterVue",
    data() {
        return {
            sam: "samir vanapariya",
            // rupee:2,
            EmInput: 3,
            RupeeInput: 2,

            books: [
                { name: "book1", price: 200 },
                { name: "book2", price: 500 },
                { name: "book3", price: 250 },
                { name: "book4", price: 260 },
                { name: "book5", price: 660 },
                { name: "book6", price: 6200 },

            ]
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.price > 300).map(book => book.name);
        }
    }
}
</script>

<style scoped>
.filter-wrp {
    padding: 20px;
    background-color: rgb(212, 212, 212);
}

h1 {
    margin-bottom: 20px;
}

input {
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
}

label {
    font-size: 18px;
    font-weight: 600;
    color: brown;
    padding-right: 12px;
}

h4 {
    color: green;
}
</style>



<!-- 
note:

- we can add filter into computed property while we need to use this filter only same compnent. if 
  we need use filter globally then we must add filter in main.js like this....

Vue.filter("EmToPixel",(val)=>{
      return val * 16
})


-->