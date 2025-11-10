/* Fungsi untuk BUKA, TUTUP, dan TOGGLE sidebar navigasi.
  Ini adalah satu-satunya file script yang Anda perlukan.
*/

function openSidebar() {
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("mySidenav").style.left = "-250px"; 
    document.getElementById("overlay").style.display = "none";
}

function toggleSidebar() {
    var sidebar = document.getElementById("mySidenav");
    var style = window.getComputedStyle(sidebar); 

    if (style.left === "0px") {
        closeSidebar();
    } else {
        openSidebar();
    }
}