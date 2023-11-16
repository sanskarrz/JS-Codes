function areaOftriangle() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);
    console.log(typeof (side1));
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    document.getElementById("display").innerHTML = area;
    }
    function areaOfcircle() {
    var radius = parseInt(document.getElementById("radius").value);
    var area = 3.14 * (radius ** 2);
    document.getElementById("display1").innerHTML = area;
    }
    function areaOfrectangle() {
    var length = parseInt(document.getElementById("length").value);
    var breadth = parseInt(document.getElementById("breadth").value);
    var area = length * breadth;
    document.getElementById("display2").innerHTML = area;
    }