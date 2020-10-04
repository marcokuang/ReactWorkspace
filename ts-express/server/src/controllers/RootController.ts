import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Denied access");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <h1>
            How Are you doing
          </h1>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>Please log in first</div>
          <button><a href="/auth/login">Login</a></button>
        </div>
      `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
    <div>
      <h3>Welcome to the garden!</h3>
    </div>
    `);
  }
}
