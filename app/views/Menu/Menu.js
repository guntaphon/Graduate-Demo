const frameModule = require("ui/frame");
const dialogs = require("ui/dialogs");

exports.addGrad = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/Grad/Grad")
}

exports.editProfile = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/Profile/Profile")
}

exports.changePass = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/Pwd/Pwd")
}