const products = [
  // PHONES
  {id:1, name:"iPhone 14 Pro Max 256GB - Deep Purple", price:850000, old:950000, cat:"phone", rating:"★★★★★ 4.9", badge:"-10%", img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400"},
  {id:2, name:"Samsung S23 Ultra 512GB", price:720000, old:800000, cat:"phone", rating:"★★★★★ 5.0", badge:"HOT", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400"},
  {id:11, name:"Power Bank 20000mAh Fast Charge", price:15000, old:20000, cat:"phone", rating:"★★★★☆ 4.6", badge:"", img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400"},

  // FASHION - Men Wear, Wig, Bag
  {id:3, name:"Bone Straight Human Hair Wig 22inches", price:65000, old:80000, cat:"fashion", rating:"★★★★★ 4.8", badge:"-18%", img:"https://images.unsplash.com/photo-1595476108010-b4d1f102b4b1?w=400"},
  {id:4, name:"Men Wear - Corporate Shirt & Trouser Set", price:25000, old:30000, cat:"fashion", rating:"★★★★☆ 4.5", badge:"MEN WEAR", img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"},
  {id:10, name:"Men Wear - Native Senator Style", price:35000, old:40000, cat:"fashion", rating:"★★★★★ 4.9", badge:"NEW", img:"https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400"},
  {id:23, name:"Female Cloth - Ankara Gown", price:18000, old:25000, cat:"fashion", rating:"★★★★☆ 4.6", badge:"", img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400"},

  // PERFUME
  {id:13, name:"Dior Sauvage EDP 100ml - Men Perfume", price:35000, old:45000, cat:"perfume", rating:"★★★★★ 5.0", badge:"BEST SELLER", img:"https://images.unsplash.com/photo-1541643600914-78b084683601?w=400"},
  {id:14, name:"Bleu de Chanel 100ml - Men Perfume", price:32000, old:40000, cat:"perfume", rating:"★★★★★ 4.9", badge:"-20%", img:"https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400"},
  {id:15, name:"Good Girl Perfume 80ml - Women", price:28000, old:35000, cat:"perfume", rating:"★★★★★ 4.8", badge:"WOMEN", img:"https://images.unsplash.com/photo-1595425959632-34f2822322ce?w=400"},
  {id:16, name:"Oud Wood Intense 100ml Unisex Perfume", price:40000, old:50000, cat:"perfume", rating:"★★★★★ 5.0", badge:"LUXURY", img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400"},

  // SKINCARE
  {id:18, name:"CeraVe Hydrating Cleanser 355ml - Skincare", price:12000, old:15000, cat:"skincare", rating:"★★★★★ 4.9", badge:"DERMA", img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400"},
  {id:19, name:"The Ordinary Niacinamide Serum 30ml - Skincare", price:9500, old:12000, cat:"skincare", rating:"★★★★★ 4.8", badge:"BEST SELLER", img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400"},
  {id:20, name:"Nivea Perfect & Radiant Body Lotion 400ml", price:6500, old:8000, cat:"skincare", rating:"★★★★☆ 4.6", badge:"CREAM", img:"https://images.unsplash.com/photo-1585945037807-a23933d7ef67?w=400"},

  // ELECTRONICS
  {id:5, name:"Smart LED TV 55 Inches 4K Television", price:320000, old:380000, cat:"electronics", rating:"★★★★☆ 4.7", badge:"-15%", img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400"},
  {id:6, name:"DSTV Full Kit + 1 Month Compact", price:35000, old:40000, cat:"electronics", rating:"★★★★☆ 4.5", badge:"", img:"https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400"},
  {id:9, name:"JBL Bluetooth Speaker Loud", price:30000, old:40000, cat:"electronics", rating:"★★★★☆ 4.6", badge:"", img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"},

  // HOME
  {id:7, name:"3KVA Solar System Full Installation", price:750000, old:850000, cat:"home", rating:"★★★★★ 5.0", badge:"INSTALL", img:"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"},
  {id:8, name:"Rechargeable Standing Fan 18inches", price:45000, old:55000, cat:"home", rating:"★★★★☆ 4.6", badge:"FAN", img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400"},
];

let cart = [];

// Show products on page
function loadProducts(list, title="All Products"){
  document.getElementById("cat-title").innerText = title;
  let grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  if(list.length===0){
    grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;padding:30px;color:#888'>No product found</p>";
    return;
  }
  list.forEach(p=>{
    grid.innerHTML += `
      <div class="product-card">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
          <h4>${p.name}</h4>
          <div class="stars">${p.rating}</div>
          <div class="price-row"><span class="price">₦${p.price.toLocaleString()}</span><span class="old">₦${p.old.toLocaleString()}</span></div>
          <button id="btn-${p.id}" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>`;
  });
}
loadProducts(products);

// Add to cart
function addToCart(id){
  let prod = products.find(p=>p.id===id);
  let exist = cart.find(c=>c.id===id);
  if(exist){ exist.qty++; } else { cart.push({...prod, qty:1}); }
  updateCart();
  let btn = document.getElementById(`btn-${id}`);
  btn.innerText = "Added ✓";
  btn.classList.add("added");
  setTimeout(()=>{btn.innerText="Add to Cart"; btn.classList.remove("added")},1200);
}

// Update cart count
function updateCart(){
  document.getElementById("cart-count").innerText = cart.reduce((a,b)=>a+b.qty,0);
  document.getElementById("modal-count").innerText = cart.reduce((a,b)=>a+b.qty,0);
  let itemsDiv = document.getElementById("cart-items");
  if(cart.length===0){
    itemsDiv.innerHTML='<p style="text-align:center;color:#888;padding:20px">Cart is empty</p>';
    document.getElementById("cart-total").innerText="0";
    return;
  }
  itemsDiv.innerHTML = "";
  let total = 0;
  cart.forEach(c=>{
    total += c.price*c.qty;
    itemsDiv.innerHTML += `<div class="item"><div style="display:flex;align-items:center;gap:8px"><img src="${c.img}" style="width:40px;height:40px;border-radius:8px;object-fit:cover"><span>${c.name}<br><b>₦${c.price.toLocaleString()} x ${c.qty}</b></span></div><span style="color:red;cursor:pointer;font-weight:bold" onclick="removeItem(${c.id})">X</span></div>`;
  });
  document.getElementById("cart-total").innerText = total.toLocaleString();
}

function removeItem(id){ cart = cart.filter(c=>c.id!==id); updateCart(); }
function openCart(){ document.getElementById("cart-modal").style.display="flex"; }
function closeCart(){ document.getElementById("cart-modal").style.display="none"; }
function clearCart(){ cart=[]; updateCart(); closeCart(); }

// Filter by category button
function filterCat(cat, btn){
  document.querySelectorAll(".cat-btn").forEach(b=>b.classList.remove("active"));
  if(btn) btn.classList.add("active");
  if(cat==="all") loadProducts(products, "All Products");
  else loadProducts(products.filter(p=>p.cat===cat), cat.toUpperCase());
}
function filterCatBtn(cat){
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
  setTimeout(()=>{ filterCat(cat, document.querySelector(`[onclick*="'${cat}'"]`)); },400);
}

// SMART SEARCH - This is the part you asked for
function searchProduct(){
  let input = document.getElementById("search").value.toLowerCase().trim();

  if(input === ""){
    loadProducts(products, "All Products");
    return;
  }

  // Smart word mapping - so men wear shows fashion etc
  let smartMap = {
    "men wear": "fashion",
    "men": "fashion",
    "cloth": "fashion",
    "clothes": "fashion",
    "shirt": "fashion",
    "wig": "fashion",
    "bag": "fashion",
    "cream": "skincare",
    "lotion": "skincare",
    "serum": "skincare",
    "face": "skincare",
    "scent": "perfume",
    "fragrance": "perfume",
    "cologne": "perfume"
  };

  // Check if typed word is in smart map
  if(smartMap[input]){
    input = smartMap[input];
  }

  // Search name or category
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(input) ||
    p.cat.toLowerCase().includes(input)
  );

  loadProducts(filtered, `Search: "${document.getElementById("search").value}" - ${filtered.length} found`);
}

// Order via WhatsApp
function placeOrder(){
  let name = document.getElementById("custName").value.trim();
  let phone = document.getElementById("custPhone").value.trim();
  let addr = document.getElementById("custAddress").value.trim();
  let note = document.getElementById("custNote").value.trim();
  if(cart.length===0){ alert("Cart is empty, add product first"); return; }
  if(name===""||phone===""||addr===""){ alert("Fill Name, Phone and Address"); return; }
  let msg = `*NEW ORDER FROM STB STORE*%0A%0A`;
  cart.forEach(c=>{ msg+= `• ${c.name} x${c.qty} = ₦${(c.price*c.qty).toLocaleString()}%0A`; });
  msg+= `%0A*TOTAL: ₦${document.getElementById("cart-total").innerText}*%0A%0A*Customer:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${addr}%0A*Note:* ${note}`;
  window.open("https://wa.me/2348161713227?text="+msg, "_blank");
}

function sendMessage(){
  let name = document.getElementById("cName").value;
  let phone = document.getElementById("cPhone").value;
  let m = document.getElementById("cMsg").value;
  if(name===""||m===""){ alert("Enter name and message"); return; }
  document.getElementById("cStatus").innerText = "✓ Message received! We will call you soon. Thank you "+name;
  document.getElementById("cStatus").style.color="green";
  let full = `Name: ${name}%0APhone: ${phone}%0AMessage: ${m}`;
  window.open("https://wa.me/2348161713227?text="+full, "_blank");
}