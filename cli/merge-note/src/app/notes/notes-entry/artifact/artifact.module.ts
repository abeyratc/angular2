import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArtifactComponent } from './artifact.component';

@NgModule({
	// only NgModule classes goes here
	imports: [CommonModule, FormsModule],
    // Only declarables — components, directives and pipes classes
    // No NgModule classes, service classes, nor model classes.
	declarations: [
		ArtifactComponent
	],
	exports: [ ArtifactComponent ],
	
})

export class ArtifactModule {}