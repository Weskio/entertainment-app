import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { RegularCardComponent } from "../../components/regular-card/regular-card.component";
import { EntertainmentDataService } from '../../services/entertainment-data.service';
import { EntertainmentCard } from '../../interfaces/entertainment-card';

@Component({
    selector: 'app-bookmarked',
    standalone: true,
    templateUrl: './bookmarked.component.html',
    styleUrl: './bookmarked.component.css',
    imports: [SidebarComponent, SearchBarComponent, RegularCardComponent]
})
export class BookmarkedComponent {

    constructor(private bookmarkServices: EntertainmentDataService){}

    bookmarkedMovies: EntertainmentCard[] = this.bookmarkServices.getBookmarkedMovies();

    bookmarkedSeries: EntertainmentCard[] = this.bookmarkServices.getBookmarkedSeries()

}
