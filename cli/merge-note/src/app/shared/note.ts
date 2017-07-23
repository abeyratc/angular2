import { Revision } from './revision';

export class Note {
	project: string;
	lineOfBusiness: string;
	release: string;
	revision: Revision[];
	environments: string;
	comments: string;
}