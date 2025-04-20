import { Injectable, signal } from '@angular/core';

export type AlertType = 'success' | 'error' | 'info';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _alert = signal<{ type: AlertType; message: string } | null>(null);

  alert = this._alert.asReadonly();

  show(type: 'success' | 'error' | 'info' = 'info', message: string) {
    this._alert.set({ type,  message });
  }

  clear() {
    this._alert.set(null);
  }
}
