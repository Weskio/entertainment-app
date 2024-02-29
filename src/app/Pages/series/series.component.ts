import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RegularCardComponent } from '../../components/regular-card/regular-card.component';
import { EntertainmentDataService } from '../../services/entertainment-data.service';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { SearchService } from '../../services/search.service';
import { NgClass, NgFor } from '@angular/common';
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
    selector: 'app-series',
    standalone: true,
    templateUrl: './series.component.html',
    styleUrl: './series.component.css',
    imports: [
        SearchBarComponent,
        SidebarComponent,
        RegularCardComponent,
        NgClass,
        NgFor,
        LoadingComponent
    ]
})
export class SeriesComponent {
  constructor(
    private seriesService: EntertainmentDataService,
    private searchService: SearchService
  ) {}

  series: EntertainmentCard[] = this.seriesService.getSeries();

  filteredShows: EntertainmentCard[] = [];

  searchInput: string = '';

  ngOnInit() {
    this.searchService.searchKeySubject.subscribe((data) => {
      this.searchInput = data;
      this.filteredShows = this.seriesService.getFilteredShows(
        this.searchInput,
        ['TV Series'], [true, false]
      );
    });
  }
}
