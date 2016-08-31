import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { ObfuscationComponent } from './../school/components';
import { ResumeComponent } from './../work/components';

const mainRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'resume'
	},
	{
		path: 'resume',
		component: ResumeComponent
	},
	{
		path: 'obfuscation',
		component: ObfuscationComponent
	}
];

const appRoutes: Routes = [
	...mainRoutes
];

export const components = [ResumeComponent, ObfuscationComponent];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);