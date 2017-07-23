import { Component, Input, ViewChild } from '@angular/core';

import { Revision } from '../../../shared/revision';
import { Note } from '../../../shared/note'


@Component({
	moduleId: module.id,
	selector: 'artifact',
	templateUrl: 'artifact.component.html',
	styleUrls: [
		'artifact.component.css'
	]
})

export class ArtifactComponent {
	artifacts: string[] = ['ssc-web', 'ssc-core', 'ssc-ias', 'ssc-tools', 'base-ias'];

	@Input()
	revisions: Revision[];

	@Input()
	idx: number;

	@Input()
	note: Note;

	constructor() {
		//this.note.revision = [];
	}

	remove(): void {
		this.revisions.splice(this.idx, 1);
		this.note.revision.splice(this.idx, 1);
	}
}