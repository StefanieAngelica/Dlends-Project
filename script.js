const users = [
  { email: "stefanieangelica@gmail.com", password: "2204060906" },
  { email: "admin_dlendsproject@gmail.com", password: "admin04" }
  ];
  
  function login(event) {
  event.preventDefault();
  
  const inputEmail = document.querySelector("input[type='text']").value;
  const inputPassword = document.querySelector("input[type='password']").value;
  
  if (inputEmail === "guest" && inputPassword === "guest") {
  window.location.href = "home.html";
  return;
  }
  
  const user = users.find(
  u => u.email === inputEmail && u.password === inputPassword
  );
  
  if (user) {
  localStorage.setItem("loggedInUser ", user.email);
  window.location.href = "home.html";
  } 
  else {
  alert("Email atau password salah!");
  }
  }
  
  function register(event) {
  event.preventDefault();
  const newEmail = document.querySelector("input[type='email']").value;
  const newPassword = document.querySelector("input[type='password']").value;
  const existingUser = users.find(u => u.email === newEmail);
  if (existingUser ) 
    {
  alert("Email sudah terdaftar!");
  return;
  }
  users.push({ email: newEmail, password: newPassword });
  alert("Pendaftaran berhasil! Silakan login.");
  }
  
  function showInfoPembelian() {
    document.getElementById("output").innerHTML = `
    <div style="text-align: left;">
    <div style="
    background-image: url('images/bginfoproduk.jpeg');
    background-size: cover;
    background-position: center;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(17, 116, 255, 0.1);
    color: black;
    backdrop-filter: brightness(0.8);
    ">
    <h3 style="font-size: 18px;">Langkah-langkah Pembelian Produk Coding:</h3>
<ol style="font-size: 16px;">
  <li>Pilih produk coding pada menu "Produk Coding".</li>
  <li>Tekan produk yang diinginkan dan konfirmasi pesanan.</li>
  <li>Transfer ke rekening Sea Bank <b>9010 0429 9914</b>.</li>
  <li>Screenshot bukti pembayaran yang berisi nama produk dan total pembayaran.</li>
  <li>Kirim screenshot ke admin melalui <a href="https://wa.me/6287895025051" target="_blank">link WhatsApp</a>.</li>
</ol>
<p style="font-size: 16px;">Admin akan segera memproses dan mengirimkan produk yang kamu beli. Untuk melihat tampilan produk, cek IG <b>@dlends_project</b>.</p>
<p style="font-size: 16px;"><b>Catatan Tambahan:</b> Only Source Code C++ berarti hanya membeli <b>kode program saja berupa file .cpp</b>.</p>
<p style="font-size: 16px;">Jika membeli <b>paket lengkap</b>, kamu akan mendapat <b>source code, e-modul berisi fungsi kode, dan template untuk tugas</b>.</p>
    </div>
    </div>
    `;
    }
  
  
  let selectedProduct = null;
  let cart = [];
  const products = [
    { nama: "Paket Lengkap Mini Program C++ Smart Food Ordering System", price: "Rp50.000", gambar: "images/viewproduk1.jpeg" },
    { nama: "Paket Lengkap Mini Program C++ Sistem Penentu Zodiak", price: "Rp35.000", gambar: "images/viewproduk2.jpeg" },
    { nama: "Paket Lengkap Program C++ Sistem Member Card", price: "Rp35.000", gambar: "images/viewproduk3.jpeg" },
    { nama: "E-Modul Basic Program C++", price: "Rp20.000", gambar: "images/viewproduk4.jpeg" },
    { nama: "Only Source Code Program C++ Sistem Kabataku", price: "Rp5.000", gambar: "images/viewproduk5.jpeg" },
    { nama: "Only Source Code Program C++ Sistem Biodata Mahasiswa", price: "Rp5.000", gambar: "images/viewproduk6.jpeg" },
    { nama: "Only Source Code Program C++ Sistem Jarak dan Alat Transportasi", price: "Rp5.000", gambar: "images/viewproduk7.jpeg" },
    { nama: "Only Source Code Program C++ Sistem Kedewasaan Berdasarkan Umur", price: "Rp5.000", gambar: "images/viewproduk8.jpeg" },
    { nama: "Only Source Code Program C++ Sistem Tahun Kabisat", price: "Rp5.000", gambar: "images/viewproduk9.jpeg" },
    { nama: "Only Source Code Mini Program C++ Smart Food Ordering System", price: "Rp35.000", gambar: "images/viewproduk10.jpeg" },
    { nama: "Only Source Mini Program C++ Sistem Penentu Zodiak", price: "Rp20.000", gambar: "images/viewproduk11.jpeg" },
    { nama: "Only Source Mini Program C++ Sistem Member Card", price: "Rp20.000", gambar: "images/viewproduk12.jpeg" }
  ];
  
  const output = document.getElementById("output");
  output.innerHTML = "";
  
  function showProdukCoding() {

    document.getElementById("welcome").style.display = "none";
    document.querySelector(".options").style.display = "none";
    document.body.style.backgroundImage = "url('images/bgproduk.jpeg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  
   
    const output = document.getElementById("output");
    output.innerHTML = "";
  
    const productContainer = document.createElement("div");
    productContainer.style.position = "relative";
    productContainer.style.width = "100%";
    productContainer.style.maxWidth = "1400px";
    productContainer.style.margin = "40px auto";
    productContainer.style.height = "auto";
    productContainer.style.borderRadius = "10px";
    productContainer.style.overflow = "hidden"; 
    productContainer.style.border = "8px solidrgb(13, 38, 51)";
    productContainer.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
  
    const videoElement = document.createElement("video");
    videoElement.src = "videos/animasiltrproduk.mp4";
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.style.position = "absolute";
    videoElement.style.top = "70";
    videoElement.style.left = "0";
    videoElement.style.width = "100%";
    videoElement.style.height = "100%";
    videoElement.style.objectFit = "cover";
    videoElement.style.zIndex = "0";
  
    const contentOverlay = document.createElement("div");
    contentOverlay.style.position = "relative";
    contentOverlay.style.zIndex = "1";
    contentOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.01)";
    contentOverlay.style.padding = "30px";
    contentOverlay.style.boxSizing = "border-box";
  
    const title = document.createElement("h2");
    title.textContent = "Pilih Produk";
    title.style.color = "white";
    title.style.textAlign = "center";
    title.style.marginBottom = "40px";
    contentOverlay.appendChild(title);
  
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))";
    grid.style.gap = "20px";
  
    products.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "produk-card";
      card.style.backgroundColor = "white";
      card.style.borderRadius = "10px";
      card.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.3)";
      card.style.padding = "10px";
      card.style.cursor = "pointer";
      card.style.textAlign = "center";
      card.onclick = () => addToCart(index);
  
      card.innerHTML = `
        <h3 style="color: black;">Produk ${index + 1}</h3>
        <img src="${product.gambar}" alt="${product.nama}" style="width:100%; max-height:130vh; object-fit:contain; border-radius:8px; margin-bottom:10px;">
        <div class="price" style="margin-top:10px; background-color:red; color:white; padding:5px; border-radius:5px;">
          ${product.price}
        </div>
      `;
      grid.appendChild(card);
    });

    contentOverlay.appendChild(grid);
  
    const backButton = document.createElement("button");
    backButton.textContent = "Kembali";
    backButton.onclick = goBack;
    backButton.style.marginTop = "30px";
    backButton.style.padding = "10px 20px";
    backButton.style.backgroundColor = "#007bff";
    backButton.style.color = "white";
    backButton.style.border = "none";
    backButton.style.borderRadius = "5px";
    backButton.style.cursor = "pointer";
    backButton.style.display = "block";
    backButton.style.marginLeft = "auto";
    backButton.style.marginRight = "auto";
    contentOverlay.appendChild(backButton);
  
    productContainer.appendChild(videoElement);
    productContainer.appendChild(contentOverlay);
  
    output.appendChild(productContainer);
  }
  
    function goBack() {
      cart = []; 
      document.querySelector(".options").style.display = "flex"; 
      document.getElementById("welcome").style.display = "block"; 
      const output = document.getElementById('output');
      output.innerHTML = ''; 
      document.body.style.backgroundImage = "url('images/bghome.jpeg')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
  }
  
  function formatCurrency(amount) {
    if (amount === 0) return "Rp 0,00"; 
  
    return amount.toLocaleString('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
  }
  
  function addToCart(index) {
    const product = products[index];
    cart.push(product);
    const output = document.getElementById('output');
    
    output.innerHTML = `
    <h2 style="color: black;">Produk Yang Anda Pilih</h2>
    <ul style="list-style: none; padding: 0;">
      ${cart.map(item => `<li>${item.nama} - ${formatCurrency(item.price)}</li>`).join('')}
    </ul>
    <p>Total: Rp ${formatCurrency(getTotalPrice())}</p>
    <button onclick="confirmOrder()">Konfirmasi Pesanan</button>
    <button onclick="goBack()">Kembali</button>
  `;
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => {
    const angka = parseInt(item.price.replace(/[^\d]/g, ''));
    return total + angka;
    }, 0);
    }
  
    function confirmOrder() {
      const totalPrice = getTotalPrice();
      const output = document.getElementById('output');
      const productList = cart.map(item => `<li>${item.nama} - ${formatCurrency(item.price)}</li>`).join('');
      
      output.innerHTML = `
        <h2 style="color: black;">Konfirmasi Pesanan</h2>
        <p>Apakah produk yang anda pesan sudah benar?</p>
        <ul style="list-style: none; padding: 0;">
          ${productList}
        </ul>
        <p>Total Harga: ${formatCurrency(totalPrice)}</p>
        <p>Nomor Rekening: SEA Bank 9010 0429 9914</p>
        <p>Setelah anda melakukan pembayaran, silakan mengirim bukti transfer ke nomor 087895025051 atau klik link: <a href="https://wa.me/6287895025051" target="_blank">WhatsApp</a></p>
        <button style="background-color: green; color: white; border: none; padding: 10px 20px; cursor: pointer;" onclick="finalizeOrder()">Ya, Lanjutkan Pemesanan</button>
        <button onclick="goBack()">Kembali</button>
      `;
  }
  
  function finalizeOrder() {
      const output = document.getElementById('output');
      const totalPrice = getTotalPrice(); 
      const productList = cart.map(item => `<li>${item.nama} - ${formatCurrency(item.price)}</li>`).join(''); 
  
      output.innerHTML = `
        <h2 style="color: black;">Struk Pemesanan</h2>
        <ul style="list-style: none; padding: 0;">
          ${productList}
        </ul>
        <p>Total Harga: ${formatCurrency(totalPrice)}</p>
        <p>Nomor Rekening: SEA Bank 9010 0429 9914</p>
        <p>Setelah anda melakukan pembayaran, silakan mengirim bukti transfer ke nomor 087895025051 atau klik link: <a href="https://wa.me/6287895025051" target="_blank">WhatsApp</a></p>
        <button onclick="goBack()">Kembali</button>
        `;
  }
  
  function showRequestProgram() {
    document.getElementById("output").innerHTML = `
  
    <div style="
      padding : 20px;
      background-image: url('images/bginfoproduk.jpeg');
      position: center;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(17, 116, 255, 0.1);
      color: black;
    ">
        <h3>Fitur Request Program</h3>
        <p>Jika kamu membutuhkan program yang tidak tersedia, kamu bisa konsultasi langsung ke nomor <b>087895025051</b>.</p>
        <h3>Jam Operasional</h3>
        <p>Jumat dan Sabtu, 08.00 - 20.00 WIB</p>
      </div>
    </div>
    `;
  }
  
    function showSosialMedia() {
    document.getElementById("output").innerHTML = `
    <div style="
    background-image: url('images/bginfoproduk.jpeg');
    background-size: cover;
    background-position: center;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(17, 116, 255, 0.1);
    color: black;
    backdrop-filter: brightness(0.8);
    ">
    <h3>Sosial Media Dlends Project</h3>
    <p>Instagram: <b>@dlends_project</b></p>
    <p>Ingin Mengunjungi Instagram Dlends Project?</p>
    <button style="background:#0288d1; color:white; padding:0.5rem 1rem; border:none; border-radius:10px; margin-right:20px;" onclick="window.open('https://instagram.com/dlends_project', '_blank')">Iya</button>
    <button style="background:red; color:white; padding:0.5rem 1rem; border:none; border-radius:10px;" onclick="goBack()">Tidak</button>
    `;
    }