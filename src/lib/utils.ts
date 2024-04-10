import { gql } from "@apollo/client/core";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isEmpty(value: string | number | null | undefined) {
	return value === null || value === undefined || value === "";
}

export function hasContent(content: string | null | undefined): boolean {
	if (!content) return false;  
  
	const emptyParagraphPattern = /^\s*<p>\s*<\/p>\s*$/; 
	return !emptyParagraphPattern.test(content); 
  }

 export const SINGLE_PROJECT = gql`
	query SingleProject($slug: String!) {
		project(where: { slug: $slug }) {
			name
			slug
			industry
			videoUrl
			year
			client
			shortIntro
			aboutProject {
				html
			}
			category {
				... on Category {
					id
					name
				}
			}
			components {
				... on Video {
					id
					type
					url
				}
				... on SingleImage {
					id
					type
					image {
						url
						width
						height
						alt
					}
				}
				... on Grid {
					id
					type
					images {
						url
						width
						height
						alt
					}
					columns
				}
			}
			featuredImage {
				url
				width
				height
				alt
			}
		}
	}
`;

export const PROJECTS = gql`
	query Projects {
		projects {
			name
			slug
			industry
			videoUrl
			year
			client
			shortIntro
			aboutProject {
				html
			}
			category {
				... on Category {
					id
					name
				}
			}
			components {
				... on Video {
					id
					type
					url
				}
				... on SingleImage {
					id
					type
					image {
						url
						width
						height
						alt
					}
				}
				... on Grid {
					id
					type
					images {
						url
						width
						height
						alt
					}
					columns
				}
			}
			featuredImage {
				url
				width
				height
				alt
			}
		}
	}
`;

export const TESTIMONIALS = gql `
query Testimonials {
	testimonials {
	  name
	  text {
		html
	  }
	}
  }
  `;