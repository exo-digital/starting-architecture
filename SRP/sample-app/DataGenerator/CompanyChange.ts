import { IDocumnetData } from "./IFileData";

export abstract class CompanyChange {
  abstract getDocumentData(): IDocumnetData;
  abstract getFileName(): string;
}
