import { Component, Input } from '@angular/core';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-regular-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './regular-card.component.html',
  styleUrl: './regular-card.component.css'
})
export class RegularCardComponent {

  @Input() show!: EntertainmentCard

}
