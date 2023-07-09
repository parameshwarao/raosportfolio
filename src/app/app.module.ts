import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


import { personalProjectsComponent } from './personal-projects/personal-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    personalProjectsComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      {path:'about',component: AboutComponent},
      {path:'personalProjects',component: personalProjectsComponent},
          
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '*', component: HomeComponent },
      { path: '**', component: HomeComponent }   
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
