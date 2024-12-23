import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Preformatted
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_source_code_pdf(project_path, output_pdf, exclude_dirs=None):
    """
    Convert Angular source code files to a PDF document.
    
    Args:
        project_path (str): Path to the Angular project
        output_pdf (str): Path for the output PDF file
        exclude_dirs (list): List of directories to exclude (e.g., ['node_modules', 'dist'])
    """
    if exclude_dirs is None:
        exclude_dirs = ['node_modules', 'dist', '.git', 'e2e']
    
    # Create the PDF document
    doc = SimpleDocTemplate(
        output_pdf,
        pagesize=letter,
        rightMargin=72,
        leftMargin=72,
        topMargin=72,
        bottomMargin=72
    )
    
    # Styles for the PDF
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(
        name='CodeStyle',
        fontName='Courier',
        fontSize=8,
        leading=10,
        spaceAfter=20
    ))
    
    # Store the content
    content = []
    
    def should_include_file(filepath):
        """Check if the file should be included in the PDF."""
        extensions = ['.ts', '.js', '.html', '.css', '.scss', '.json']
        return any(filepath.endswith(ext) for ext in extensions)
    
    # Walk through the project directory
    for root, dirs, files in os.walk(project_path):
        # Skip excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        
        for file in files:
            if should_include_file(file):
                filepath = os.path.join(root, file)
                rel_path = os.path.relpath(filepath, project_path)
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        code = f.read()
                    
                    # Add file path as heading
                    content.append(Paragraph(
                        f"<b>{rel_path}</b>",
                        styles['Heading2']
                    ))
                    content.append(Spacer(1, 12))
                    
                    # Add the code with syntax highlighting
                    content.append(Preformatted(
                        code,
                        styles['CodeStyle']
                    ))
                    content.append(Spacer(1, 24))
                
                except Exception as e:
                    print(f"Error processing {filepath}: {str(e)}")
    
    # Build the PDF
    doc.build(content)

def main():
    """Main function to run the script."""
    # Get current directory or specify your Angular project path
    project_path = os.getcwd()
    output_pdf = "angular_source_code.pdf"
    
    print(f"Converting source code from {project_path}")
    create_source_code_pdf(project_path, output_pdf)
    print(f"PDF created successfully: {output_pdf}")

if __name__ == "__main__":
    main()