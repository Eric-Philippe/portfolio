import AlbumData from "../models/AlbumData";

// @ts-ignore
import data from "../../albums.json";
// @ts-ignore
const albumData: AlbumData[] = data;

const NOT_FOUND = "NOT_FOUND";

/**
 * Album class
 * @class
 * @classdesc This class represents an album
 * @param {AlbumData} data - The data of the album fetched from the JSON file
 */
export class Album {
  /**  The title of the album */
  public title: string = "";
  /** The short title of the album */
  public shortTitle: string = "";
  /** The short description of the album */
  public shortDesc: string = "";
  /** The date of the album */
  public date: string = "";
  /** The camera used for the album */
  public camera: string = "";
  /** The phone used */
  private _phone: string = "";
  /** The lens used for the album */
  public lenses: string[] = [];
  /** The preview img link of the album */
  public previewImgOne: string = "";
  /** The full content */
  public content: string = "";

  constructor(data: AlbumData) {
    this.title = data.title;
    this.shortTitle = data.shortTitle;
    this.shortDesc = data.shortDesc;
    this.date = data.date;
    this.camera = data.camera;
    this._phone = data.phone;
    this.lenses = data.lenses.flat();
    this.previewImgOne = data.previewImgOne;
    this.content = data.content;
  }

  public getPhotoCount(): number {
    return (this.content.match(/<img/g) || []).length + 3;
  }

  public getCameraImg(): string {
    return this.camera.includes("800") ? "canon_800d.png" : "sony_a380.png";
  }

  public get phone() {
    return this._phone === NOT_FOUND ? null : this._phone;
  }

  public getPhoneName() {
    const regex = /Z\s*Fold\s*4/;
    const phone = this.phone?.match(regex);
    return phone ? "Galaxy ZFold4." : "";
  }

  public getCameraName(): string {
    const regex = /800D/;
    const camera = this.camera.match(regex);
    return camera ? "Canon 800D." : "Sony A380.";
  }

  public getLensesNames(): string[] {
    const regex = /\d{2,3}mm/;
    // If the match is 18mm we return "18-55mm f/3.5-5.6"
    // If the match is 55mm we return "18-55mm  f/4.5-5.6"
    // If the match is 300mm we return "70-300mm f/4-5.6"
    const lenses = this.lenses.map((lens) => {
      const match = lens.match(regex);
      if (match) {
        const mm = match[0];
        if (mm === "18mm") {
          return "10-18mm f/4.5-5.6";
        } else if (mm === "55mm") {
          return "18-55mm f/3.5-5.6";
        } else if (mm === "300mm") {
          return "70-300mm f/4-5.6";
        }
      }
      return "ERROR";
    });

    return lenses;
  }

  public getPhoneImg() {
    return this.phone ? "fold4.png" : "";
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
