<template>
    <div class="table-wrp">
        <h4>API</h4>

        <table>
            <thead>
                <tr>
                    <td>userId</td>
                    <td>completed</td>
                    <td>id</td>
                    <td>title</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in myData" :key="data.id">
                    <td>{{ data.userId }}</td>
                    <td>{{ data.completed }}</td>
                    <td>{{ data.id }}</td>
                    <td>{{ data.title }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

export default {
    name: "ApiOne",
    data() {
        return {
            myData: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            Vue.axios.get("https://jsonplaceholder.typicode.com/todos")
                .then(response => {
                    // i want to show only data which has userId 2
                    this.myData = response.data.filter(item => item.userId === 2);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                });
        }
    }
};
</script>

<style scoped>
.table-wrp {
    padding: 50px;
}

table {
    border: 1px solid #000;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
}

thead td {
    color: blueviolet;
}

tr td {
    padding: 10px;
    border: 1px solid #000;
    font-size: 21px;
    line-height: 1.3;
}
</style>
