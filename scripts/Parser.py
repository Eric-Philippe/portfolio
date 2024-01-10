import os
import re

class Parser:
    """
    Create a new Parser object
    ----------------------------
    Give it a list of fields that the parser will remember and use
    Each fields can be different subfields [[Introduction, Presentation, Summary], [Techs, Technologies, Tools]]
    """
    def __init__(self, fields: list[list[str]], parseName: str = "None_Parser"):
        self.fields = fields
        if not self.checkInputFieldsValidity():
            raise Exception('Invalid fields given to the parser ' + parseName)
        
    def get_fields(self) -> list[list[str]]:
        """
        Function: get_fields
        ----------------------------
        Returns the fields of the parser
        """
        return self.fields
                
    def checkInputFieldsValidity(self) -> bool:
        """
        Function: checkInputFieldsValidity
        ----------------------------
        Checks if the fields are valid
        A field is a valid if there is at least one subfield, and that a subfield appears at least once in all the fields
        """
        return all(field and all(subfield for subfield in field) for field in self.fields) and len(set(subfield for field in self.fields for subfield in field)) == len([subfield for field in self.fields for subfield in field])

                        
    def checkFields(self, md_content: str) -> bool:
        """
        Function: checkFields
        ----------------------------
        Checks if all the fields are present in a md content
        A field is checked if we can find a line that starts with at least one or more # and the field name
        """
        for field in self.fields:
            if not any([Parser.checkField(md_content, subfield) for subfield in field]):
                # Return the first missing field
                return field[0]
            
        return True
    
    def checkField(md_content: str, field: str) -> bool:
        """
        Function: checkField
        ----------------------------
        Checks if a field is present in a md content
        A field is checked if we can find a line that starts with at least one or more # and the field name
        """
        
        regexTitle = "(#+)\s" + field + "\s"
        regexLink = "\[" + field + "\](.+)\s"
        return re.search(regexTitle, md_content) != None or re.search(regexLink, md_content) != None
        
    
    def checkFileIntegrity(file_name: str) -> str:
        """
        Function: checkFileIntegrity
        ----------------------------
        Checks if the file exists and is a markdown file. 
        If it is, it returns the content of the file.
        ----------------------------
        file_name: str
            The name of the file to check
        ----------------------------
        Returns: str
            The content of the file
        ----------------------------
        Raises: Exception
            If the file does not exist
            If the file is not a markdown file
            If there is an error reading the file
        """
        if file_name[-3:] != '.md':
            raise Exception('File ' + file_name + ' is not a markdown file')
        
        if not os.path.isfile(file_name):
            raise Exception("File " + file_name + " does not exist")
        
        try:
            with open(file_name, 'r') as file:
                content = file.read()
                return content
        except:
            raise Exception('Error reading file ' + file_name)
        
