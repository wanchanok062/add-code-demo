module.exports = {
    reporters: [
      "default",
      ["jest-html-reporters", {
        "publicPath": "./html-report",
        "filename": "report.html",
        "expand": true
      }]
    ]
  }
  