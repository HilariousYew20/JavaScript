var where = null;
var buttonIsHere = false;
// Tarih yazdırma
var tarih = new Date();
var date = document.createElement("p1");
var headerDiv = document.getElementById("header");
var ay = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
// headerDiv.appendChild(date.appendChild(document.createTextNode(tarih.getDay()+"/"+ay[tarih.getMonth()]+"/"+tarih.getFullYear())));
function yazdir(yer ,divid, baslik, mesaj){
    if (! buttonIsHere){
        where = yer;
        var div = document.getElementById(String(divid));
        var head1 = document.createElement("h1");
        var para1 = document.createElement("p1");
        var br = document.createElement("br");
        var button = document.createElement("button");
        var head = String(baslik);
        var para = String(mesaj);
        button.id = "button1";
        head1.id="head1";
        para1.id="para1";
        br.id= "br1";
        button.className = "button";
        var text = document.createTextNode("Küçült");
        button.appendChild(text);
        head1.appendChild(document.createTextNode(head));
        para1.appendChild(document.createTextNode(para));
        div.appendChild(head1);
        div.appendChild(para1);
        div.appendChild(br);
        div.appendChild(button);
        button.onclick = function(){
            document.getElementById("head1").remove();
            document.getElementById("para1").remove();
            document.getElementById("button1").remove();
            document.getElementById("br1").remove();
            buttonIsHere = false;
            where = null;
        }
        buttonIsHere = true;
    }
    else {
        alert(where +" bölümünü kapatıp tekrar deneyin.")
    }
}
