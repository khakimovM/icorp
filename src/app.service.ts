import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AppService implements OnModuleInit {
  private firstPart: string | null = null;
  private secondPart: string | null = null;
  private finalMessage: any = {
    originalmsg: '',
    part1: {},
    part2: {},
    finalGet: {},
  };
  private apiUrl: string;
  private receiveUrl: string;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    this.apiUrl = this.configService.get('APIURL') as string;
    this.receiveUrl = `${this.configService.get('BASEURL')}/api/icorp/second-part`;
  }

  async start(msg: string) {
    try {
      console.log('Jarayon boshlandi, original msg: ', msg);

      const response = await axios.post(this.apiUrl, {
        msg,
        url: this.receiveUrl,
      });

      this.firstPart = response.data.part1;
      this.finalMessage.part1 = response.data;
      this.finalMessage.originalmsg = msg;

      console.log('Birinchi qism keldi: ', response.data);
      console.log('Ikkinchi qismni kutmoqdamiz...');
    } catch (error) {
      console.log('Birinchi qismni olishda xatolik...', error.message);
      this.finalMessage = {
        originalmsg: '',
        part1: {},
        part2: {},
        finalGet: {},
      };
    }
  }

  async getSecondPart(data: { part2: string }) {
    console.log('part2 keldi: ', data.part2);
    this.secondPart = data.part2;
    this.finalMessage.part2 = data;
  }

  async processCode() {
    if (!this.firstPart || !this.secondPart) {
      console.log('Qismlar yetarli emas!');
      return;
    }

    const fullCode = this.firstPart + this.secondPart;
    console.log('Birlashgan kod: ', fullCode);

    try {
      console.log("Get so'rov yuborilmoqda...");
      const response = await axios.get(`${this.apiUrl}?code=${fullCode}`);
      this.finalMessage.finalGet = response.data;
      console.log('Final natija: ', this.finalMessage);
    } catch (error) {
      console.log('Get xatosi: ', error.message);
      this.finalMessage = {
        originalmsg: '',
        part1: {},
        part2: {},
        finalGet: {},
      };
    }
  }

  async getFinalMessage() {
    return this.finalMessage;
  }
}
