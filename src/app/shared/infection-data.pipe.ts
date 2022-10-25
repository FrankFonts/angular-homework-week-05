import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './infection-data';

@Pipe({
  name: 'infectionDataTransform',
})
export class infectionDataTransformPipe implements PipeTransform {
  transform(value: Data, args?: any): string {
    if (!args.split(' ').includes('iWantTheTruth')) {
      let fakeNumberOfDailyTests = value.numberOfDailyTests * 2;
      let fakeNumberOfDailyNewInfections = Math.floor(
        Math.min(500 * Math.random(), value.numberOfDailyTests * 0.05)
      );
      let fakeInHospital = Math.floor(value.inHospital / 3);

      return `${fakeNumberOfDailyTests} tesztet végeztek el ma, ${fakeNumberOfDailyNewInfections} új fertőzött, ${fakeInHospital} fő kórházban, mindannyian oltatlan idős krónikus betegek.`;
    }

    return `Igazából ${value.numberOfDailyTests} tesztet végeztek el ma, sajnos nem tudni, mennyi új fertőzött van, de ${value.inHospital} fő kórházban, néhányan oltatlan idős krónikus betegek.`;
  }
}

// •A mintavételek számát mindig szorozzuk meg 2-vel

// •Az újonnan azonosított fertőzöttek száma legyen egy random szám 1 és 500 között, de a napi mintavételek 5%-ánálnem lehet több!

// •A kórházban lévők számát mindig osszuk el 3-al, és tűntessük fel a mondatban, hogy mindannyian oltatlan idős krónikus betegek
