var a = 1;                    //Menu drop flag-var decl. as global

//Menu Drop
function drop() {


    if (a == 1) {
        document.getElementById("but").innerHTML = "<img src='mnblo.png' width='44'>";
        document.getElementById("mn").style.display = "block";

        a = 0;

    }
    else {
        document.getElementById("but").innerHTML = "<img src='mnulo.png' width='44'>";
        document.getElementById("mn").style.display = "none";
        a = 1;

    }


}



//factorial fn
function fact() {
    var f = 1;

    var n = document.getElementById("in").value;
    for (var i = 1; i <= n; i++) {
        f = f * i;
    }
    if (n != "" && n >= 0) {
        document.getElementById("ans").innerHTML = "The Factorial Of The " + n + " = " + f;
    }
    else { document.getElementById("ans").innerHTML = "Please Enter Valid Input"; }


}

//fibonacci fn

function fib() {
    var n = document.getElementById("in").value;
    var a = 0;
    var b = 1;
    var c;
    if (n != "" && n >= 0) { document.getElementById("ans").innerHTML = " " + "fibonacci Series Till " + n + ":<br>"; }
    else { document.getElementById("ans").innerHTML = "Please Enter Valid Input"; }
    for (var i = 0; i < n; i++) {
        if (i == 0) { document.getElementById("ans").innerHTML += ""; c = 0; }
        else if (i == 1) {
            document.getElementById("ans").innerHTML += "";
            c = 1;
        }
        else {
            c = a + b;

            a = b;
            b = c;
        }
        document.getElementById("ans").innerHTML += "<br>" + c + " ";

    }

    if (n != "" && n >= 0) { document.getElementById("ans").innerHTML += "<br><br>" + n + " th Element Of Series f(" + (n - 1) + "): " + c; }


}

//palindrome number
function pal() {
    var rev = 0, dig = 0, tmp = 0, pc;
    var n = document.getElementById("in").value;
    tmp = n;
    while (n > 0) {
        dig = n % 10;
        rev = (rev * 10) + dig;
        n = Math.floor((n / 10));
    }
    if (tmp != "") { document.getElementById("ans").innerHTML = "The Reversed Number Of " + tmp + ": " + rev + "<br>"; }
    else { document.getElementById("ans").innerHTML = "Please Enter Input"; }


    if (rev == tmp) {
        pc = " a Palindrome Number";
    }
    else {
        pc = "Not a Palindrome Number";
    }
    if (tmp != "") { document.getElementById("ans").innerHTML += tmp + " Is " + pc; }

}
//prime numbers
function prm() {
    var f = 1;
    var j = 2;
    var u = document.getElementById("ul").value;
    var l = document.getElementById("in").value;
    p = parseInt(l)          //str to int for garb rmv..!
    if (u == null || p == null || u == "" || p < 1 || p > u) {
        document.getElementById("ans").innerHTML = "Enter Valid Inputs For range"
    }
    else {
        document.getElementById("ans").innerHTML = "Prime Numbers In Range From " + l + " to " + u + ":<br>";
        for (i = p; i <= u; i++) {
            if (i == 1) {
                continue;
            }
            for (j = 2; j < i; j++) {
                if ((i % j) == 0) {
                    f = 0;
                }
            }

            if (f == 1) {
                document.getElementById("ans").innerHTML += " " + i;
            }

            f = 1;
        }
    }
}
//eqn eval function
function eq() {
    var A = parseInt(document.getElementById("in").value);
    var B = parseInt(document.getElementById("ul").value);
    var e = document.getElementById("eq").value;
    if (A == null || B == null || e == null || A == "" || B == "" || e == "") {
        document.getElementById("ans").innerHTML = "Please Fill All The Inputs Properly";
    }
    else {

        document.getElementById("ans").innerHTML = "Solution For  " + e + "  is: <br>" + eval(e);

    }
}

//reset fn
function reset() {
    document.getElementById("ans").innerHTML = "Please Click On Answer Button";
    document.getElementById("in").value = null;
    document.getElementById("ul").value = null;
    document.getElementById("eq").value = null;


}
//submit fn	[conditions can be reduced]
function sub() {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = document.getElementById("d").value;
    var d = document.getElementById("ps").value;
    var e = document.getElementById("cps").value;
    var g = document.getElementById("g").value;

    if (a == null || a == "") {
        document.getElementById("p0").innerHTML = "";
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p1").innerHTML = ""; document.getElementById("p0").innerHTML = "!!First Name Can't Be Empty";
    }


    else if (d.length < 6) {
        document.getElementById("p0").innerHTML = "";
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p1").innerHTML = "";
        document.getElementById("p2").innerHTML = "!!Minimum Length For Password is 6";

    }

    else if (d != e) {
        document.getElementById("p0").innerHTML = "";
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p1").innerHTML = "";
        document.getElementById("p1").innerHTML = "!! Password Does not Matched";
    }

    else {
        document.getElementById("p0").innerHTML = "";
        document.getElementById("p2").innerHTML = "";
        document.getElementById("p1").innerHTML = "";
        var fd = "<p class='lg1'>Welcome To MathMads,Registered Successfully!! </p><br><p class='lg2'>Your Username is : " + a + b + "<br><br>" + "Your Registered Email is: " + g + "<br><br></p>"
        document.getElementById("f1").innerHTML = fd;
        document.getElementById("suh").innerHTML = "Your Account";


    }
}

