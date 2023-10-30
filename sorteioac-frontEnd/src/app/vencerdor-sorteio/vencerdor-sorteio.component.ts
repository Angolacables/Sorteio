import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicServiceService } from '../service/public-service.service';

@Component({
  selector: 'app-vencerdor-sorteio',
  templateUrl: './vencerdor-sorteio.component.html',
  styleUrls: ['./vencerdor-sorteio.component.scss']
})
export class VencerdorSorteioComponent {
  loading: boolean = false;
  nome: any;
  email: any;
  phone:any;
  value: any;
  vencedor:boolean = false;
  constructor(private http: HttpClient,
    private service: PublicServiceService) { }

  ngOnInit(): void {


  }
  ObterVencedor() {

    this.loading = true; // Set loading to true when API call is initiated

    this.service.getVencedor().subscribe(

      (data) => {

        this.vencedor = true;
        this.value = data.token;
        this.phone = data.contacto;
        this.email = data.email;
        this.nome= data.username;
        // console.log(data);

      },

      (error) => {

        console.error('Error loading data', error);

      },

      () => {

        this.loading = false; //

      }

    );

  }
}
