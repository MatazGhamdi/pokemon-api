import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any[] = [];

  constructor(private pokeListService: PokemonListService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.pokeListService.getPokemon()
      .subscribe((data: any) => {
        data.results.forEach((result: any) => {
          this.pokeListService.getPokemonDtls(result.name)
            .subscribe((res: any) => {
              this.pokemonList.push(res);
            })
        });
      });
  }

  showPokemon(pokemon: any) {
    this.dialog.open(PokemonComponent, {
      width: '400px',
      data: {
        pokemonName: pokemon
      },
    });
  }

}
