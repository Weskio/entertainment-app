import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { RegularCardComponent } from "../../components/regular-card/regular-card.component";

@Component({
    selector: 'app-bookmarked',
    standalone: true,
    templateUrl: './bookmarked.component.html',
    styleUrl: './bookmarked.component.css',
    imports: [SidebarComponent, SearchBarComponent, RegularCardComponent]
})
export class BookmarkedComponent {

}
