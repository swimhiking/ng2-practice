// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/services/hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: '../app/heros/hero-detail.component.html',
   styleUrls: [ '../app/asset/hero-detail.component.css' ]
})


export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
