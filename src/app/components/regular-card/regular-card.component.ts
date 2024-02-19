import { Component, Input } from '@angular/core';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { NgClass } from '@angular/common';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-regular-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './regular-card.component.html',
  styleUrl: './regular-card.component.css'
})
export class RegularCardComponent {

  @Input() show!: EntertainmentCard

   constructor(private filter: SearchService){}

  searchInput: string = '';

  ngOnInit() {
    this.filter.searchKeySubject.subscribe((data) => {
      let searchData = data;
      return searchData
       
    })
  }

}
