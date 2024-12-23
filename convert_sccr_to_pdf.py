import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Preformatted
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def convert_src_to_pdf(project_path, output_pdf):
    """
    Convert source code files from the src folder of an Angular project to PDF.
    
    Args:
        project_path (str): Path to the Angular project
        output_pdf (str): Name of the output PDF file
    """
    # Get the full path to the src folder
    src_path = os.path.join(project_path, 'src')
    
    if not os.path.exists(src_path):
        print(f"Error: src folder not found in {project_path}")
        return
    
    # Create PDF document
    doc = SimpleDocTemplate(
        output_pdf,
        pagesize=letter,
        rightMargin=72,
        leftMargin=72,
        topMargin=72,
        bottomMargin=72
    )
    
    # Set up styles
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name='CodeStyle',
        fontName='Courier',
        fontSize=9,
        leading=11
    ))
    
    content = []
    
    # File extensions to include
    valid_extensions = ('.ts', '.html', '.css', '.scss')
    
    # Walk through the src directory
    for root, _, files in os.walk(src_path):
        for file in sorted(files):
            if file.endswith(valid_extensions):
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, project_path)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        code = f.read()
                    
                    # Add file path as header
                    content.append(Paragraph(
                        f"<b>{rel_path}</b>",
                        styles['Heading2']
                    ))
                    content.append(Spacer(1, 12))
                    
                    # Add the code
                    content.append(Preformatted(
                        code,
                        styles['CodeStyle']
                    ))
                    content.append(Spacer(1, 20))
                    
                except Exception as e:
                    print(f"Error reading {rel_path}: {str(e)}")
    
    # Generate PDF
    if content:
        print("Creating PDF...")
        doc.build(content)
        print(f"PDF created successfully: {output_pdf}")
    else:
        print("No files found to convert!")

if __name__ == "__main__":
    # Use current directory as project path
    current_dir = os.getcwd()
    output_file = "angular_src_code.pdf"
    
    print("Starting conversion...")
    print(f"Looking for src folder in: {current_dir}")
    convert_src_to_pdf(current_dir, output_file)