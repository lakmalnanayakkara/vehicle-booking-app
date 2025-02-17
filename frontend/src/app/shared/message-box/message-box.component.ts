import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  standalone: false,
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.css',
})
export class MessageBoxComponent {
  @Input() variant = '';
  @Input() message = '';
}
