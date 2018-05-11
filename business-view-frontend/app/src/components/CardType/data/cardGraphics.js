import {
  amex,
  cb,
  discover,
  diners,
  jcb,
  laser,
  maestro,
  mastercard,
  switchCard,
  visa,
} from '../CardTypes';

const cardGraphics = {
  AX: amex,
  CBRT: cb,
  DI: discover,
  DC: diners,
  JCB: jcb,
  LASE: laser,
  MC: mastercard,
  MES: maestro,
  SWI: switchCard,
  VI: visa,
};

export default cardGraphics;
