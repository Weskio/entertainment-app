import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { NgClass, NgIf } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { emit } from 'process';

@Component({
  selector: 'app-regular-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './regular-card.component.html',
  styleUrl: './regular-card.component.css',
})
export class RegularCardComponent {
  @Input() show!: EntertainmentCard;
  // @Input() searchInput: string = '';

  // @Input() isFiltered() {
  //   return !this.show.title
  //     .toLowerCase()
  //     .includes(this.searchInput.toLowerCase());
  // }

  // constructor(private filter: SearchService) {}

  // ngOnInit() {
  //   this.filter.searchKeySubject.subscribe((data) => {
  //     this.searchInput = data;
  //     console.log(this.searchInput);
  //     this.isFiltered();
  //   });
  // }
}
