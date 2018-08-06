import { controller, httpGet } from 'inversify-express-utils';

@controller('/')
export class HomeController {

  @httpGet('/')
  public get(): any {
    return { message: 'Home sweet home, but nothing enticing here..' };
  }
}
