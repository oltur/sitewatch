import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ABTestsListComponent } from './abtests/abtests-list.component';
import { DataService } from 'app/services/data.service';
import { ActionsListComponent } from './actions/actions-list.component';
import { CalculatedAttributesListComponent } from './calculated-attributes/calculated-attributes-list.component';
import { CategoriesListComponent } from './categories/categories-list.component';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ABTestsListComponent,
    ActionsListComponent,
    CalculatedAttributesListComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TreeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
