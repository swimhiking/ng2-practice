import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../../heros/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
	  return this.getHeroes()
	             .then(heroes => heroes.find(hero => hero.id === id));
	}
}
