import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../services/home.service';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
UserDetials: any = [];
  constructor(private homeService: HomeService, private http: HttpClient, public loadingController: LoadingController) {this.getUsersList(); }

  usersList: any[] = [];
  async getUsersList() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    this.http.get('https://randomuser.me/api/?results=10').subscribe(data => {
      this.usersList = data["results"];
      loading.dismiss();
    });
  }
}

