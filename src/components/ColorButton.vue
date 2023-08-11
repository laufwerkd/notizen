<script setup>
const props = defineProps({
    backgroundColor: String
})
</script>

<template>
    <div class="colorButton">
        <label>
            <input type="radio" name="colorButton" @click="$emit('updateColor', backgroundColor)">
            <span class="checkmark" :style="{'background-color':backgroundColor}"></span>
        </label>
    </div>
</template>

<style scoped>
label {
    display: block;
    position: relative;
}

input {
    position: absolute;
    opacity: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.checkmark {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 100%;
}
</style>