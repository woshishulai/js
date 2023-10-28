// 1,一开始做什么
// 2，交互是什么
// 3，初始化 自动滚动
(function () {
    var list = document.querySelector('.list');
    function cloneFirstItem() {
        var firstItem = list.children[0]
        console.log(firstItem);
        //加true就是深度克隆 可以得到里面的元素
        var newItem = firstItem.cloneNode(true)
        console.log(newItem);
        list.appendChild(newItem)
    }
    cloneFirstItem()
    //一段时间将列表滚动下一个位置
    var duration = 2000
    setInterval(moveNext, duration);
    //滚动事件抽离
    var curIndex = 0
    const itemHeight = 30
    function moveNext() {
        var from = curIndex * itemHeight //一开始的高度
        curIndex++
        //下一项的高度
        var to = itemHeight * curIndex
        var totalDuration = 300 // 变化的时间
        var duration = 10 //动画间隔时间
        var times = totalDuration / duration //变化的次数 
        var dis = (to - from) / times
        var timer = setInterval(() => {
            from += dis
            if (from >= to) {
                clearInterval(timer)
                if (curIndex === list.children.length - 1) {
                    // list.scrollTop = 0
                    from = 0
                    curIndex = 0
                }
            }
            // console.log(from);
            list.scrollTop = from
        }, duration);
    }
})()
// var ulElement = document.getElementById('myList'); // 通过ID获取<ul>元素
// // 添加滚动事件监听器到<ul>元素
// ulElement.addEventListener('scroll', function () {
//     var scrollHeight = ulElement.scrollTop;
//     console.log('滚动高度：', scrollHeight);
//     setInterval(() => {
//         scrollHeight = scrollHeight + 10
//     }, 1000)
// });