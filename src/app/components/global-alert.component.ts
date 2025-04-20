import { Component, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-global-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-alert.component.html',
  styleUrls: ['./global-alert.component.css'],
})
export class GlobalAlertComponent {
  alert: typeof this.alertService.alert;

  constructor(public  alertService: AlertService) {
    this.alert = this.alertService.alert;

    effect(() => {
      if (this.alertService.alert()) {
        const timer = setTimeout(() => this.alertService.clear(), 3000);
        return () => clearTimeout(timer);
      }
      return;
    });
  }


  colorClass = computed(() => {
    const type = this.alert()?.type;
    if (type === 'success') return 'bg-green-500 text-white';
    if (type === 'error') return 'bg-red-500 text-white';
    if (type === 'info') return 'bg-blue-500 text-white';
    return '';
  });


  closeAlert() {
    this.alertService.clear();
  }

  positionClass = computed(() => {
    const type = this.alert()?.type;
    if (type === 'success') return 'top-5 left-1/2 transform -translate-x-1/2';
    if (type === 'error') return 'bottom-5 left-5 w-max';
    if (type === 'info') return 'bottom-5 right-5 w-max';
    return '';
  });

}
