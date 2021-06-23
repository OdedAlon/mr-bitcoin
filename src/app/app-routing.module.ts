import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: 'statistic', component: StatisticPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'contact/edit/:id', component: ContactEditPageComponent,
  resolve: {contact: ContactResolverService} },
  { path: 'contact/edit', component: ContactEditPageComponent },
  { path: 'contact/:id', component: ContactDetailsPageComponent,
  resolve: {contact: ContactResolverService} },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
