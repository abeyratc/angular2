import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }            from './login-authc/auth-guard.service';
import { LoginAuthcService } from './login-authc/login-authc.service';

import { LoginEntryComponent } from './login-entry/login-entry.component';

import { LOGIN_ROUTES } from './login.routes';


@NgModule({
	// only NgModule classes goes here
	imports: [CommonModule, FormsModule, RouterModule.forChild(LOGIN_ROUTES)],
    // Only declarables — components, directives and pipes classes
    // No NgModule classes, service classes, nor model classes.
	declarations: [
		LoginEntryComponent
	],
	exports: [ LoginEntryComponent, RouterModule ],
	providers: [
		AuthGuard,
		LoginAuthcService
	]
})

export class LoginModule {}