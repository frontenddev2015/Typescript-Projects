import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(reports: string): void {
    const html = `
  <html>
  <head><title>Html Report - Football Match</title></head>
  <body>
  <p>${reports}</p>
  </body>
  </html>
  `;

    fs.writeFileSync('report.html', html);
  }
}
