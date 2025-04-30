function toggleProjects() {
    const projectsCard = document.querySelector('.projects-card');
    const midColumn = document.querySelector('.mid-column');
    const button = document.querySelector('.toggle-projects');
    const allProjects = document.querySelectorAll('.project');
    const initialProjects = 2;

    projectsCard.classList.toggle('expanded');
    midColumn.classList.toggle('hidden');
    
    allProjects.forEach((project, index) => {
        if (index >= initialProjects) {
            project.classList.toggle('hidden');
        }
    });
    
    if (projectsCard.classList.contains('expanded')) {
        button.textContent = 'Mostrar menos';
    } else {
        button.textContent = 'Ver todos';
    }
}