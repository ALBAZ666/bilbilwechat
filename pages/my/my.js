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
    // 如果有事件冒泡--》他们里面的值是不一样的
    // currentTarget: 事件绑定者--->view
    // target: 事件触发者--》view
    console.log(event)
    console.log(event.target.dataset)
    console.log(event.target.dataset.name)
    console.log(event.mark.name)
  }
})
