import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heros/heroes.component';
import { HeroDetailComponent } from './heros/hero-detail.component';
import {DashboardComponent}  from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
	  path: 'dashboard',
	  component: DashboardComponent
  },
  {
	  path: 'detail/:id',
	  component: HeroDetailComponent
	}




];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
