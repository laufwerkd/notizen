<script setup>
import { ref, watch } from 'vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore();

const props = defineProps({
	note: {
		id: String,
		text: String,
		creationDate: String,
		color: String,
	}
})

function updateText(value) {
	noteStore.notes[props.note.id].text = value;
}
</script>

<template>
    <div class="note" :style="{'background-color':note.color}">
        <main>
            <textarea placeholder="Write something" @input="updateText($event.target.value)">{{ note.text || "" }}</textarea>
            <footer>
                <span class="creationDate">{{ note.creationDate }}</span>
                <button @click="noteStore.deleteNote(note.id)" class="deleteButton"><i class="bi bi-check"></i></button>
            </footer>
        </main>
    </div>
</template>

<style scoped>
.note {
    width: 300px;
    height: 300px;
    background-color: var(--dark);
    color: var(--light);
    border-radius: 24px;
    overflow: hidden;
}

main {
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

textarea {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-family: inherit;
    background-color: unset;
    color: var(--light);
    resize: none;
    border: none;
    outline: none;
}

textarea::-webkit-scrollbar {
    width: 4px;
}

textarea::-webkit-scrollbar-track {
    background-color: rgba(128, 128, 128, 0.25);
}

textarea::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.25);
}

footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
}

.creationDate {
    font-size: 0.85rem;
}

.deleteButton {
    width: 40px;
    height: 40px;
    background-color: var(--light);
    border: none;
    border-radius: 50%;
}

.deleteButton:hover {
    cursor: pointer;
}

.bi {
    font-size: 40px;
    color: var(--dark);
}
</style>