import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryVariant } from '../../../shared/enums/card-variant';

@Component({
  selector: 'app-skeleton-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.scss']
})
export class SkeletonCardComponent {
  protected readonly DiscoveryVariant = DiscoveryVariant;
  @Input() variant: DiscoveryVariant = DiscoveryVariant.Continent;
}
