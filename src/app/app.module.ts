import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatCardModule, MatIconModule, MatGridListModule, MatToolbarModule, MatPaginatorModule, MatSelectModule } from '@angular/material'


import { AppComponent } from './app.component';
import { ImageManagerComponent } from './image-manager/image-manager.component';
import { ImageService } from './image.service';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MessageService } from './message.service';
import { ImageDashboardComponent } from './image-dashboard/image-dashboard.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageManagerComponent,
    ImageDetailComponent,
    ImageUploadComponent,
    ImageDashboardComponent,
    AdvancedSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [ImageService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
