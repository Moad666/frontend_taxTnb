import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';
import { TerrainComponent } from './terrain/terrain.component';

const routes: Routes = [
  {path : "categorie", component : CategorieComponent},
  {path : "proprietaire", component : ProprietaireComponent},
  {path : "terrain", component : TerrainComponent},
  {path : "update-categorie/:id", component : UpdateCategorieComponent},
  {path : "update-proprietaire/:id", component : UpdateProprietaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
