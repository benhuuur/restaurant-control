import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCreateData } from '../../dto/product-create-data';
import { ProductsService } from '../../services/products-service.service';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client-service.service';
import { ProductData } from '../../dto/product-data';
import { ImageService } from '../../services/image-service.service';
@Component({
  selector: 'app-adm-products-management-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adm-products-management-screen.component.html',
  styleUrl: './adm-products-management-screen.component.css',
})
export class AdmProductsManagementScreenComponent {
  constructor(
    private product: ProductsService,
    private router: Router,
    private client: ClientService,
    private image: ImageService
  ) {}

  products: ProductData[] = [];

  ngOnInit(): void {
    // this.client.validateAdm(
    //   { data: sessionStorage.getItem('jwt') },
    //   (response: any) => {},
    //   (error: any) => {
    //     this.router.navigate(['']);
    //   }
    // );
    this.product.getProducts('', (response: any) => {
      this.products = response.products;
    });
  }

  img: FileList | null = null;

  newProduct: ProductCreateData = {
    name: '',
    description: '',
    type: '',
    price: null,
    picture: null,
  };

  create() {
    this.addImage(this.img);
    this.product.create(this.newProduct, (response: any) => this.ngOnInit());
  }

  addImage = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.image.add(formData, (response: any) => {
      console.log(response.id);
      this.newProduct.picture = response.id;
    });
  };

  uploadFile(files: any) {
    this.img = files;
  }
}
