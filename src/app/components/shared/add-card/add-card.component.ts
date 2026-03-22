import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CardVariant } from '../../../shared/enums/card-variant';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {
  @Input({ required: true }) label: string = '';
  @Input() variant: CardVariant = CardVariant.Small;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
