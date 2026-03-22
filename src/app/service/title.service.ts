import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private _title = signal<string>('');
  public title = this._title.asReadonly();

  setTitle(newTitle: string) {
    this._title.set(newTitle);
  }
}
