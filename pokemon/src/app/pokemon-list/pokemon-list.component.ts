import { Component, OnInit } from '@angular/core';
import { PokemonListService } from './pokemon-list.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: any[] = [];

  constructor(private pokeListService: PokemonListService, public dialog: MatDialog,
    private commonService: CommonService) { }

  ngOnInit(): void {

    this.commonService.showLoadingOverlay();
    this.pokeListService.getPokemon()
      .subscribe((data: any) => {
        data.results.forEach((result: any) => {
          this.pokeListService.getPokemonDtls(result.name)
            .subscribe((res: any) => {
              this.pokemonList.push(res);
              this.commonService.hideLoadingOverlay();
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
