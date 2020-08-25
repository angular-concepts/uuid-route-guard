import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentComponent } from './consent/consent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LevelComponent } from './level/level.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ConsentGuard } from './consent.guard';

const routes: Routes = [
  { path: '', redirectTo: 'consent', pathMatch: 'full' },
  { path: 'consent', component: ConsentComponent },
  { path: 'dashboard', canActivate: [ConsentGuard], component: DashboardComponent },
  { path: 'game/:name', canActivate: [ConsentGuard], component: LevelComponent },
  { path: 'tutorial/:name', canActivate: [ConsentGuard], component: TutorialComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
