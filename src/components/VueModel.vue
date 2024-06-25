<template>
    <div class="modal-wrp">
        <label>Enter your name:</label>
        <input type="text" placeholder="Your name" v-model="yourName" />

        <div class="skill-wrp">
            <h5>Select your skills:</h5>
            <div class="input-group">
                <input type="checkbox" id="html" v-model="skills.html" />
                <label for="html">HTML</label>
            </div>
            <div class="input-group">
                <input type="checkbox" id="css" v-model="skills.css" />
                <label for="css">CSS</label>
            </div>
            <div class="input-group">
                <input type="checkbox" id="javascript" v-model="skills.javascript" />
                <label for="javascript">JavaScript</label>
            </div>
        </div>

        <h5>Your Name is: <span>{{ yourName }}</span></h5>
        <h5>Your Skills are:
            <span v-if="skills.html">HTML</span>
            <span v-if="skills.css">CSS</span>
            <span v-if="skills.javascript">JavaScript</span>
        </h5>
    </div>
</template>

<script>
export default {
    name: "VueModel",
    data() {
        return {
            yourName: "",
            skills: {
                html: false,
                css: false,
                javascript: false,
            },
        };
    },
};
</script>

<style scoped>
.modal-wrp {
    padding: 20px;
    margin: 20px;
    background-color: rgb(212, 212, 212);
    border-radius: 10px;
}

label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
}

input {
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
}

h5 {
    font-size: 18px;
}

span {
    display: inline-block;
    color: purple;
}

.skill-wrp {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
}

.input-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
}

.input-group label {
    margin: 0 0 0 5px;
}

.input-group input {
    padding: 10px;
    width: 20px;
    height: 20px;
}
</style>