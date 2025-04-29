import { Component } from '@angular/core';
// Importar el servicio de la funcionalidad de la foto
import { PhotoService } from "../services/photo.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(public photoService:PhotoService) {}
    addPhotoToGallery(){
      this.photoService.addNewToGallery();
    }
    async ngOnInit() {
      await this.photoService.loadSaved();
    }

}
