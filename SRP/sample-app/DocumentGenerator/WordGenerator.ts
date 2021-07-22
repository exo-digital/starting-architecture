import { IDocumnetData } from "../DataGenerator/IFileData";
import { IFileGenerator } from "./IFileGenerator";

export class WordGenerator implements IFileGenerator {
  createFile(data: IDocumnetData) {
    return `${data.title} 
      ${data.body}`;
  }
}
