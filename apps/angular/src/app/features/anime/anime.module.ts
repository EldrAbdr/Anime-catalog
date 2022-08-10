import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { RouterModule } from '@angular/router';

import { PaginationComponent } from './components/pagination/pagination.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { AnimeTableComponent } from './components/anime-table/anime-table.component';
import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/** Anime module. */
@NgModule({
  declarations: [
    AnimeTableComponent,
    PaginationComponent,
    FilteringComponent,
    AnimeDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  exports: [AnimeTableComponent, AnimeDetailsComponent],
})
export class AnimeModule {}
