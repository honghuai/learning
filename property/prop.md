####1.对于HTML元素本身就带有的`固有属性`，在处理时，使用`prop`方法。
####2.对于HTML元素我们自己`自定义`的DOM属性，在处理时，使用`attr`方法。
#####如a标签自带属性，可以用prop去获取“href、target和class id",另外类似于checkbox/radio/select选中属性对应的“checked”“selected”也都建议用prop去获取
    
    var opt = $("#loadEl").data("opt");//images
    var opt_attr = $("#loadEl").attr("data-opt");//images

    var dis_attr = $("#loadEl").attr("disabled");//disabled
    var dis_prop = $("#loadEl").prop("disabled");//true
    var opt_prop = $("#loadEl").prop("data-opt");//undefined

    var sel_prop = $("#myWeek option").eq(1).prop("selected");//true
    var sel_attr = $("#myWeek option").eq(1).attr("selected");//selected
    /*扩展，关于获取select option的value隐藏属性以及text显示文本*/
    var sel_val = $("#myWeek").val();//星期二
    var sel_val2 = $("#myWeek option:selected").val();//星期二
    var sel_txt = $("#myWeek option:selected").text();//2
    
    console.log(opt);
    console.log(opt_attr);

    console.log(dis_attr);
    console.log(dis_prop);
    console.log(opt_prop);

    console.log(sel_prop);
    console.log(sel_attr);
    console.log(sel_val);
    console.log(sel_val2);
    console.log(sel_txt);