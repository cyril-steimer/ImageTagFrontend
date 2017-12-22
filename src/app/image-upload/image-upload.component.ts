import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  tags: string[] = []

  constructor(
    private imageService: ImageService,
    private location: Location) { }

  ngOnInit() {
  }

  trackByIndex(index: number, tag: string): number {
    return index
  }

  deleteTag(index: number): void {
    this.tags.splice(index, 1)
  }

  addTag(tag: string): void {
    this.tags.push(tag)
  }

  uploadImage(files: FileList) {
    if (files.length > 0) {
      var file = files[0]
      this.imageService.uploadImage(file, this.tags)
        .subscribe(() => this.back())
    }
  }
  
  back() {
    this.location.back()
  }
}
