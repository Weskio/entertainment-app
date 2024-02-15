import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { TrendingCardComponent } from "../../components/trending-card/trending-card.component";
import { RegularCardComponent } from "../../components/regular-card/regular-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SidebarComponent, SearchBarComponent, TrendingCardComponent, RegularCardComponent]
})
export class HomeComponent {

}
