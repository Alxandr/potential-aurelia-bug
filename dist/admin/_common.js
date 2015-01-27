let attempts = 0;

export class AdminController {
  canActivate() {
    console.log('Went here');
    
    return (++attempts > 2); 
  }
};