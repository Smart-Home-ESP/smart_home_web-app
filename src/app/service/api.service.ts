import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }
  public getDevices(roomID: number){
    const params = new HttpParams().set('roomID', String(roomID));
    return this.httpClient.get(environment.serverURL + `/getDevices`, {params});
  }

  public getAllDevices(){
    return this.httpClient.get(environment.serverURL + `/devices`);
  }


  public addDevice(setSerial: number, deviceType: string, setName: string, roomID: number){
    const message = {
      serial: setSerial,
      deviceType: deviceType,
      deviceName: setName,
      roomID: roomID
    };
    this.httpClient.post(environment.serverURL + `/addDevice`, message).subscribe(data => console.log(data));
  }

  public deleteDevice(setSerial: number){
    const message = {
      serial: setSerial
    };
    this.httpClient.post(environment.serverURL + `/deleteDevice`, message).subscribe(data => console.log(data));
  }

}
