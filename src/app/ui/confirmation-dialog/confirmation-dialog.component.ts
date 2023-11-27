import { Component, Inject , OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogModel } from './confirmation-dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

    title: string;
    message: string;
   
    constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,private router: Router ,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogModel) {
        this.title = data.title;
      this.message = data.message;
    }
    ngOnInit() {
      
    }
    onConfirm(): void {
        //this.dialogRef.close(true);
        window.location.reload(); 
        this.router.navigate(['/contacts/view-contacts']); 
    }

    onDismiss(): void {
        this.dialogRef.close(false);
    }

}

