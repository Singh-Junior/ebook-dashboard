import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalAlertComponent } from "./components/global-alert.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalAlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'ebook-dashboard';
}
