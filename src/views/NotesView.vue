<script setup>
import { ref, reactive, watch } from 'vue';
import { useNoteStore } from '../stores/note';

import CreateButton from '@/components/CreateButton.vue';
import Note from '@/components/Note.vue';
import ColorButton from '../components/ColorButton.vue';

const noteStore = useNoteStore();

const colors = reactive({
	"dark": "var(--dark)",
	"orange": "var(--orange)",
	"brown": "var(--brown)",
	"pruple": "var(--pruple)",
	"blue": "var(--blue)",
	"yellow": "var(--yellow)",
})

let currentColor = ref(null);

</script>

<template>
	<div class="notesView">
		<aside>
			<CreateButton @click="noteStore.createNote(currentColor)" class="createButton"/>
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.dark" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.orange" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.brown" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.pruple" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.blue" />
			<ColorButton @updateColor="(n) => currentColor = n" :backgroundColor="colors.yellow" />
		</aside>
		<main>
			<h1 class="title">Notes</h1>
			<div class="notes">
				<Note class="note" v-for="note in noteStore.notes" :key="note.id" :note="note" />
				<span v-if="Object.keys(noteStore.notes).length <= 0">Click + to add a note</span>
			</div>
		</main>
	</div>
</template>

<style scoped>
.notesView {
	padding-top: 64px;
	display: flex;
}

aside {
	padding-right: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	border-right: 1px solid rgba(128, 128, 128, 0.25);
}

main {
	padding-left: 128px;
}

.notes {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 16px;
}

.createButton {
	margin-bottom: 16px;
}

.title {
	margin-bottom: 64px;
	font-weight: 500;
}
</style>
