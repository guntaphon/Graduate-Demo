const Observable = require("data/observable").Observable;
const frameModule = require("ui/frame");
const dialogs = require("ui/dialogs");
let page;
// const appSetting = require('application-settings');

// let settings = {

// }

let pageData = new Observable({
  usrName: '',
  usrPass: '',
})

exports.pageLoad = (args) => {
  page = args.object;
  page.bindingContext = pageData;
  // let settings = JSON.parse(appSetting.getString('setting', '{}'))
  // pageData.usrName = settings.usrName;
  // pageData.usrPass = settings.usrPass;  
}

exports.checkLogin = () => {
  // X-teacher
  // X-classroom ccccc
  fetch('http://192.168.9.25:3000/upload', {
    method: "POST",
    headers: {
      'X-usrName': pageData.usrName,
      'X-usrPass': pageData.usrPass,
    },
  }).then(res => res.json())
    .then((res) => {
      if (!res.status || !res.StudentCode) {
        // dialogs
        return
      }
      console.log('StudentCode=' + res.StudentCode)
      // appSetting to save code
      // let settings = JSON.parse(appSetting.getString('setting', '{}'))
      // pageData.usrName = settings.usrName;
      // pageData.usrPass = settings.usrPass;  



      // navigate with home room
    })
}









exports.goHome = () => {
  const topmost = frameModule.topmost()
  topmost.navigate("views/Home/Home")
}
