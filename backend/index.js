const   dotenv          = require("dotenv"),
        express         = require("express"),
        errorHandler    = require("./handlers/error"),
        authRoutes      = require("./routes/auth"),
        messagesRoutes  = require("./routes/messages"),
        db              = require("./models"),
        { loginRequired, ensureCorrectUser } = require("./middleware/auth"),
        app             = express();

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use(
    "/api/users/:id/messages",
    loginRequired,
    ensureCorrectUser,
    messagesRoutes
);

app.get("/api/messages", loginRequired, async function(req, res, next) {
    try {
      let messages = await db.Message.find()
        .sort({ createdAt: "desc" })
        .populate("user", {
          username: true,
          profileImageUrl: true
        });
      return res.status(200).json(messages);
    } catch (err) {
      return next(err);
    }
});

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT, function() {
  console.log(`Server is listening on PORT ${process.env.PORT}.`);
});