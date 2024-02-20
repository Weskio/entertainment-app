import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TrendingCardComponent } from '../../components/trending-card/trending-card.component';
import { RegularCardComponent } from '../../components/regular-card/regular-card.component';
import { EntertainmentDataService } from '../../services/entertainment-data.service';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { NgFor } from '@angular/common';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    SidebarComponent,
    SearchBarComponent,
    TrendingCardComponent,
    RegularCardComponent,
    NgFor,
  ],
})
export class HomeComponent {
  constructor(
    private entertainment: EntertainmentDataService,
    private search: SearchService
  ) {}

  trendyShows: EntertainmentCard[] = this.entertainment.getTrendingMovies();

  regularShows: EntertainmentCard[] =
    this.entertainment.getAllMoviesAndSeries();

  filteredShows: EntertainmentCard[] = [];

  searchInput: string = '';

  ngOnInit() {
    this.trendyShows = this.entertainment.getTrendingMovies();
    this.regularShows = this.entertainment.getAllMoviesAndSeries();
    this.search.searchKeySubject.subscribe((data) => {
        this.searchInput =data
     // console.log(this.searchInput)
      this.filteredShows = this.regularShows.filter((show) =>
      show.title.toLowerCase().includes(this.searchInput.toLowerCase())
    );
    })
  }

  filterShows(searchKey: string) {
    this.filteredShows = this.regularShows.filter((show) =>
      show.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }
}
