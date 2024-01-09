import ProjectData from "../models/ProjectData";
import { FULLSTACK, Tags, getTagsFromString } from "./Tags";

// @ts-ignore
import projectData from "../../projects.json";

/**
 * Project class
 * @class
 * @classdesc This class represents a project
 * @param {ProjectData} data - The data of the project fetched from the JSON file
 */
class Project {
  /**  The original filename where the project has been extracted */
  private _filename: string;
  /** The HTML content of the project */
  private html_content: string;
  /** The title of the project */
  public title: string = "";
  /** The short description of the project */
  public shortDesc: string = "";
  /** The tags of the project */
  public tags: Tags = FULLSTACK;
  /** The technologies used in the project */
  public techs: string[] = [];
  /** The date of the project */
  public date: string = "";
  /** The github link of the project */
  public github: string = "";
  /** The preview img link of the project */
  public previewLink: string = "";

  /**
   * Build a new Project
   * @param data - The data of the project fetched from the JSON file
   */
  constructor(data: ProjectData) {
    this._filename = data.filename;
    this.html_content = data.html_content;
    this.getAttributes();
  }

  /**
   * Get the attributes of the project from the HTML content
   */
  private getAttributes() {
    // The title is between <h1> tags
    const title = this.html_content.match(/<h1>(.*)<\/h1>/);
    if (title) this.title = title[1];

    // The short description is the first paragraph of the project
    const shortDesc = this.html_content.match(/<p>(.*)<\/p>/);
    if (shortDesc) this.shortDesc = shortDesc[1];

    // The tag is the second paragraph of the project
    const tagsMatch = this.html_content.match(/<p>(.*)<\/p>/g);
    if (tagsMatch) {
      let tag = tagsMatch[1].replace(/<p>/, "").replace(/<\/p>/, "");
      this.tags = getTagsFromString(tag);
    }

    // Techs
    const expression = /<p>\| Technologies \|[\s\S]*?\|<\/p>/;
    const match = this.html_content.match(expression);

    if (match) {
      const expression = /\| ([^\n\|]+) \|/g;

      const technologies = [];

      let correspondance;
      while ((correspondance = expression.exec(match[0])) !== null) {
        technologies.push(correspondance[1].trim());
      }

      technologies.shift();
      technologies.shift();

      this.techs = technologies;
    }

    // The date is between <h4> tags
    const date = this.html_content.match(/<h4>(.*)<\/h4>/);
    if (date) this.date = date[1];

    // The github looks like this : <p><a href=\"https://github.com/Eric-Philippe/portfolio\">Lien Github</a>
    const github = this.html_content.match(
      /<p><a href=\"(.*)\">Lien Github<\/a>/
    );

    if (github) this.github = github[1];

    // the preview link looks like this : <img src=\"https://raw.githubusercontent.com/Eric-Philippe/portfolio/main/res/image.png\" alt=\"preview\" />
    const regex = /https?:\/\/[^\s]+\.png/g;
    const matches = this.html_content.match(regex);

    if (matches) this.previewLink = matches[0];
  }

  /**
   * Get the filename of the project
   * @returns {string} - The filename of the project
   */
  public get filename(): string {
    return this._filename;
  }

  /**
   * Get the HTML content of the project
   * @returns {string} - The HTML content of the project
   */
  public get html() {
    const parsedHTML = new DOMParser().parseFromString(
      this.html_content,
      "text/html"
    );

    const bodyContent = parsedHTML.body.innerHTML;

    return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
  }
}

/**
 * The list of projects fetched from the JSON file, generated from the .md files
 */
const projects: Project[] = projectData.map((project: ProjectData) => {
  return new Project(project);
});

export default projects;
