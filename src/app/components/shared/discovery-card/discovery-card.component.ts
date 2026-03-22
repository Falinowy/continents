import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DiscoveryVariant } from '../../../shared/enums/card-variant';

@Component({
  selector: 'app-discovery-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './discovery-card.component.html',
  styleUrls: ['./discovery-card.component.scss']
})
export class DiscoveryCardComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) route: any[] = [];
  @Input() imgUrl?: string;
  @Input() variant: DiscoveryVariant = DiscoveryVariant.Continent;
}
