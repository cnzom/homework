var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; //定义数组

//数组排序

function arrSort() {
    arr.sort();
    alert(arr);
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            alert("重复最多的元素为：" + arr[i]);
        };
    };
}

arrSort();

/*
alert("包含相同元素，相同值为：" + arr[i]);
return true;*/
