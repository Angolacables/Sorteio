import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";
import { CandidatarSorteiroComponent } from './candidatar-sorteiro/candidatar-sorteiro.component';
import { VencerdorSorteioComponent } from './vencerdor-sorteio/vencerdor-sorteio.component';

const routes: Routes = [ 
  {path:'', component:CandidatarSorteiroComponent},
  {
    path: 'acvencedorsorteio',
    component: VencerdorSorteioComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
  providers: [

   { provide: APP_BASE_HREF, useValue: '!' },
   

   ]
})
export class AppRoutingModule { }
