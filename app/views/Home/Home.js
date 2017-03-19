const frameModule = require("ui/frame");
const dialogs = require("ui/dialogs");

exports.pageLoad = (args) => {
    let page = args.object;
}

//คลิก "เข้ใช้ระบบ" แล้ว Link ไปยังหน้าจอ Login
exports.checkLogin = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/Login/Login")
}

exports.doConn = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/Contact/Contact")
}
