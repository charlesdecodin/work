let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let img = new Image();
img.src = 'http://scd.rfi.fr/sites/filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aef_image/2018-11-30t153804z_1078111843_rc16130e3990_rtrmadp_3_g20-argentina-family-photo_0.jpg';
   
img.onload = function(){
     ctx.drawImage(img, 0, 0, 1000, 580);
     ctx.beginPath();
     ctx.rect(470, 140, 100, 100);
     ctx.fillStyle = "black";
     ctx.fill();
     ctx.beginPath();
     ctx.arc(110, 225, 50, 0, 2 * Math.PI, false);
     ctx.stroke();

}
