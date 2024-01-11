import ProjectData from "../models/ProjectData";
import { FULLSTACK, Tags, getTagsFromString } from "./Tags";

// @ts-ignore
import data from "../../data.json";
// @ts-ignore
const projectData: ProjectData[] = data.projects;

/**
 * Project class
 * @class
 * @classdesc This class represents a project
 * @param {ProjectData} data - The data of the project fetched from the JSON file
 */
export class Project {
  /** The title of the project */
  public title: string = "";
  /** The short description of the project */
  public shortDesc: string = "";
  /** The tags of the project */
  public tag: Tags = FULLSTACK;
  /** The technologies used in the project */
  public techs: string[] = [];
  /** The date of the project */
  public date: string = "";
  /** The github link of the project */
  public gitLink: string = "";
  /** The preview img link of the project */
  public previewImg: string = "";
  /** The full content */
  public content: string = "";

  /**
   * Build a new Project
   * @param data - The data of the project fetched from the JSON file
   */
  constructor(data: ProjectData) {
    this.title = data.title;
    this.shortDesc = data.shortDesc;
    this.tag = getTagsFromString(data.tag);
    this.techs = data.techs;
    this.date = data.date;
    this.gitLink = data.gitLink;
    this.previewImg = data.previewImg;
    this.content = data.content;
  }
}

/**
 * The list of projects fetched from the JSON file, generated from the .md files
 */
const projects: Project[] = projectData.map((project: ProjectData) => {
  return new Project(project);
});

export default projects;
