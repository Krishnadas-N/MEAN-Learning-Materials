import { HttpInterceptorFn } from '@angular/common/http';

export const testInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
