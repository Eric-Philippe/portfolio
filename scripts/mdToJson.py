import os
import json
import markdown2

def convert_all_md_to_json(input_folder, json_file_path):
    # Initialiser une liste pour stocker les données de chaque fichier Markdown
    all_data = []

    # Parcourir tous les fichiers dans le dossier _projects avec l'extension .md
    for filename in sorted(os.listdir(input_folder)):
        if filename.endswith(".md") and not filename.startswith("_"):
            md_file_path = os.path.join(input_folder, filename)

            with open(md_file_path, 'r', encoding='utf-8') as md_file:
                # Convertir le contenu du fichier Markdown en HTML
                html_content = markdown2.markdown(md_file.read(), extras=['metadata'])

            # Créer un dictionnaire avec le contenu HTML et les métadonnées
            data = {'filename': filename, 'html_content': html_content, 'metadata': html_content.metadata}

            # Ajouter les données à la liste
            all_data.append(data)

    # Trier la liste par nom de fichier croissant
    all_data = sorted(all_data, key=lambda x: x['filename'])

    # Écrire la liste de données triée au format JSON dans le fichier de sortie
    with open(json_file_path, 'w', encoding='utf-8') as json_file:
        json.dump(all_data, json_file, ensure_ascii=False, indent=2)

# Exemple d'utilisation
input_folder = '_projects'  # Dossier contenant les fichiers Markdown
json_file_path = 'projects.json'  # Nom du fichier de sortie

convert_all_md_to_json(input_folder, json_file_path)
