import os
import json

from parser.Converter import Converter
from parser.Parser import Parser

from Project import Project, project_fiels


blankPj = Project()
DevParser  = Parser(project_fiels, "DevProjectsParser")

# converter = Converter(DevParser, "_projects/1.Portfolio.md", Project.convertToListAttributes())
# print(converter.convert())

def write_json_file(data: dict, json_file_path: str):
    """
    Function: write_json_file
    ----------------------------
    Writes the data into a json file
    ----------------------------
    data: dict
        The data to write
    json_file_path: str
        The path of the json file to create
    ----------------------------
    """
    with open(json_file_path, 'w') as f:
        json.dump(data, f, indent=4)

def convert_all_dev_md_to_dict(input_folder: str):
    """
    Function: convert_all_dev_md_to_json
    ----------------------------
    Converts all the markdown files in the input_folder into a json file
    ----------------------------
    input_folder: str
        The folder containing the markdown files
    json_file_path: str
        The path of the json file to create
    ----------------------------
    """
    projects: list[Project] = []
    
    for filename in sorted(os.listdir(input_folder)):
        if filename.endswith(".md") and not filename.startswith("_"):
            md_file_path = os.path.join(input_folder, filename)
            converter = Converter(DevParser, md_file_path, Project.convertToListAttributes())
            projects.append(Project().fill_fields(converter.convert()))
            
    print(f'Converted {len(projects)} Markdown Portfolio Projects files to JSON')
    return [project.__dict__ for project in projects]
    
dev_data = convert_all_dev_md_to_dict("_projects")

final_dict = {"projects": dev_data}

write_json_file(final_dict, "data.json")