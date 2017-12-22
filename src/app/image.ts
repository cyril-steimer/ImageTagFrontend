export class Image {
    id: string
    type: string
    tags: string[]
    creationDate: number
}

export class ImageQuery { }

export class TagImageQuery extends ImageQuery { 
    tag: string

    constructor(tag: string) {
        super()
        this.tag = tag
    }
}