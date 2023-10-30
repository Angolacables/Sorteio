import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-sorteio-modal',
  templateUrl: './sorteio-modal.component.html',
  styleUrls: ['./sorteio-modal.component.scss']
})
export class SorteioModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<SorteioModalComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
