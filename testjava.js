function bmi(){
    var weight = document.getElementById("field-mass").value;
    var height = document.getElementById("field-height").value;

    console.log(weight)
    console.log(height)
    if((weight == "") || (height == "")){
        alert("คุณยังไม่ได้กรอกน้ำหนักหรือส่วนสูง")
    } else {
        if(weight < 30){
            alert("น้ำหนักคุณน้อยกว่า 30 kg คุณแน่ใจหรือไม่")
            document.getElementById("aw").innerHTML = (weight / ((height/100)*(height/100))).toFixed(2);
        } else if(height < 55){
            alert("ส่วนสูงคุณน้อยกว่า 55 cm คุณแน่ใจหรือไม่")
            document.getElementById("aw").innerHTML = (weight / ((height/100)*(height/100))).toFixed(2);
        } else {
            document.getElementById("aw").innerHTML = (weight / ((height/100)*(height/100))).toFixed(2);
        }
        if(weight > 200){
            alert("น้ำหนักคุณมากกว่า 200 kg คุณแน่ใจหรือไม่")
            document.getElementById("aw").innerHTML = (weight / ((height/100)*(height/100))).toFixed(2);
        } else if(height > 200){
            alert("ส่วนสูงคุณเกิน 200 cm คุณแน่ใจหรือไม่")
            document.getElementById("aw").innerHTML = (weight / ((height/100)*(height/100))).toFixed(2);
        } else {
            document.getElementById("aw").innerHTML = (weight / ((height/100)*(height/100))).toFixed(2);
        }
    }
    document.getElementById("aw").innerHTML = (weight / ((height/100)*(height/100))).toFixed(2);
    return
}
