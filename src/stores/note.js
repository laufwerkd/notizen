import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('notes', () => {
    let notes = ref({
    });

    function createNote(noteColor) {
        let today = new Date();
        let newNote = {
            id: Date.now().toString(),
            text: "",
            creationDate: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`,
            color: noteColor ?? "var(--dark)"
        }
        notes.value[newNote.id] = newNote;
    }

    function deleteNote(id) {
        delete notes.value[id];
    }

    return {
        notes,

        createNote,
        deleteNote
    }
})
