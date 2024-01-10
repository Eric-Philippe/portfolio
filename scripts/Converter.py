import re

from Parser import Parser

class Converter:
    """
    Class: Converter
    ----------------------------
    Converts a markdown file into a dictionary
    ----------------------------
    parser: Parser
        The parser to use to parse the markdown file
    file_name: str
    The name of the file to convert
    ----------------------------
    final_obj_fields: list[str]
        The fields of the final object
    ----------------------------
    file_content: str
        The content of the file
    """
    def __init__(self, parser: Parser, file_name, final_obj_fields: list[str]):
        """
        Function: __init__
        ----------------------------
        Initializes the Converter object
        ----------------------------
        """
        self.parser = parser
        self.file_name = file_name
        self.final_obj_fields = final_obj_fields
        self.file_content = Parser.checkFileIntegrity(file_name)
        if len(self.parser.fields) != len(self.final_obj_fields): raise Exception("The number of fields in the parser and the number of fields in the final object must be the same")
        missing_field = self.parser.checkFields(self.file_content)
        if missing_field is not True:
            raise Exception(f"The field '{missing_field}' is missing, please check the {file_name} file")        
    
    def convert(self)->dict:
        """
        Function: convert
        ----------------------------
        Converts the markdown file into a dictionary
        ----------------------------
        Returns the dictionary
        """
        final_obj = {}
        for i, field in enumerate(self.parser.fields):
            final_obj[self.final_obj_fields[i]] = self.extract_section_content(field)
            
        return final_obj
            
    def extract_section_content(self, section_names: list[str]) -> str:
        """
        Function: extract_section_content
        ----------------------------
        Extracts the content of a section from the file content
        ----------------------------
        section_names: list[str]
            The names of the section to extract
        ----------------------------
        Returns the content of the section
        """
        lines = self.file_content.split('\n')
        in_section = False
               
        content = ""
        for line in lines:
            if not in_section:
                if any([re.search("(#+)\s" + section_name, line) for section_name in section_names]):
                    in_section = True
                elif any([re.search("\[" + section_name + "\]\(.+\)", line) for section_name in section_names]):
                    content = re.search("\[(.+)\]\((.+)\)", line).group(2)
                    break
            else:
                if self.isSectionEnd(line):
                    in_section = False
                    break
                else:
                    content += line + '\n'
                    
        # Remove the \n at the beginning and the end of the content if there is one
        if content.startswith('\n'): content = content[1:]
        if content.endswith('\n'): content = content[:-2]
        
        return content
    
    def isSectionEnd(self, line: str) -> bool:
        """
        A section is ended if
        - The line is equal to '---'
        - The line starts with a # (or more) and a space (#+\s)
        - The line starts with a [ and the section name and ends with a ] and a ( (ex: [section_name](link))
        """
        all_sections_names = [section_name for section_names in self.parser.fields for section_name in section_names]
        return line == '---' or re.search("(#+)\s", line) != None or re.search("\[" + "|".join(all_sections_names) + "\](.+)\s", line) != None