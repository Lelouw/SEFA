import { Component, Inject , OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogModel } from './confirmation-dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

    title: string;
    message: string;
   
    constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogModel) {
        this.title = data.title;
      this.message = data.message;
    }
    ngOnInit() {
      
    }
    onConfirm(): void {
        this.dialogRef.close(true);
    }

    onDismiss(): void {
        this.dialogRef.close(false);
    }

}

