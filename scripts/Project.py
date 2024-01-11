"""
This file contains the Project class, which is used to store the data of a project.
"""

# Enum: Tags {FRONTEND, BACKEND, FULLSTACK}
import re


TAGS = ['FRONTEND', 'BACKEND', 'FULLSTACK', "BOT", "CHALLENGE"]

"""
Title: str
ShortDesc: str
Techs: List[str]
GitLink: str
Date: str
Tag: Tags
PreviewImg: str
Content: str
"""
class Project():
    def __init__(self):
        self.title = None
        self.shortDesc = None
        self.techs = None
        self.gitLink = None
        self.date = None
        self.tag = None
        self.previewImg = None
        self.content = None
        
        if len(Project.convertToListAttributes()) != len(project_fiels): raise Exception("The number of fields in the parser and the number of fields in the final object must be the same")
        
    def convertToListAttributes():
        return ["title", "shortDesc", "techs", "gitLink", "date", "tag", "previewImg", "content"]
       
    def fill_fields(self, dict_to_fill: dict):
        for i, field in enumerate(Project.convertToListAttributes()):
            if field in dict_to_fill:
                setattr(self, field, dict_to_fill[field])
                
        return self
    
    def extract_techs(self, techs: str):
        """
        If techs is a md array with the syntax:
        ```md
        - tech1
        - tech2
        ```
        Then it will return a list of the techs (["tech1", "tech2"])
        
        If techs is a string with the syntax:
        ```md
        | Name |
        |------|
        | tech1 |
        | tech2 |
        ```
        Then it will return a list of the techs (["tech1", "tech2"])
        """
        if techs is None: return []
        
        # Check if techs is a markdown list
        if re.match(r'- (.*)', techs):
            return re.findall(r'- (.*)', techs)
        
        # Check if techs is a markdown table
        elif re.match(r'\| (.*) \|', techs):
            # Skip the first two matches as they are the table header and separator
            return re.findall(r'\| (.*) \|', techs)[2:]
        
        else:
            return []
       
    
    def __setattr__(self, __name: str, __value: str) -> None:
        if __value is None: return
        if __name == "title":
            self.__dict__["title"] = __value
        elif __name == "shortDesc":
            self.__dict__["shortDesc"] = __value
        elif __name == "techs":
            self.__dict__["techs"] = [tech.strip() for tech in self.extract_techs(__value)]
        elif __name == "gitLink":
            if re.match(r'(http|https)://(.*)', __value):
                self.__dict__["gitLink"] = __value
            else:
                raise Exception("The git link " + __value + " is not a valid link")
        elif __name == "date":
            self.__dict__["date"] = __value
        elif __name == "tag":
            if __value.upper() in TAGS:
                self.__dict__["tag"] = __value.upper()
            else:
                raise Exception("The tag " + __value + " does not exist")
        elif __name == "previewImg":
            if re.match(r'(http|https)://(.*)', __value):
                self.__dict__["previewImg"] = __value
            else:
                raise Exception("The preview image " + __value + " is not a valid link")
        elif __name == "content":
            self.__dict__["content"] = __value
        else:
            raise Exception("The attribute " + __name + " does not exist in the Project class")
        
    def __str__(self) -> str:
        return "Title: " + str(self.title) + "\nShortDesc: " + str(self.shortDesc) + "\nTechs: " + str(self.techs) + "\nGitLink: " + str(self.gitLink) + "\nDate: " + str(self.date) + "\nTag: " + str(self.tag) + "\nPreviewImg: " + str(self.previewImg) + "\nContent: " + str(self.content)
    
    def to_dict(self):
        return {
            "title": self.title,
            "shortDesc": self.shortDesc,
            "techs": self.techs,
            "gitLink": self.gitLink,
            "date": self.date,
            "tag": self.tag,
            "previewImg": self.previewImg,
            "content": self.content
        }
    
project_fiels = [
    ["Titre", "Title"],
    ["Résumé", "Aperçu", "Intro", "Introduction", "Présentation"],
    ["Technologies", "Technos", "Techs", "Tools"],
    ["Lien GitHub", "Lien Git", "Lien vers Git"],
    ["Date", "Création", "Créé", "Créé le", "Date de création"],
    ["Tag", "Tags"],
    ["Image", "Image de prévisualisation", "Image de preview", "Preview", "Preview image"],
    ["Contenu", "Contenu du projet", "Description", "Description du projet"]
]