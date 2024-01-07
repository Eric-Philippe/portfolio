import ProjectData from "../models/ProjectData";

// @ts-ignore
import projectData from "../../projects.json";
import { FULLSTACK, Tags, getTagsFromString } from "./Tags";

/**
 * Project class
 * @class
 * @classdesc This class represents a project
 * @param {ProjectData} data - The data of the project fetched from the JSON file
 */
class Project {
  private _filename: string;
  private html_content: string;
  public title: string = "";
  public shortDesc: string = "";
  public tags: Tags = FULLSTACK;
  public techs: string[] = [];
  public date: string = "";
  public github: string = "";
  public previewLink: string = "";

  constructor(data: ProjectData) {
    this._filename = data.filename;
    this.html_content = data.html_content;
    this.getAttributes();
  }

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

  public get filename(): string {
    return this._filename;
  }

  public get html() {
    const parsedHTML = new DOMParser().parseFromString(
      this.html_content,
      "text/html"
    );

    const bodyContent = parsedHTML.body.innerHTML;

    return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
  }
}

const projects: Project[] = projectData.map((project: ProjectData) => {
  return new Project(project);
});

export default projects;
