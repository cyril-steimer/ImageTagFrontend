import { Observable } from "rxjs/Observable";
import { of } from 'rxjs/observable/of'

import { Image, ImageQuery } from './image'
import { ImageService } from "./image.service"

export class Paginator {

    private start = 0
    private pageSize: number

    private imageService: ImageService

    private imageConsumer: (images: Image[]) => void
    private querySupplier: () => ImageQuery

    constructor(
        pageSize: number, 
        imageService: ImageService,
        imageConsumer: (images: Image[]) => void,
        querySupplier?: () => ImageQuery) {
        this.pageSize = pageSize
        this.imageService = imageService
        this.imageConsumer = imageConsumer
        this.querySupplier = querySupplier
    }

    getLength(): number { 
        //TODO Somehow provide this through the web API...
        return 1000
    }

    setPageSize(pageSize: number) {
        this.pageSize = pageSize
    }

    canLoadPrevious(): boolean {
        return this.start >= this.pageSize;
    }

    canLoadNext(): boolean {
        //TODO
        return true
    }

    loadPage(page: number) {
        this.start = page * this.pageSize
        this.loadImages()
    }

    loadImages() {
        return this.imageService.getAllImages(this.start, this.pageSize, this.getQuery())
            .subscribe(this.imageConsumer)
    }

    private getQuery(): ImageQuery {
        return this.querySupplier == null ? null : this.querySupplier()
    }
}