interface Project {
    id: string;
    title: string;
    description: string;
    client: string;
    year: number;
    services: string[];
    url: string;
    industry: string;
    duration: string;
    about: string;
}

export const PROJECTS: Project[] = [
    {
        id: "proyecto-ejemplo",
        title: "Proyecto Ejemplo",
        description: "Descripción del Proyecto",
        client: "Client Name",
        year: 2022,
        services: ["UI/UX Design", "Web Development", "Graphic Design"],
        url: "https://example.com",
        industry: "Industry",
        duration: "Duration",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia diam id erat sodales varius. Curabitur ac consectetur massa. Phasellus nisl eros, aliquam non erat et, commodo venenatis neque. Nunc consequat pharetra dapibus. Ut posuere, diam nec ultricies rutrum, elit mauris faucibus elit, sed tempor orci mauris a leo. Aenean ut magna tempus sapien euismod faucibus."
    }
]