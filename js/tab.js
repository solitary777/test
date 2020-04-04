function Tab(option) {
  this.hdEle = option.hdEle;
  this.bdEle = option.bdEle;
  var self = this;

  // 注册事件
  function registerEvent() {
    for (var i = 0; i < self.hdEle.length; i++) {
      var element = self.hdEle[i];
      element.index = i;
      element.addEventListener('click', eventHandler, false)
    }
  }
  // 时间处理函数
  function eventHandler() {
    for (var o = 0; o < self.hdEle.length; o++) {
      self.hdEle[o].classList.remove('current');
      self.bdEle[o].classList.remove('current');
    }
    this.classList.add('current');
    self.bdEle[this.index].classList.add('current');
  }
  // 初始化函数
  this.init = function () {
    registerEvent();
  }
}