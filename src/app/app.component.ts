import { Component } from '@angular/core';
import { NativeBridgeService } from 'src/services/native-bridge.service';
import { WindowService } from 'src/services/window.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-flutter-bridge-example';

  constructor(private nativeBridgeService: NativeBridgeService,
    private windowService: WindowService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.windowService.getContainer().openDialog = () => {
      this.openDialog();
    }
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  openNativeDialog() {
    this.nativeBridgeService.openDialog({ 'title': 'Native Dialog Opened From Angular' });
  }

  openNativeSnackbar() {
    this.nativeBridgeService.showSnackbar('Message from Angular!');
  }
}
