export class DocumentGenerator {
  pdfGenerator: PdfGenerator = new PdfGenerator();
  fileSaver: FileSaver = new FileSaver();
  generateDocument(change: CompanyChange) {
    if (change.type === CompanyChangeType.CompanyNameChange) {
      const pdf = this.pdfGenerator.createPdf({
        title: "Company Name Change",
        body: `Hey people we have decided to change the name of company from ${change.prevCompanyName} to ${change.newCompanyName}!!! it is what it is`,
      });
      this.fileSaver.saveFile("ComanyNameChange.pdf", pdf);
    } else if (change.type === CompanyChangeType.OfficerAppointment) {
      const pdf = this.pdfGenerator.createPdf({
        title: "Appointing new officer",
        body: `Hey people we have decided to hire ${change.newOfficer?.name} as our new officer!!! it is what it is`,
      });
      this.fileSaver.saveFile("OfficerAppointment.pdf", pdf);
    } else if (change.type === CompanyChangeType.ShareHolderAppointment) {
      const pdf = this.pdfGenerator.createPdf({
        title: "Appointing new shareholder",
        body: `Hey people we have decided to have a new shareholder: ${change.newShareHolder?.name} as our new officer!!! it is what it is`,
      });
      this.fileSaver.saveFile("ShareholerAppointment.pdf", pdf);
    }
  }
}

export class CompanyChange {
  constructor(
    type: CompanyChangeType,
    newOfficer: Person | null,
    newShareHolder: Person | null,
    newCompanyName: string | null,
    prevCompanyName: string | null
  ) {
    this.type = type;
    this.newOfficer = newOfficer;
    this.newShareHolder = newShareHolder;
    this.newCompanyName = newCompanyName;
    this.prevCompanyName = prevCompanyName;
  }
  type: CompanyChangeType;
  newOfficer: Person | null;
  newShareHolder: Person | null;
  newCompanyName: string | null;
  prevCompanyName: string | null;
}

export enum CompanyChangeType {
  OfficerAppointment,
  ShareHolderAppointment,
  CompanyNameChange,
}

class Person {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}

class PdfGenerator {
  createPdf(pdfData: { title: string; body: string }): string {
    return `${pdfData.title} 
      ${pdfData.body}`;
  }
}
class FileSaver {
  saveFile(fileName: string, content: string) {
    console.log(`file saved with content ${content}`);
  }
}
