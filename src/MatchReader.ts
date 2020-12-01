import { MatchResult } from './MatchResult';
import { convertStringToDate } from './util';
import { MatchData } from './MatchData';

// Tuple

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        /*The tuple MatchData is required here in place any/ (Date|string|number)[] annotation. 
      MatchData tuple is all the types of data array*/
        return [
          convertStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult /**MatchResult is an enum */,
          row[6],
        ];
      }
    );
  }
}
