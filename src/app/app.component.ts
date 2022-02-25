import { Component } from '@angular/core';
import { NativeBridgeService } from 'src/services/native-bridge.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-flutter-bridge-example';

  constructor(private nativeBridgeService: NativeBridgeService) { }


  closeWebView() {
    this.nativeBridgeService.closeWebView();
  }
}
