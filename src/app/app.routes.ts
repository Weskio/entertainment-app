import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/auth/login/login.component';
import { RegisterComponent } from './Pages/auth/register/register.component';
import { HomeComponent } from './Pages/home/home.component';
import { SeriesComponent } from './Pages/series/series.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { BookmarkedComponent } from './Pages/bookmarked/bookmarked.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path:"sign-up", component: RegisterComponent},
    {path:"", component: HomeComponent},
    {path:"series", component: SeriesComponent},
    {path:"movies", component: MoviesComponent},
    {path:"bookmarked", component: BookmarkedComponent}

];
