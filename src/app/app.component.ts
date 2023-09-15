import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'; // Import MatDialog
import { ModalComponent } from './modal/modal.component';
import { AiApiService } from './ai-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'realityEngine';
  constructor(private _dialog: MatDialog, private _aiApi: AiApiService) { } // Inject the MatDialog service

  showText(title: string) {
    if (title !== '') {
      // Call the API service with the search text
      this._aiApi.searchContent(title).subscribe(
        (res: any) => {
          // Open the modal with the API response
          this.openModal(res.response);
        },
        (error: any) => {
          console.error('API request failed:', error);
          this.openModal('API request failed. Please try again later.');
        }
      );
    } else {
      this.openModal('Fill the text first!!!');
    }
  }

  openModal(message: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '250px';
    dialogConfig.data = { message };
    dialogConfig.position = {
      top: '0', // Adjust the top position to open above the search text box
    };

    const dialogRef = this._dialog.open(ModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Modal closed');
    });
  }
}
