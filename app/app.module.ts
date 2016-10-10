import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './heros/hero-detail.component';
import { HeroesComponent }     from './heros/heroes.component';
import { HeroService }         from './shared/services/hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}
