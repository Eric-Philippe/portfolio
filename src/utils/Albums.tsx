import AlbumData from "../models/AlbumData";

// @ts-ignore
import data from "../../albums.json";
// @ts-ignore
const albumData: AlbumData[] = data;

/**
 * Album class
 * @class
 * @classdesc This class represents an album
 * @param {AlbumData} data - The data of the album fetched from the JSON file
 */
export class Album {
  /**  The title of the album */
  public title: string = "";
  /** The short description of the album */
  public shortDesc: string = "";
  /** The date of the album */
  public date: string = "";
  /** The camera used for the album */
  public camera: string = "";
  /** The lens used for the album */
  public lenses: string[] = [];
  /** The preview img link of the album */
  public previewImgOne: string = "";
  /** The second preview img link of the album */
  public previewImgTwo: string = "";
  /** The third preview img link of the album */
  public previewImgThree: string = "";
  /** The full content */
  public content: string = "";

  constructor(data: AlbumData) {
    this.title = data.title;
    this.shortDesc = data.shortDesc;
    this.date = data.date;
    this.camera = data.camera;
    this.lenses = data.lenses.flat();
    this.previewImgOne = data.previewImgOne;
    this.previewImgTwo = data.previewImgTwo;
    this.previewImgThree = data.previewImgThree;
    this.content = data.content;
  }

  public getPhotoCount(): number {
    return (this.content.match(/<img/g) || []).length + 3;
  }

  public getYear(): string {
    const regex = /\d{4}/;
    const year = this.date.match(regex);
    return year ? year[0] : "";
  }
}

/**
 * The list of albums fetched from the JSON file, generated from the .md files
 */
const albums: Album[] = albumData.map((album: AlbumData) => {
  return new Album(album);
});

export default albums;
