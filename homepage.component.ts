import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const configDia=new MatDialogConfig();
    configDia.width="80%";
    configDia.autoFocus=true;
    configDia.disableClose=true;
    this.dialog.open(LoginComponent,configDia)
  }
}
