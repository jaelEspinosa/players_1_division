import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersDetailComponent } from './pages/players-detail/players-detail.component';
import { PlayersComponent } from './pages/players/players.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component:HomeComponent},
  {path: "players", component : PlayersComponent},
  {path: "players/:PlayerID", component : PlayersDetailComponent },
  {path: "about", component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
