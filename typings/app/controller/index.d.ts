// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportV1User from '../../../app/controller/v1/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    v1: {
      user: ExportV1User;
    }
  }
}
