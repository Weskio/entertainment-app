import { Component } from '@angular/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RegularCardComponent } from "../../components/regular-card/regular-card.component";
import { EntertainmentDataService } from '../../services/entertainment-data.service';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-series',
    standalone: true,
    templateUrl: './series.component.html',
    styleUrl: './series.component.css',
    imports: [SearchBarComponent, SidebarComponent, RegularCardComponent]
})
export class SeriesComponent {

    constructor(private seriesService:EntertainmentDataService){}

    series: EntertainmentCard[] = this.seriesService.getSeries()
}
