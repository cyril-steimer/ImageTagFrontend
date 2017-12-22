import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ImageDetailComponent } from './image-detail/image-detail.component'
import { ImageManagerComponent } from './image-manager/image-manager.component'
import { ImageUploadComponent } from './image-upload/image-upload.component'
import { ImageDashboardComponent } from './image-dashboard/image-dashboard.component'

const routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ImageDashboardComponent },
  { path: 'dashboard/tag/:tag', component: ImageDashboardComponent },
  { path: 'manage', component: ImageManagerComponent },
  { path: 'detail/:id', component: ImageDetailComponent },
  { path: 'manage/upload', component: ImageUploadComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}