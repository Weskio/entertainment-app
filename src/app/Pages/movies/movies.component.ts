import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { TrendingCardComponent } from "../../components/trending-card/trending-card.component";
import { RegularCardComponent } from "../../components/regular-card/regular-card.component";
import { EntertainmentDataService } from '../../services/entertainment-data.service';
import { EntertainmentCard } from '../../interfaces/entertainment-card';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [SidebarComponent, SearchBarComponent, TrendingCardComponent, RegularCardComponent]
})
export class MoviesComponent {

    constructor(private movieService: EntertainmentDataService){}

    movies: EntertainmentCard[] = this.movieService.getMovies()

}
