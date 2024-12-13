import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  get link(): string {
    return this._link;
  }
  set link(link: string) {
    this._link=link;
  }
  private _link='';

  get type(): string {
    return this._type;
  }
  set type(type: string) {
    this._type=type;
  }
  private _type='';
}
