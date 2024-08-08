export interface IProject {
    id: number,
    backgroundImage: string,
    images: string[],
    name: string,
    description: string,
    video: boolean,
    videoUrl: string | null
}