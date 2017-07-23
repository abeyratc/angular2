import { Routes } from '@angular/router';
import { NotesEntryComponent } from './notes-entry/notes-entry.component';

export const NOTES_ROUTES: Routes = [
	{ 
		path: 'notes', 
	    component: NotesEntryComponent
	}
];