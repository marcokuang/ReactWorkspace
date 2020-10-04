import { Request, Response, NextFunction } from "express";
import { get, controller, post, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @get("/logout")
  postLogout(req: Request, res: Response): void {
    req.session = null;
    res.redirect("/");
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    req.session = { loggedIn: true };

    res.redirect("/");
  }
}
