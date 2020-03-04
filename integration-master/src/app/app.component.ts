import {Component, SimpleChanges} from '@angular/core';
import { environment } from 'src/environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'IPOD-SANTE';
  currentRole = localStorage.getItem("currentRole")

  constructor (private router : Router){




  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {


  }


}
