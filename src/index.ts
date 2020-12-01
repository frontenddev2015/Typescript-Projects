import fs from 'fs';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { ConsoleReport } from './outputTarget/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './outputTarget/HtmlReport';

// Create an object that satisfy DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.WinsAnalyzerWithOutputTarget('Man United1');
summary.buildAndPrintReport(matchReader.matches);
