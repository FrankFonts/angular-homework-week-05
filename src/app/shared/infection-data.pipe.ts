import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './infection-data';

@Pipe({
  name: 'infectionDataTransform',
})
export class infectionDataTransformPipe implements PipeTransform {
  transform(
    value: Data,
    iWantTheTruth?: boolean,
    newInfectionNumber?: number
  ): string {
    // ha nem kérjük az igazi adatokat, adjunk vissza hamisakat
    if (!iWantTheTruth) {
      let fakeNumberOfDailyTests = value.numberOfDailyTests * 2;
      let fakeInHospital = Math.floor(value.inHospital / 3);

      return `${fakeNumberOfDailyTests} tesztet végeztek el ma, ${newInfectionNumber} új fertőzöttet találtak, ${fakeInHospital} fő van kórházban (${newInfectionNumber/fakeNumberOfDailyTests}%), mindannyian oltatlan idős krónikus betegek.`;
    }

    // különben adjuk vissza az igazi adatokat
    return `Igazából ${value.numberOfDailyTests} tesztet végeztek el ma, sajnos nem tudni, mennyi új fertőzött van, de ${value.inHospital} fő van kórházban, néhányan közülök oltatlan idős krónikus betegek.`;
  }
}
