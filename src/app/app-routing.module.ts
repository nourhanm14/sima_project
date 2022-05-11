import { NotfoundComponent } from './components/notfound/notfound.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MediaDetailsComponent } from './components/media-details/media-details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'movies' , pathMatch:'full'},
  {path:'movies' , component:MoviesComponent},
  {path:'mediaDetails/:type/:id' , component:MediaDetailsComponent},



  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
