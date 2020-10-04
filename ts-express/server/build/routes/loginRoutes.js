"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.requireAuth = void 0;
var AppRouter_1 = require("../AppRouter");
// custom express middleware to check user's auth status
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Denied access");
}
exports.requireAuth = requireAuth;
var router = AppRouter_1.AppRouter.getInstance();
exports.router = router;
// router.get("/login", (req: Request, res: Response) => {
//   res.send(`
//     <form method="POST">
//       <div>
//         <label>Email</label>
//         <input name="email" />
//       </div>
//       <div>
//         <label>Password</label>
//         <input name="password" type="password" />
//       </div>
//       <button>Submit</button>
//     </form>
//   `);
// });
router.get("/", function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <h1>\n          How Are you doing\n        </h1>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>Please log in first</div>\n        <button><a href=\"/login\">Login</a></button>\n      </div>\n    ");
    }
});
router.get("/logout", function (req, res) {
    req.session = null;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("\n  <div>\n    <h3>Welcome to the garden!</h3>\n  </div>\n  ");
});
