import JWT from "jsonwebtoken";
import JSONWebToken from "../../interfaces/JsonWebToken";

class JwtMiddleware implements JSONWebToken {

    public constructor () {}

  public auth(payload: object): void {
    let test = JWT.sign(payload, process.env.APP_SECRET_KEY);

    console.log(test);

    if (test) {
      return test;
    } else {
      throw new Error("Method not implemented.");
    }
  }
  public generateToken(): string {
    throw new Error("Method not implemented.");
  }
}

export default new JwtMiddleware()