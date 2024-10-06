import { PlantillaResponse } from './plantillaResponse';
import { HttpStatus, Injectable } from '@nestjs/common';
import { ResponseType } from "./responseType";
import { ResponseTypeDetails } from "./responseTypeDetails";


const responseTypeDetails: Record<ResponseType, ResponseTypeDetails> = {
  [ResponseType.CREATED]: {
    message: 'Creado Correctamente',
    rta: true,
    httpStatus: HttpStatus.CREATED,
  },
  [ResponseType.UPDATED]: {
    message: 'Actualizado',
    rta: true,
    httpStatus: HttpStatus.OK,
  },
  [ResponseType.FALLO]: {
    message: 'Algo salio Mal Revisar Logs',
    rta: false,
    httpStatus: HttpStatus.INTERNAL_SERVER_ERROR,
  },
  [ResponseType.EMAIL_NO_ENCONTRADO]: {
    message: 'Email not found',
    rta: false,
    httpStatus: HttpStatus.OK,
  },
  [ResponseType.USER_ISFOUND]: {
    message: 'User found',
    rta: false,
    httpStatus: HttpStatus.OK,
  },
  [ResponseType.USER_LOGEADO]: {
    message: 'User logged in',
    rta: false,
    httpStatus: HttpStatus.OK,
  },
  [ResponseType.EMAIL_VALIDATION_FAIL]: {
    message: 'Email validation failed',
    rta: false,
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  [ResponseType.EMAIL_NOT_FOUD]: {
    message: 'Email not found',
    rta: false,
    httpStatus: HttpStatus.OK,
  },
  [ResponseType.PASSWORD_VALIDATION_FAIL]: {
    message: 'Password validation failed',
    rta: false,
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  [ResponseType.GET]: {
    message: 'Se Obtuvieorn Datos Correctamente ',
    rta: true,
    httpStatus: HttpStatus.OK,
  },
  [ResponseType.NO_ENCONTRADO]: {
    message: 'Not found',
    rta: false,
    httpStatus: HttpStatus.OK,
  },
  [ResponseType.FALLO_CREATE_PHONE]: {
    message: 'Failure creating phone',
    rta: false,
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  [ResponseType.FALLO_CREATE_DATOS_USER]: {
    message: 'Failure creating user data',
    rta: false,
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  [ResponseType.DELETED]: {
    message: 'Elmininado Correctamente',
    rta: true,
    httpStatus: HttpStatus.OK,
  },
}
@Injectable()
export class UtilResponses<E> {
  public buildResponse(tipoRespuesta: ResponseType, e?: E, listE?: E[]): PlantillaResponse<E> {
    const responseType = responseTypeDetails[tipoRespuesta];

    if (responseType) {
      return {
        message: responseType.message,
        data: e,
        dataList: listE,
        rta: responseType.rta,
        httpStatus: responseType.httpStatus,
      };
    }

    throw new Error(`Tipo de respuesta no válido: ${tipoRespuesta}`);
  }
}