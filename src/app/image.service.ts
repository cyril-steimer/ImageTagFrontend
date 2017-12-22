import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { of } from 'rxjs/observable/of'
import { Observable } from 'rxjs/Observable'
import { catchError } from 'rxjs/operators'

import { Image, ImageQuery } from './image'
import { MessageService } from './message.service'

@Injectable()
export class ImageService {

  private imageUrl = '/api/v1/images'

  private imageDataUrl = '/api/v1/imagedata'

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getAllImages(start: number, count: number, query?: ImageQuery): Observable<Image[]> {
    let url = `${this.imageUrl}?start=${start}&count=${count}`
    var observable: Observable<Image[]>
    if (query != null) {
      observable = this.http.post<Image[]>(url, query, {})
    } else {
      observable = this.http.get<Image[]>(url)
    }
    return observable
      .pipe(
        catchError(this.handleError(null, []))
      )
  }

  getImageById(id: string): Observable<Image> {
    let url = `${this.imageUrl}/id/${id}`
    return this.http.get<Image>(url)
      .pipe(
        catchError(this.handleError<Image>())
      )
  }

  updateImage(image: Image): Observable<any> {
    return this.http.put(this.imageUrl, image, {})
      .pipe(
        catchError(this.handleError())
      )
  }

  uploadImage(file: File, tags: string[]): Observable<any> {
    let url = this.createUploadImageUrl(tags)
    let headers = new HttpHeaders({
      'fileName': file.name
    })
    let error = `Image file '${file.name}' already exists and can't be uploaded again`
    return this.http.put(url, file, { headers: headers })
      .pipe(
        catchError(this.handleError(error))
      )
  }

  private createUploadImageUrl(tags: string[]): string {
    let url = `${this.imageUrl}/upload`
    let queryChar = '?'
    for (let tag of tags) {
      url = `${url}${queryChar}tag=${tag}`
      queryChar = '&'
    }
    return url
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (message?: string, result?: T) {
    return (error: any): Observable<T> => {
    
      let msg = message == null ? error.message : message
      this.messageService.error(msg)
      if (result != null) {
        return of(result);
      }
      Observable.throw(error)
    };
  }
}
