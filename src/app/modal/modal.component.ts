import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  isModalOpen: boolean = true; // Initially, the modal is open

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {}

  closeModal(): void {
    this.isModalOpen = false; // Set the flag to false when the modal is closed
    this.dialogRef.close();
  }
}

