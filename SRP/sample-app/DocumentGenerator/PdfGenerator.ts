import { IDocumnetData } from "../DataGenerator/IFileData";
import { IFileGenerator } from "./IFileGenerator";

export class PdfGenerator implements IFileGenerator {
  createFile(data: IDocumnetData) {
    return `${data.title} 
      ${data.body}`;
  }
}
