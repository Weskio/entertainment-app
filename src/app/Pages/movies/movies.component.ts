import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TrendingCardComponent } from '../../components/trending-card/trending-card.component';
import { RegularCardComponent } from '../../components/regular-card/regular-card.component';
import { EntertainmentDataService } from '../../services/entertainment-data.service';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { SearchService } from '../../services/search.service';
import { NumbertowordsPipe } from '../../Pipe/numbertowords.pipe';
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [
        SidebarComponent,
        SearchBarComponent,
        TrendingCardComponent,
        RegularCardComponent,
        LoadingComponent
    ]
})
export class MoviesComponent {
  constructor(
    private movieService: EntertainmentDataService,
    private searchService: SearchService
  ) {}

  movies: EntertainmentCard[] = this.movieService.getMovies();

  filteredShows: EntertainmentCard[] = [];
  searchInput: string = '';

  ngOnInit() {
    this.searchService.searchKeySubject.subscribe((data) => {
      this.searchInput = data;
      console.log('Search Input:', this.searchInput);
      this.filteredShows = this.movieService.getFilteredShows(this.searchInput, ['Movie'], [true, false]);
      console.log('Filtered Shows:', this.filteredShows
      );
    });
  }
}
