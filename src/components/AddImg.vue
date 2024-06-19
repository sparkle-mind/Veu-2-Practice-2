<template>
    <div>
        <h1>Add and Remove Img By Click</h1>

        <ul>
            <li v-for="(img, index) in imgs" :key="index">
                <img :src="img.url" alt="">
            </li>
        </ul>

        <button @click="removeFunc">-</button>
        <button @click="addFunc">+</button>
    </div>
</template>

<script>
export default {
    name: "AddImg",
    data() {
        return {
            imgs: [
                { url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", brand: "Volkswagen" },
                { url: "https://media.istockphoto.com/id/147461077/photo/sports-car-on-highway.webp?s=170667a&w=0&k=20&c=iCUET3cvaSx5Dr5aCQ8To-fWeqxpKRs0q2RHQPjaJuQ=", brand: "Ford" },
                { url: "https://images.unsplash.com/photo-1453491945771-a1e904948959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8", brand: "BMW" },
                { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D", brand: "Mercedes" }
            ],
            availableImgs: [
                { url: "https://images.unsplash.com/photo-1518770660439-4636190af475", brand: "Audi" },
                { url: "https://images.unsplash.com/photo-1502877338535-766e1452684a", brand: "Lamborghini" },
                { url: "https://images.unsplash.com/photo-1511394184222-6ee4930b6de0", brand: "Tesla" },
                { url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf", brand: "Ferrari" }
            ],
            currentIndex: 0
        }
    },
    methods: {
        addFunc() {
            if (this.currentIndex < this.availableImgs.length) {
                this.imgs.push(this.availableImgs[this.currentIndex]);
                this.currentIndex++;
            } else {
                alert("No more images to add.");
            }
        },
        removeFunc() {
            if (this.imgs.length > 0) {
                this.imgs.pop();
                this.currentIndex--;
            }
        }
    }
}
</script>

<style scoped>
ul {
    display: flex;
    align-items: center;
    padding: 30px 0;
    margin: 0;
}
li {
    width: 23%;
    padding: 9px;
    list-style: none;
    background-color: rgb(18, 194, 150);
    margin: 5px;
    border-radius: 10px;
}
figure {
    margin: 0;
    display: block;
}
img {
    width: 100%;
    display: block;
    min-height: 200px;
    max-height: 200px;
    object-fit: cover;
}
button {
    margin: 5px;
    padding: 10px;
    cursor: pointer;
}
</style>
