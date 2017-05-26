/**
 * Created by Administrator on 2017/5/26 0026.
 */
(function () {
    //定义开始加载按钮
    var canvasbtn = document.querySelector('.canvasbtn');

    //定义显示加载值
    var mark = document.querySelector('.mark');

    // 获取canvas元素和获取2d上下文
    var center = document.querySelector('.canvas').getContext('2d');
    var gradient = center.createLinearGradient(0,0,800,0);

    //定义线性过渡颜色
    gradient.addColorStop(0,"white");
    gradient.addColorStop(1,"skyblue");

    //添加线性渐变颜色样式到2d上下文
    center.fillStyle = gradient;

    //添加一个加载比例
    var num = parseInt(800/100);


    //添加矩形和定时器加载,按钮监听方法
    var i = 0;
    canvasbtn.addEventListener('click',function () {


        // 定时器
        var setadd = setInterval(function () {

            // 被添加矩形
            center.fillRect(0,100,i*num,45);
            i++;

            //满值关闭定时
            if(i >= 100)
            {
                center.clearRect(0,0,800,800);
                clearInterval(setadd);

            }


        //  每次更改精度将进度值显示
            mark.innerText = i;

        },100);


    });

})();