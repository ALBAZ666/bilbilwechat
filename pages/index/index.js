// index.js
Page({
  data: {
    name: 'justin',
    age: 19,
    userinfo: {
      name: '小明',
      hobby: '足球'
    }
  },
  handleAddAge() {
    this.setData({
      age: this.data.age + 1
    })
  },
  handleChangeHobby() {
    this.setData({
      'userinfo.hobby': '篮球'
    })
  }
})
