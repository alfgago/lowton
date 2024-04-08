export interface Image {
    url: string;
    width: number;
    height: number;
    alt: string | null;
  }
  
  export interface Category {
    id: string;
    name: string;
  }
  
  export interface Component {
    id: string;
    type: string | null;
    image?: Image;
    images?: Image[];
    columns?: number; 
  }
  
  export interface AboutProject {
    html: string; 
  }
  
  export interface Project {
    name: string;
    slug: string;
    industry: string;
    videoUrl: string | null;
    year: number;
    client: string;
    shortIntro: string;
    aboutProject: AboutProject;
    category: Category[];
    components: Component[];
    featuredImage: Image;
  }
  