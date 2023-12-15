var top=0
let books=[{ad:"Crime and Punishment",
yazar:"Dostoyevski",
 adet:120.99,
 tane:0},
 
 {ad:"Karamazov Kardesler",
 yazar:"Dostoyevski",
  adet:120.33,
  tane:0},
  {ad:"Sefiller",
yazar:"Victor Hugo",
 adet:22.99,
 tane:0},
  {ad:"Madame Bovary",
yazar:"Gustave Flaubert",
 adet:67.99,
 tane:0},
 {ad:"Anna Karanina",
yazar:"Leo Tolstoy",
 adet:69.99,
 tane:0},
 {ad:"Satranc ",
yazar:"Stefan Zweig",
 adet:99.99,
 tane:0},
 {ad:"1984",
yazar:"George Orwell",
 adet:34.40,
 tane:0},
 {ad:"Hayvan Çiftliği",
yazar:"George Orwell",
 adet:22.22,
 tane:0},
 {ad:"The Hound Of The Baskervilles",
yazar:"Conan Doyle",
 adet:22.22,
 tane:0},
 {ad:"Beyaz Diş",
yazar:"Jack London",
 adet:22.22,
 tane:0},
 
]
var sum=0;
let eklenenkitaplar=[]

document.getElementById('searchInput').addEventListener('keyup', function () {
    // Değişkenler tanımlanır.
  var input, filter, cards, card, title, author, i;
  // 'input' değişkeni, 'searchInput' öğesine atanır.
  input = document.getElementById('searchInput');
  // 'filter' değişkeni, metin girişinin değerinin büyük harflerle tutulur.
  filter = input.value.toUpperCase();
  // 'cards' değişkeni, 'bookList' öğesine ait 'bookCard' sınıfına sahip tüm öğeleri içerir.
  cards = document.getElementById("bookList").getElementsByClassName('bookCard');

  // Tüm kitap kartları üzerinde döngü gerçekleştirilir.
  for (i = 0; i < cards.length; i++) {
    // Her bir kitap kartı için ilgili öğe ve bilgiler alınır.
    card = cards[i];
    // 'title' değişkeni, kitabın adının büyük harflerle tutulan değeridir.
    title = card.dataset.name.toUpperCase();
    // 'author' değişkeni, kitabın yazarının büyük harflerle tutulan değeridir.
    //dataset, HTML elementlerinin özel veri özelliklerine (data attributes) erişim sağlamak için kullanılan bir özelliktir. 
    author = card.dataset.author.toUpperCase();
    // Eğer arama filtresi, kitap adını veya yazarı içeriyorsa, kitap kartı görünür yapılır. Aksi takdirde gizlenir.
    if (title.includes(filter) || author.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  }
  // 'bookList' öğesi, kitap kartlarını içeren bölgenin görünür hale gelmesini sağlar.
  document.getElementById('bookList').style.display = "flex";
    });

    // Kategori filtreleme işlevi
    document.querySelectorAll('input[type=checkbox]').forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        var selectedCategories = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(function (checkbox) {
          return checkbox.value;
        });
        var cards = document.getElementById("bookList").getElementsByClassName('bookCard');
        for (var i = 0; i < cards.length; i++) {
          var card = cards[i];
          var category = card.dataset.category;
          if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        }
        document.getElementById('bookList').style.display = "flex";
      });
    });
    function performLogin() {
    // Formdaki giriş bilgilerini al
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Kullanıcı adı, e-posta ve şifre boş mu kontrol et
    if (!username || !email || !password) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    // Sunucu tarafından sağlanan bir kullanıcı veritabanında simüle edilen kullanıcı bilgileri
    var simulatedUser = {
        username: 'exampleUser',
        email: 'user@example.com',
        password: 'examplePassword'
    };

    // Girilen bilgileri simüle edilen kullanıcı ile karşılaştır
    if (username === simulatedUser.username && email === simulatedUser.email && password === simulatedUser.password) {
        // Kullanıcı başarılı bir şekilde giriş yaptı
        alert('Giriş başarılı! Hoş geldiniz, ' + username + '!');
        // TODO: Gerçek bir uygulamada bu noktada genellikle bir oturum (session) başlatılır.
    } else {
        // Kimlik doğrulama başarısız oldu
        alert('Giriş başarısız. Lütfen kullanıcı adı, e-posta ve şifrenizi kontrol edin.');
    }
}
 // JavaScript functions
 function openLoginForm() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeLoginForm() {
  document.getElementById('loginModal').style.display = 'none';
}

function checkPassword() {
  // Burada şifre kontrolü yapabilirsiniz.
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Örnek bir şifre kontrolü, burayı kendi gereksinimlerinize göre özelleştirebilirsiniz.
  if (password === 'gecerliSifre') {
      alert('Giriş başarılı! Kullanıcı Adı: ' + username + ', E-posta: ' + email);
      closeLoginForm();
  } else {
      alert('Hatalı şifre! Lütfen doğru şifreyi girin.');
  }
}
let sayı =document.getElementById("ali")
let arttır= ()=>{
  top++
  
  sayı.innerText=parseInt(sayı.innerText)+1
  alert("Kitabınız Sepete Eklendi")
   

}

  
 
  let y=document.querySelectorAll(".odunc")
  y.forEach(function(eleman){
    eleman.addEventListener("click",arttır)
   
  })
  
//   suc.addEventListener("click",function(){
//      let x=document.createElement("div")
//      x.classList.add("flex")
//      let image=document.createElement("img")
//      image.style.width="125px"
//      image.style.height="125px"
//      image.style.margin="20px"
//      image.src="images/crime.jpg"
//      let ikincidiv=document.createElement("div")
//      ikincidiv.style.padding="20px"
//      let para=document.createElement("p")
//      para.innerHTML="Ad: " + books[0].ad + "<br></br>"+"Yazar: "+ books[0].yazar
//      ikincidiv.appendChild(para)
//      x.appendChild(image)
//      x.appendChild(ikincidiv)

     
      

//      document.getElementById("sepet").appendChild(x)
   
//   })
//   let karam=document.getElementById("karam")
//   karam.addEventListener("click",function(){
//     let x=document.createElement("div")
//     x.classList.add("flex")
//     let image=document.createElement("img")
//     image.style.width="125px"
//     image.style.height="125px"
//     image.style.margin="20px"
//     image.src="images/kramozov.jpg"
//     let ikincidiv=document.createElement("div")
//     ikincidiv.style.padding="20px"
//     let para=document.createElement("p")
//     para.innerHTML="Ad: " + books[1].ad + "<br></br>"+"Yazar: "+ books[1].yazar
//     ikincidiv.appendChild(para)
//     x.appendChild(image)
//     x.appendChild(ikincidiv)

    
     

//     document.getElementById("sepet").appendChild(x)
  
//  })

 let ab=1;
 function createBookElement(book, imagePath) {
  
  let x = document.createElement("div");
  x.classList.add("flex");
  x.style.borderBottom="1px solid black"
  ab++;
  x.id="suc"+ab;

  let image = document.createElement("img");
  image.style.width = "125px";
  image.style.height = "125px";
  image.style.margin = "20px";
  image.src = imagePath;
  

  let ikincidiv = document.createElement("div");
  ikincidiv.style.padding = "20px";

  let ucuncudiv = document.createElement("div");
  ucuncudiv.style.padding = "20px";
  
  let sa = document.createElement("p");
  sa.innerHTML = "Fiyat:" + book.adet;
  let taneSayisi = document.createElement("span");
  taneSayisi.innerHTML = "Tane:" +book.tane ;
  
  

  
  let sil=document.createElement("img")
  sil.style.width = "30px";
  sil.style.height = "30px";
  sil.style.margin = "10px";
  sil.src = "images/1345874.png";
  
  sil.addEventListener("click",function(){
   
   
    x.remove()
    sum=fiyatHesapla()
    console.log(sum);
    sayı.innerText=parseInt(sayı.innerText)-parseInt(book.tane)
    taneSayisi.innerHTML = "Tane:" +book.tane ;
    let tanehesapla=0
    for(let i=0;i<book.tane;i++){
      eklenenkitaplar.pop(book)
      tanehesapla++;
       
    }
    sum=sum-(book.adet*(book.tane))
    book.tane=book.tane-tanehesapla;
    console.log(eklenenkitaplar);
    
    if(eklenenkitaplar.length==0){
      document.getElementById("Sepetimdekiler").innerHTML="Sepetinizde Ürün Bulunmamaktadır"
      document.getElementById("fiyat").innerText="Ürün yok"
    }
    if(!(eklenenkitaplar.length==0)){
      document.getElementById("Sepetimdekiler").innerHTML="Sepetimdekiler"
      document.getElementById("fiyat").innerText="Fiyat:" +sum

    }
     
   
    console.log("book.adet"+book.adet);
    console.log("book.tane"+book.tane);
    
    sum=0;
    
    console.log(eklenenkitaplar);
    
  console.log("son sum "+sum);
  })
  ucuncudiv.appendChild(sil)

  let para = document.createElement("p");
  para.innerHTML = "Ad: " + book.ad + "<br></br>" + "Yazar: " + book.yazar;

  ikincidiv.appendChild(para);
  ucuncudiv.appendChild(sa)
  ucuncudiv.appendChild(taneSayisi)

  x.appendChild(image);
  x.appendChild(ikincidiv);
  x.appendChild(ucuncudiv);
  

  return x;
}
let adetSayısı=1;
function addBookToCart(bookIndex, imagePath) {

  let book = books[bookIndex];
  let bookElement = createBookElement(book, imagePath);

 
  let filteredbooks = eklenenkitaplar.filter(function (eleman) {
    return eleman.ad==book.ad; 
});

console.log(filteredbooks);
console.log(eklenenkitaplar);
   if((filteredbooks.length==0)){
    document.getElementById("sepet").appendChild(bookElement);
    eklenenkitaplar.push(book)
    
    

  }
 else{
    let ac=ab-1
    document.getElementById("suc"+ac).remove();
    document.getElementById("sepet").appendChild(bookElement);
    eklenenkitaplar.push(book)





 }

 


 
  // eklenenkitaplar.forEach(function(eleman){
  //   if(!(eleman.ad==book.ad)){
        
  //        ;
  //   }
  //   else{
  //       console.log("aynı kitap");
  //   }

  // })
  
  }

   



document.getElementById("suc").addEventListener("click", function () {
  books[0].tane++;
  addBookToCart(0, "images/crime.jpg");
  
  
});

document.getElementById("karam").addEventListener("click", function () {
  books[1].tane++;
  addBookToCart(1, "images/kramozov.jpg");
  
});

document.getElementById("Sefil").addEventListener("click", function () {
  books[2].tane++;
  addBookToCart(2, "images/sefil.jpg");
 
});

document.getElementById("Madam").addEventListener("click", function () {
  books[3].tane++;
  addBookToCart(3, "images/madame.jpg");
  
}); 
document.getElementById("Anna").addEventListener("click", function () {
  books[4].tane++;
  addBookToCart(4, "images/anna.jpg");
  
});
document.getElementById("Satranc").addEventListener("click", function () {
  books[5].tane++;
  addBookToCart(5, "images/satranc.jpg");
 
});
document.getElementById("1984").addEventListener("click", function () {
  books[6].tane++;
  addBookToCart(6, "images/1984.jpg");
});
document.getElementById("hayvan").addEventListener("click", function () {
  books[7].tane++;
  addBookToCart(7, "images/hayvan-ciftligi.jpg");
  
});
document.getElementById("basker").addEventListener("click", function () {
  books[8].tane++;
  addBookToCart(8, "images/baskerville.jpg");

});
document.getElementById("beyaz").addEventListener("click", function () {
  books[9].tane++;
  addBookToCart(9, "images/beyaz-dis.jpg");
});
let sep=document.getElementById("sepet")
let onay=document.getElementById("onnay")
document.getElementById("off").addEventListener("click",function(){
 
  if(sep.style.display === "block" || sep.style.display === ""){
    sep.style.display="none"
    onay.style.display="none"

  }
  else {
    sep.style.display="block"
    onay.style.display="block"

  }
})
document.getElementById("kapama").addEventListener("click",function(){
  if(sep.style.display === "block" || sep.style.display === ""){
    sep.style.display="none"
    onay.style.display="none"


  }
})
window.addEventListener("DOMContentLoaded", function(){
  if (parseInt(sayı.innerText) === 0) {
    onay.style.display = "none";
  }
} );

function fiyatHesapla(){
 
  eklenenkitaplar.forEach(function(eleman){
    sum=eleman.adet +sum
    sum = parseFloat(sum.toFixed(4));
    
    
  })
  return sum
}

document.getElementById("off").addEventListener("click",function(){
  document.getElementById("fiyat").innerText="Fiyat:" +fiyatHesapla()
  sum=0
  if(eklenenkitaplar.length==0){
    document.getElementById("Sepetimdekiler").innerHTML="Sepetinizde Ürün Bulunmamaktadır"
  }
  if(!(eklenenkitaplar.length==0)){
    document.getElementById("Sepetimdekiler").innerHTML="Sepetimdekiler"
  }
})

function cagır(){

    var options = {
        whatsapp: "905559998877",
        call_to_action: "Hello, how can I help you?",
        position: "left",
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
}
