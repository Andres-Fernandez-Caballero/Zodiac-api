import { Injectable } from '@nestjs/common';
import * as moment from 'moment';

export interface Zodiac {
  name: string;
  start?: string;
  end?: string;
  sign: string;
}

@Injectable()
export class ZodiacService {
  private zodiacs: Zodiac[] = [
    { name: 'Aries', start: '21-03', end: '19-04', sign: '♈' },
    { name: 'Tauro', start: '20-04', end: '20-05', sign: '♉' },
    { name: 'Géminis', start: '21-05', end: '20-06', sign: '♊' },
    { name: 'Cáncer', start: '21-06', end: '22-07', sign: '♋' },
    { name: 'Leo', start: '23-07', end: '22-08', sign: '♌' },
    { name: 'Virgo', start: '23-08', end: '22-09', sign: '♍' },
    { name: 'Libra', start: '23-09', end: '22-10', sign: '♎' },
    { name: 'Escorpio', start: '23-10', end: '21-11', sign: '♏' },
    { name: 'Sagitario', start: '22-11', end: '21-12', sign: '♐' },
    { name: 'Capricornio', start: '22-12', end: '19-01', sign: '♑' },
    { name: 'Acuario', start: '20-01', end: '18-02', sign: '♒' },
    { name: 'Piscis', start: '19-02', end: '20-03', sign: '♓' },
  ];
  getAllZodiacs(): Zodiac[] {
    return this.zodiacs.map((zodiac) => ({
      name: zodiac.name,
      sign: zodiac.sign,
    }));
  }
  getZodiac(birthDate: string): Zodiac {
    console.log('birthDate', birthDate);
    if (birthDate === undefined) throw new Error('Please provide a birth date');

    const dia = moment(birthDate).date();
    const mes = moment(birthDate).month() + 1;

    const zodiac = this.zodiacs.find(
      (zodiac) =>
        (mes === moment(zodiac.start, 'DD-MM').month() + 1 &&
          dia >= moment(zodiac.start, 'DD-MM').date()) ||
        (mes === moment(zodiac.end, 'DD-MM').month() + 1 &&
          dia <= moment(zodiac.end, 'DD-MM').date()),
    );
    console.table(zodiac);
    return { name: zodiac.name, sign: zodiac.sign };
  }
}
