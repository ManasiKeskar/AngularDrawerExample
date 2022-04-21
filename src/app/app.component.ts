import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from './DialogData';
import { ModalComponent } from './modal/modal.component';
// import { AngularDialogComponent } from './angular-dialog/angular-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animal!: string;
  name!: string;
  showDialog = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width:'80rem',
      height: '100%',
      panelClass: 'my-outlined-dialog',
      data: { name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }


  // ngOnInit() {
  //   this.dialogRef
  // }
}