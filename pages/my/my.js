Page({
  bandleConsole(){
    console.log('我被点了')
  },

  handleParent(){
    console.log("孩子被点了")
  },

  handleChildren(){
    console.log('孩子被点击')
  },

  handleClick01(event){
    console.log(event)
    console.log(event.target.dataset)
    console.log(event.target.dataset.name)
    console.log(event.mark.name)
  },

  handleNavigateTo(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  handleRedirectTo(){
    wx.redirectTo({
      url: '/pages/login/login',
    })
  },

  handleSwitchTab(){
    wx.switchTab({
      url: '/pages/my/my',
    })
  },

  handleReLaunch(){
    wx.reLaunch({
      url: '/pages/login/login',
    })
  }
})
