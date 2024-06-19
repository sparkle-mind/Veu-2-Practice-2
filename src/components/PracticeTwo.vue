<template>
    <div>
        <br><br><br>
        <button v-on:click="availableFunc">Available</button>
        <button v-on:click="unavailableFunc">Unavailable</button>
        <br><br><br>
        <h4 v-if="available" v-bind:class="{ stock: available }">In Stock</h4>
        <h4 v-if="unavailable" v-bind:class="{ nostock: unavailable }">Out Of Stock</h4>
    </div>
</template>

<script>
export default {
    name: "PracticeTwo",
    data() {
        return {
            available: true,
            unavailable: false
        };
    },
    methods: {
        availableFunc() {
            this.available = true;
            this.unavailable = false;
        },
        unavailableFunc() {
            this.unavailable = true;
            this.available = false;
        }
    }
}
</script>

<style scoped>
.stock {
    color: green;
}
.nostock {
    color: red;
}
</style>
