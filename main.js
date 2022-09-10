// bài tập 1 
function baitap1(){
    // Đầu vào:
    var a = 1;
    var sum = 0;

    // Xử lý:
    while (sum < 10000){
        sum += a + 1;
        a++;
    }
    var hienThiSo = "Số nguyên dương nhỏ nhất là: " + a ;

    // Hiển thị : 
    document.getElementById("output1").style.display= "block";
    document.getElementById("output1").innerHTML = hienThiSo;
}



// bài tập 2:
function baitap2() {
    // Đầu vào: 
    var x = document.getElementById("numberX").value*1;
    var n = document.getElementById("numberN").value*1;
    var y= 2;
    var tinhTong = x;
    
    // Xử lý: 
    while (y <= n){
        tinhTong += x ** y;
        y++;
    }
    var hienThiKetQua = "Tổng: " +  tinhTong;

    // Hiển thị: 
    document.getElementById("output2").style.display= "block";
    document.getElementById("output2").innerHTML = hienThiKetQua;
}


// bài tập 3: 
function baitap3() {
    // Đầu vào: 
    var number3 = document.getElementById("number3").value*1;
    var giaiThua = 1;
    var number4 = 1;

    // Xử lý:
    while (number4 <= number3){
        giaiThua *= number4 ;
        number4++;
    }
    var ShowKetQua = "Giai thừa = " + giaiThua;

    // Hiển thị: 
    document.getElementById("output3").style.display= "block";
    document.getElementById("output3").innerHTML = ShowKetQua;
}



// bài tập 4:
function baitap4(){
    // Đầu vào:
    var content = "";
    var d = 1;
    var divChan = "<div class='p-3 mb-2 bg-danger text-white'> Div Chẵn </div>";
    var divLe = "<div class='p-3 mb-2 bg-primary text-white'> Div Lẻ </div>";

    // Xử lý:
    while (d <= 10){
        if (d % 2 === 0){
            content += divChan;
        }else{
            content += divLe;
        }
        d++;
    }

    // Hiển thị:
    document.getElementById("output4").style.display= "block";
    document.getElementById("output4").innerHTML = content;
}



// bài tập 5 
function baitap5(){
    var number5 = document.getElementById("number5").value*1;
    var soNguyenTo = "2 3 5 " ;
    var traSo = 5;

     while (traSo <= number5){
         if(traSo % Math.sqrt(traSo) !== 0 && traSo % 2 !== 0 && traSo % 3 !== 0 && traSo % 5 !== 0 ){
             soNguyenTo += traSo + " ";
         }
         traSo++;
     }

    document.getElementById("output5").style.display= "block";
    document.getElementById("output5").innerHTML = soNguyenTo;
}



