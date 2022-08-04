import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon: any;
  spriteList: any;
  sprite: any;
  spriteBtn = 'Show Back';
  shinyBtn = 'Make Shiny!'
  isShiny!: boolean;
  isBack!: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getPokemonDtls(this.data.pokemonName)
      .subscribe((data: any) => {
        this.pokemon = data;
        this.spriteList = data.sprites;
        this.sprite = data.sprites.front_default;
        console.log(this.spriteList);
      });

  }

  changeSprite() {

    if (!this.isShiny) {
      if (!this.isBack) {
        this.isBack = true;
        this.spriteBtn = 'Show Front';
        this.sprite = this.spriteList.back_default;

      } else {
        this.isBack = false;
        this.spriteBtn = 'Show Back';
        this.sprite = this.spriteList.front_default;
      }
    } else {
      if (!this.isBack) {
        this.isBack = true;
        this.spriteBtn = 'Show Front';
        this.sprite = this.spriteList.back_shiny;

      } else {
        this.isBack = false;
        this.spriteBtn = 'Show Back';
        this.sprite = this.spriteList.front_shiny;
      }
    }


  }

  makeShiny() {
    if (!this.isShiny) {
      this.isShiny = true;
      this.isBack = false;
      this.sprite = this.spriteList.front_shiny;
      this.shinyBtn = "Remove Shiny"
      this.spriteBtn = 'Show Back';
    } else {
      this.isShiny = false;
      this.isBack = false;
      this.sprite = this.spriteList.front_default;
      this.shinyBtn = "Make Shiny!"
      this.spriteBtn = 'Show Back';
    }
  }

}

