import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {MensagemService} from '../shared/services/mensagem.service';

@Injectable()
export class ErroInterceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((evento: HttpEvent<any>) => {
      }),
      catchError((erro: HttpErrorResponse) => this.processarErroResposta(erro)));
  }

  processarErroResposta(erro: HttpErrorResponse): Observable<HttpEvent<any>> {
    let mensagem = erro.error.errors[0].defaultMessage;
    if (!mensagem) {
      mensagem = erro.error.message;
    }
    this.mensagemService.erro(mensagem);
    return throwError(() => erro);
  }
}
