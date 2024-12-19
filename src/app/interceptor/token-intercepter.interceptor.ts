import { HttpInterceptorFn } from '@angular/common/http';

export const tokenIntercepterInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if 'localStorage' is available
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem("token");
    if (token) {
      req = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      });
    }
  }

  return next(req);
};
