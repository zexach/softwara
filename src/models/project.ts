export interface IProject {
    id: number,
    backgroundImage: string,
    images: string[],
    name: string,
    description: string,
    longDescription: string,
    video: boolean,
    videoUrl: string | null,
    workInProgress: boolean,
    technologies: string[],
}