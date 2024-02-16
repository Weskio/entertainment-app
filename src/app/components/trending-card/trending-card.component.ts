import { Component, Input } from '@angular/core';
import { EntertainmentCard } from '../../interfaces/entertainment-card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.css'
})
export class TrendingCardComponent {

  @Input() show!:EntertainmentCard

}
