import { CompanyChange } from "../DataGenerator/CompanyChange";
import { CompanyChangeType } from "../DataGenerator/CompanyChangeType";
import { DataGenerator } from "../DataGenerator/DataGenerator";
import { FileSaver } from "./FileSaver";
import { IDataGenerator } from "../DataGenerator/IDataGenerator";
import { IDocumnetData } from "../DataGenerator/IFileData";
import { PdfGenerator } from "./PdfGenerator";
import { WordGenerator } from "./WordGenerator";

export class DocumentGenerator {
  constructor(dataGenerator: IDataGenerator) {
    this.dataGenerator = dataGenerator;
  }
  pdfGenerator: PdfGenerator = new PdfGenerator();
  wordGenerator: WordGenerator = new WordGenerator();
  fileSaver: FileSaver = new FileSaver();
  dataGenerator: DataGenerator;
  generateDocument(change: CompanyChange) {
    const fileData = this.dataGenerator.getFileData(change);
    this.createOutput(change.type, fileData);
  }
  createOutput(type: CompanyChangeType, data: IDocumnetData) {
    const pdf = this.pdfGenerator.createFile(data);
    this.fileSaver.saveFile(`${getFileName(type)}.pdf`, pdf);
    const word = this.wordGenerator.createFile(data);
    this.fileSaver.saveFile(`${getFileName(type)}.word`, word);
  }
}

function getFileName(type: CompanyChangeType): string {
  if (type === CompanyChangeType.CompanyNameChange) {
    return "CompanyNameChange";
  }
}
