import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'artists/:project',
    component: ArtistsComponent
  },
  {
    path: 'artists/:id',
    component: ArtistDetailComponent
  },
  {
    path: 'admin',
    component: AuthComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
