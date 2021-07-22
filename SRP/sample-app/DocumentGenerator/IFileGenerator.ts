import { IDocumnetData } from "../DataGenerator/IFileData";

export interface IFileGenerator {
  createFile(data: IDocumnetData);
}
