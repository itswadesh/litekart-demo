<template>
  <footer class="txtxlr">
    <div class="md:flex py-3">
        <div class="w-1/4  flex-none p-2">
           <p class="text-center  font-medium">ONLINE SHOPPING</p>
           <ul class="ml-20 py-2 px-2">
               <li><a href="">Men</a></li>
               <li><a href="">Women</a></li>
               <li><a href="">Kids</a></li>
               <li><a href="">Home & Living</a></li>
               <li><a href="">Discover</a></li>
               <li><a href="">Gift Cards</a></li>
               <li><a href="">Myntra Insider</a><span class="desktop-superscript">New</span></li>
           </ul>
        </div>
        <div class="w-1/4 flex-none p-2 px-2">
            <p class="text-center mr-2  font-medium">USEFUL LINKS</p>
            <ul class="mx-24">
               <li><a href="">Men</a></li>
               <li><a href="">Women</a></li>
               <li><a href="">Kids</a></li>
               <li><a href="">Home & Living</a></li>
               <li><a href="">Discover</a></li>
               <li><a href="">Gift Cards</a></li>
               <li><a href="">Myntra Insider</a></li>
           </ul>
        </div>
        <div class="w-1/4 flex-none  p-2">
            <p class="f-medium">EXPERIENCE MYNTRA APP ON MOBILE</p>
            <img class="float-left mt-5  h-10" src="/playstore.png">
            <img class="float-left mt-5  h-10" src="/appstore.png"><br><br><br>
            <h6 class="text-left  text-sm">KEEP IN TOUCH</h6>
            <img class="float-left mt-3 h-5" src="/socialicons.png">
        </div>
        <div class="w-1/4  flex-none p-2">
            <div class=" lg:flex-shrink-0">
                <img class="w-1/4 rounded-sm mb-5 sm:w-10 float-left" src="/original.png" alt="" />
                <p class="w-3/4 float-left mb-5 ml-1 text-sm"><span class="font-medium">100% ORIGINAL guarantee</span> for all products at myntra.com</p>
            </div>
            <div class=" lg:flex-shrink-0">
                <img class="w-1/4 rounded-sm mb-5 sm:w-10 float-left" src="/return.png" alt="" />
                <p class="w-3/4 float-left ml-1 mb-5 text-sm"><span class="font-medium">Return within 30days</span> of receiving your order</p>
            </div>
            <div class=" lg:flex-shrink-0">
                <img class="w-1/4 rounded-sm sm:w-10 mb-5 float-left" src="/truck.png" alt="" />
                <p class="w-3/4 float-left ml-1 text-sm mb-5"><span class="font-medium">Get free delivery</span> for every order above Rs. 1199</p>
            </div>
        </div>
    </div>
    <div class="w-4/4 flex-none container-fluid p-2">
        <p class="text-sm font-medium hr-line">POPULAR SEARCHES</p>
        <p class="txtxlr mt-5 mb-5">Adidas | Arrow | Fila | Online Shopping | Nike | Pepe Jeans | Puma | United Colors of Benetton |  
            Fastrack | Shorts | Being Human | Skirts | Woodland | Supra | Dresses | Clothing | Jewellery |  
            T-shirts |  Shoes | Bags | Watches | Caps | Shirts | Backpacks | Flip Flops | Sunglasses | Kurtas |  
            Lingerie | Jackets |  Skechers | Saree | Sandals | Puma Tshirts | Woodland Shoes | Titan Watches | 
             Fastrack Watches | Wrangler Shirts | Adidas Tshirts | Nike Shoes | Roadster Shirts | Casual Shoes |
              Running Shoes | Nike Sports Shoes | Jeans | Being Human | Tshirts | Converse Shoes | Cricket Shoes</p>
    </div>
    <div class="w-4/4 ">
        <div class="w-2/4 float-left bg-gray-100">
            <p class="txtxlr container-fluid">In case of any concern,<span class="text-indigo-600">Contact Us</span></p>
        </div>

        <div class="w-2/4 float-left bg-gray-100">
            <p class="txtxlr text-right px-20">© 2019 www.myntra.com. All rights reserved.</p>
        </div>
    <button onclick="topFunction()" id="myBtn" title="Go to top"><img class="m-auto w-1/3" src="/up-arrow.png"></button>
        
    </div>
  </footer>
</template>

<script>
export default {

}
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
</script>
<style scoped>
.hr-line{
    border-bottom:1px solid #FAFBFC; 
}
.txtxlr{
    color:#696b79;
    font-size: 15px;
    background: #FAFBFC;
}
.desktop-superscript{
    color: white;
    font-weight: 700;
    font-size: 12px;
    padding: 0px 5px;
    background: red;
    border-radius: 90px;
    margin: 0px 0px 0px 5px;
}
#myBtn {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    background-color:#555;
    color: white;
    cursor: pointer;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    font-size: 22px;
}

#myBtn:hover {
  background-color: #555;
}
</style>