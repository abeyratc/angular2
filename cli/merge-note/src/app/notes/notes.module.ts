import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NotesEntryComponent } from './notes-entry/notes-entry.component';

import { ArtifactModule } from './notes-entry/artifact/artifact.module';

import { NOTES_ROUTES } from './notes.routes';

import { NotesService } from './notes.service';

@NgModule({
	// only NgModule classes goes here
	imports: [CommonModule, FormsModule, ArtifactModule, RouterModule.forChild(NOTES_ROUTES)],
    // Only declarables — components, directives and pipes classes
    // No NgModule classes, service classes, nor model classes.
	declarations: [
		NotesEntryComponent
	],
	exports: [ NotesEntryComponent, RouterModule],
	providers: [
		NotesService
	]
	
})

export class NotesModule {}