<template>
    <div>
        <h2>{{ title }}</h2>

        <ul>
            <li v-for="img in imgs" :key="img.key">
                <figure>
                    <img v-bind:src="img.url" alt="Trulli" style="width:100%"/>
                    <figcaption>{{img.brand}}</figcaption>
                </figure>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "GalleryLoop",
    data() {
        return {
            title: "Sleek & Speedy: The Perfect Drive",
            imgs: [
                { url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", brand: "Volkswagen" },
                { url: "https://media.istockphoto.com/id/147461077/photo/sports-car-on-highway.webp?s=170667a&w=0&k=20&c=iCUET3cvaSx5Dr5aCQ8To-fWeqxpKRs0q2RHQPjaJuQ=", brand: "Ford" },
                { url: "https://images.unsplash.com/photo-1453491945771-a1e904948959?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8", brand: "BMW" },
                { url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D", brand: "Mercedes" }
            ]
        };
    },
    methods: {},
};
</script>

<style scoped>
body{
    box-sizing: border-box;
}
h2{
    font-size: 32px;
    text-decoration: underline;
}
ul{
    display: flex;
    align-items: center;
    padding: 30px 0;
    margin: 0;
}
li{
    width: 23%;
    padding: 9px;
    list-style: none;
    background-color: beige;
    margin: 5px;
    border-radius: 10px;
}
figure{
    margin: 0;
    display: block;
}
img{
    width: 100%;
    display: block;
    min-height: 200px;
    max-height: 200px;
    object-fit: cover;
}
figcaption{
    font-size: 24px;
    line-height: 1.2;
    padding: 15px;
}
</style>