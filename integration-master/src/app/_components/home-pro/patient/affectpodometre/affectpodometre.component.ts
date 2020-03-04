import {Component, Inject, Input, OnInit, SimpleChanges} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef,MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {PatientService} from "../../../../_services/patient.service";
import {DeviceDto} from "../../../../dto/DeviceDto";
import {Request} from "../../../../dto";
import {PatientDeviceDto} from "../../../../dto/PatientDeviceDto";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {first, map} from "rxjs/operators";

@Component({
  selector: 'app-affectpodometre',
  templateUrl: './affectpodometre.component.html',
  styleUrls: ['./affectpodometre.component.css']
})
export class AffectpodometreComponent implements OnInit{
  @Input() id: string;
  devices : DeviceDto []
  pod;
  patientId;
  birthday: string = "";
  po : PatientDeviceDto[];
  hiden_affecter = true;
  model;
  type
  idDevice


  ngOnInit(){


  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.id)

    this.patientId = this.id
    this.available_device()



  }

  getBirthday(event: MatDatepickerInputEvent<Date>) {
    const d = new Date(event.value);
    console.log(d)

    let date = d.getDate();
    let jr = date.toString()
    if(date>9){

    }else{
      jr= "0"+date
    }
    console.log(jr)
    const month = d.getMonth() + 1; // Be careful! January is 0 not 1
    let mois = month.toString()
    if(month>9){

    }else{
      mois= "0"+month
    }
    const year = d.getFullYear();

    this.birthday = year + '-' + mois + '-' + jr;
    console.log(this.birthday)
  }
  constructor(private router : Router, private route : ActivatedRoute, private patientService : PatientService)
    {

    }
 available_device(){
    this.patientService.getPodosavailable(this.patientId).subscribe(rep => {
      if(rep) {
        console.log(rep)
        this.devices = JSON.parse(JSON.stringify(rep)).object
        if (this.devices instanceof Array) {
          this.hiden_affecter = false

      }else {
          this.hiden_affecter = true
          let patientDeviceDto = JSON.parse(JSON.stringify(this.devices["patientDevices"]))
          this.model = this.devices["deviceCode"]
          this.type =this.devices["type"]
          this.idDevice = this.devices["id"]

          console.log(patientDeviceDto[0].returnDate)
        }


      }

    },error => {
      console.log(error)
    })

 }
  recuperer (id: string){
    let deviceDto = new DeviceDto(id,null,null,null,null,null,null,null,null,null)
    let request = new Request(deviceDto)
    this.patientService.recup_podo(request).pipe(first()).subscribe(reponse =>{
      console.log(reponse)
    })

  }


  affect(deviceId : string, idpat: string){
    console.log(deviceId)
    let currentUser = localStorage.getItem("currentUser")
    let id_pro = JSON.parse(currentUser).id

    this.po = [new PatientDeviceDto(null,null,this.birthday,id_pro,idpat,null)]
    let device = new DeviceDto(deviceId,null,null,
      null,null,null,null,null,
      null,this.po)
    let req = new Request(device)
    console.log(req)
    this.patientService.affectPodo(req).subscribe(
      reponse => {
        console.log(reponse)

      }, error => {
            console.log(error)
      }
    )

  }



}
