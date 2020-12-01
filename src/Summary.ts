import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { HtmlReport } from './outputTarget/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  //Static method
  static WinsAnalyzerWithOutputTarget(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  // Matches will be get from another class MatchReader class and feed into the run method of the WinsAnalysis class
  // run method returns some data which again feed into the print method of the HtmlReport class
  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
