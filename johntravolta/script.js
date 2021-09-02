//dom
// let gjt = document.getElementById("gjt");
// let gl = document.getElementById("gl");
// let tjt = document.getElementById("tjt");
// let tl = document.getElementById("tl");
// let hgjt = document.getElementsByClassName("hgjt");

document.getElementById("gjt").addEventListener("click", function() {
    document.getElementById("hgl").style.visibility = "hidden";
    document.getElementById("hgl").style.position = "absolute";
    document.getElementById("hgjt").style.visibility = "visible";
    document.getElementById("hgjt").style.position = "unset";
});

document.getElementById("gl").addEventListener("click", function() {
    document.getElementById("hgjt").style.visibility = "hidden";
    document.getElementById("hgjt").style.position = "absolute";
    document.getElementById("hgl").style.visibility = "visible";
    document.getElementById("hgl").style.position = "unset";
});

function gajiJohn() {
    let jamNormal = document.getElementById("jamNormal").value;
    let jamLembur = document.getElementById("jamLembur").value;
    let gajiNormal = document.getElementById("gajiNormal").value;
    let gajiLembur = document.getElementById("gajiLembur").value;
    let pengeluaran = document.getElementById("pengeluaran").value;
    let totalLembur = jamLembur - jamNormal;
    let totalGajiNormal = gajiNormal * jamNormal;
    let totalGajiLembur = gajiLembur * totalLembur;
    let totalGaji = totalGajiNormal + totalGajiLembur;
    let ket;

    if (totalGaji > pengeluaran) {
        ket = "Bisa menabung"
    }else if(totalGaji==pengeluaran){
        ket = "Tidak bisa menabung!"
    }else{
        ket = "Cari tambahan!"
    }

    document.getElementById("hasilGajiJohn").innerHTML = "Lama lembur = " + totalLembur + " Jam" + "<br>" + "Gaji normal = " + "Rp. " + gajiNormal + " Per Jam" + "<br>" +  "Gaji Lembur = " + "Rp. " + gajiLembur + " Per Jam" + "<br>" + "Pengeluaran : Rp. " + pengeluaran;
    document.getElementById("jmlGajiJohn").innerHTML = "Gaji John Travolta = " + totalGaji + " / Minggu" + "<br>" + "<div id=\"ket\" class=\"btn btn-success btn-block disabled\">"+ket+"</div>";
}

function hitungGajiCustom() {
    let jamNormalCustom = document.getElementById("jamNormalCustom").value;
    let jamLemburCustom = document.getElementById("jamLemburCustom").value;
    let gajiNormalCustom = document.getElementById("gajiNormalCustom").value;
    let gajiLemburCustom = document.getElementById("gajiLemburCustom").value;
    let pengeluaranCustom = document.getElementById("pengeluaranCustom").value;
    let totalLemburCustom = jamLemburCustom - jamNormalCustom;
    let totalGajiNormalCustom = gajiNormalCustom * jamNormalCustom;
    let totalGajiLemburCustom = gajiLemburCustom * totalLemburCustom;
    let totalGajiCustom = totalGajiNormalCustom + totalGajiLemburCustom;

    let ketCustom;

    if (totalGajiCustom > pengeluaranCustom) {
        ketCustom = "Bisa menabung"
    }else if(totalGajiCustom==pengeluaranCustom){
        ketCustom = "Tidak bisa menabung!"
    }else{
        ketCustom = "Cari tambahan!"
    }

    document.getElementById("hasilGajiCustom").innerHTML = "Lama lembur = " + totalLemburCustom + " Jam" + "<br>" + "Gaji normal = " + "Rp. " + gajiNormalCustom + " Per Jam" + "<br>" +  "Gaji Lembur = " + "Rp. " + gajiLemburCustom + " Per Jam" + "<br>" + "Pengeluaran : Rp. " + pengeluaranCustom;
    document.getElementById("jmlGajiCustom").innerHTML = "Gaji Anda = " + totalGajiCustom + " / Minggu" + "<br>" + "<div id=\"ket\" class=\"btn btn-success btn-block disabled\">"+ketCustom+"</div>";
}