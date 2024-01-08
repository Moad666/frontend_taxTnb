import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategorieComponent } from './categorie/categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { UpdateProprietaireComponent } from './update-proprietaire/update-proprietaire.component';
import { TerrainComponent } from './terrain/terrain.component';
import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    UpdateCategorieComponent,
    ProprietaireComponent,
    UpdateProprietaireComponent,
    TerrainComponent,
    UpdateTerrainComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
