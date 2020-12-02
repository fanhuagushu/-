const app = getApp()

Page({
  data: {
    textList: [{
      text: '奥力给'
    }, {
      text: '无敌'
    }, {
      text: '无敌'
    }, {
      text: '无敌'
    }, {
      text: '无敌'
    }],
    inputValue: ''
  },

  onLoad() {

  },

  handleInput(e) {
    let {
      value
    } = e.detail;
    this.setData({
      inputValue: value
    });
  }
})