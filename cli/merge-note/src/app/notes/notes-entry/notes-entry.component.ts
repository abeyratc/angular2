import { Component, OnInit, Input } from '@angular/core';

import { Revision } from '../../shared/revision'
import { LineOfBusiness} from '../../shared/string.types';
import { Months } from '../../shared/string.types';
import { Environments } from '../../shared/string.types';
import { Note } from '../../shared/note';

import { NotesService } from '../notes.service';

@Component({
	moduleId: module.id,
	selector: 'notes-entry',
	templateUrl: 'notes-entry.component.html',
	styleUrls: [
		'notes-entry.component.css'
	]
})

export class NotesEntryComponent  implements OnInit {
	revisions: Revision[];
	lob: string[];
	months: string[]; 
	environments: string[];
	selectedEnvs: String[];

	@Input()
	note: Note;

	constructor(public notesService: NotesService) {
		this.initialize();
	}

	ngOnInit(): void {
		this.revisions = [new Revision()];
		this.lob = this.getStringValues(LineOfBusiness);
		this.months = this.getStringValues(Months);
		this.environments = this.getStringValues(Environments);
		this.selectedEnvs = [''];
	}

	private getStringValues(en): string[] {
	    let ky = Object.keys(en);
		// The options list has the numeric keys, followed by the string keys
		// So, the first half is numeric, the 2nd half is strings
		ky = ky.slice(ky.length / 2);
		return ky;
	}

	add(): void {
		this.revisions.push(new Revision());
		this.note.revision.push(new Revision());
		this.note.environments = '';
	}


	save(): void {
	    this.note.environments = this.filterSelectedEnvironments(this.selectedEnvs);
	    this.notesService.saveNote(this.note).subscribe(() => {
			this.initialize();
		});
	}

    private initialize(): void {
    	this.note = new Note();
    	this.revisions = [new Revision()];
		this.note.revision = [new Revision()];
		this.note.environments = '';
		this.selectedEnvs = [''];
    }

	private addEnvironments(env): string {
		let ens = '';
		for(let i = 0; i < env.length; i++) {
			if(env[i]) {
				ens += this.environments[i] + ' '
			}
		}
		return ens.slice(0, -1);
	}

	private filterSelectedEnvironments(env): string {
		let ens = '';
		for(let i = 0; i < env.length; i++) {
			if(env[i]) {
				ens += this.environments[i];
				if(i < env.length - 1) {
					ens += ",";
				}
			}
		}
		return ens;
	}
}