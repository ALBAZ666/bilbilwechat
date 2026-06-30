// index.js
Page({
  data: {
    name: 'justin',
    age: 19,
    userinfo: { name: 'lqz', hobby: '烫头' },
    names: ['神人', '人神', '神神', '人人'],
    goodsList: [
      { id: 1001, name: '钢笔', price: 9 },
      { id: 1002, name: '铅笔', price: 6 },
      { id: 1003, name: '脸盆', price: 99 }
    ]
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
  },
  handleAddName() {
    // 往 names 数组末尾追加一个新名字
    const newNames = this.data.names.concat('新朋友')
    this.setData({
      names: newNames
    })
  }
})
