// انیمیشن لود سایت:)

const loaded = document.querySelector(".loader");

window.addEventListener("load", function () {
  console.log(loaded.className);

  loaded.classList.add("hidden");
});

let refreshBtn = document.querySelector(".refresh");

refreshBtn.addEventListener("click", () => location.reload());

let productsContainer = document.querySelector(".products-container");

let productsArray = [
  {
    id: 1,
    tagname: "del",
    title: "حلقه",
    price: "500,000ت",
    pricename: "قیمت: ",
    img: "./image/p1.png",
    priceoff: "450,000 ",
    animation: `data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
    audio:"audio/halghe1.mp3",
  },
  {
    id: 2,
    tagname: "del",
    title: "ساعت",
    price: "1,500,000ت",
    pricename: "قیمت: ",
    img: "image/p2.png",
    priceoff: "1,320,000 ",
    animation: `data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
  audio:"audios/product2.mp3'",
  },
  {
    id: 3,
    tagname: "del",
    title: "خرس تدی سایز 1",
    price: "325,000ت",
    pricename: "قیمت: ",
    img: "image/p3.png",
    priceoff: "300,000 ",
    animation: `data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
  audio:"audios/product2.mp3",
  },
  {
    id: 4,
    tagname: "del",
    title: "دسته گل",
    price: "120,000ت",
    pricename: "قیمت: ",
    img: "image/p4.png",
    priceoff: "100,000 ",
    animation: `data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
  audio:"audios/product2.mp3",
  },
  {
    id: 5,
    tagname: "p",
    title: "خرس تدی سایز 2",
    price: "592,000ت",
    img: "image/p5.png",
    animation: `data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
  audio:"audios/product2.mp3",
  },
  {
    id: 6,
    tagname: "p",
    title: "دسته گل",
    price: "150,000ت",
    img: "image/p6.png",
    animation: `data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
  audio:"audios/product2.mp3",
  },
  {
    id: 7,
    tagname: "del",
    title: "ساعت",
    price: "1,620,000ت",
    pricename: "قیمت: ",
    img: "image/p7.png",
    priceoff: "1,453,000 ",
    animation: `data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
  audio:"audios/product2.mp3",
  },
  {
    id: 8,
    tagname: "del",
    title: "حلقه",
    price: "700,000ت",
    pricename: "قیمت: ",
    img: "image/p8.png",
    priceoff: "610,000 ",
    animation: `data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"`,
  audio:"حلقه1.mp3",
  },
];

productsArray.forEach(function (product) {
  productsContainer.insertAdjacentHTML(
    "beforeend",
    '<div class="product" ' +
     [ product.animation] +
      ' data-id="' +
      product.id +
      '" data-name="' +
      product.title +
      '" data-price="' +

      product.price +
      
      'data-audio="./audio/halghe1.mp3" ><div class="productimg"><img src="' +
      product.img +
      '" alt="حلقه" calss="main-image" /></div></img><a href="product.html?id=' + product.id + '"  class="title">' +
      product.title +
      '</a><p class="price"><' +
      product.tagname +
      ">قیمت: " +
      product.price +
      "</></" +
      product.tagname +
      "><p>" +
      [product.pricename] +
      "" +
      [product.priceoff] +
      '</p><button class="orderBtn add-to-cart" data-product="اضافه به سبد خرید" onclick="addToCart(' +
      product.id +
      ', "' +
      product.title +
      '", ' +
      product.price +
      ')">افزودن به سبد خرید</button></div>'
  );
});

let customScroll = document.querySelector("#scroll");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  let documentHeight = document.body.clientHeight;

  let windowHeight = window.innerHeight;

  let scrollPercent = scrollTop / (documentHeight - windowHeight);

  let scrollPercentRounded = Math.round(scrollPercent * 100);

  customScroll.style.width = scrollPercentRounded + "%";

  console.log(scrollPercentRounded);
});
let productsContainer1 = document.querySelector(".products-container");
let allProductBtn = document.querySelector(".allproductBtn");
let isAdded = false;

const newProducts = [
  { id: 1, title: "حلقه", price: "500,000ت", img: "./image/p1.png" },
  { id: 2, title: "ساعت", price: "1,500,000ت", img: "image/p2.png" },
  { id: 3, title: "خرس تدی سایز 1", price: "325,000ت", img: "image/p3.png" },
  { id: 4, title: "دسته گل", price: "120,000ت", img: "image/p4.png" },
];

// مدیریت کلیک دکمه
allProductBtn.addEventListener("click", function () {
  if (!isAdded) {
    displayProducts(newProducts); // اضافه کردن محصولات جدید
    allProductBtn.textContent = "حذف محصولات بیشتر";
  } else {
    removeProducts(newProducts); // حذف محصولات جدید
    allProductBtn.textContent = "دیدن محصولات بیشتر";
  }
  isAdded = !isAdded;
});

// تابع اضافه کردن محصولات جدید
function displayProducts(products) {
  products.forEach(function (product) {
    productsContainer1.insertAdjacentHTML(
      "beforeend",
      `
      <a href="#">
        <div class="product"   data-id="${product.id}">
          <img src="${product.img}" alt="${product.title}" />
          <p class="title">${product.title}</p>
          <p class="price">قیمت: ${product.price}</p>
          <button class="orderBtn" data-product="اضافه به سبد ">افزودن به سبد خرید</button>
        </div>
      </a>
      `
    );
  });
}

// تابع حذف محصولات جدید
function removeProducts(products) {
  products.forEach(function (product) {
    let productElement = document.querySelector(
      `.product[data-id="${product.id}"]`
    );
    if (productElement) {
      productElement.remove();
    }
  });
}

document.querySelector(".btn-p").addEventListener("click", function () {
  const targetSection = document.querySelector(".products-container");
  const targetPosition = targetSection.offsetTop; // فاصله از بالای صفحه
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
document.querySelector(".btn-pp").addEventListener("click", function () {
  const targetSection = document.querySelector(".products-container");
  const targetPosition = targetSection.offsetTop; // فاصله از بالای صفحه
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
document.querySelector("#btn-products").addEventListener("click", function () {
  const targetSection = document.querySelector(".products-container");
  const targetPosition = targetSection.offsetTop; // فاصله از بالای صفحه
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

document.querySelector("#btn-whyus").addEventListener("click", function () {
  const targetSection = document.querySelector(".footer");
  const targetPosition = targetSection.offsetTop; // فاصله از بالای صفحه
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 420) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const contextMenu = document.getElementById("contextMenu");

function contextHandler(event) {
  event.preventDefault();

  if (contextMenu.style.display === "none") {
    contextMenu.style.left = event.pageX + "px";
    contextMenu.style.top = event.pageY + "px";
    // display

    contextMenu.style.display = "block";
  } else {
    contextMenu.style.left = event.pageX + "px";
    contextMenu.style.top = event.pageY + "px";
  }
  console.log(event);
}
function clickhandler() {
  contextMenu.style.display = "none";
}
function hideen(event) {
  if (event.keyCode === 27) {
    contextMenu.style.display = "none";
  }
}

document.body.addEventListener("contextmenu", contextHandler);
document.body.addEventListener("click", clickhandler);
document.body.addEventListener("keydown", hideen);

function showMessage() {
  const messageBox = document.getElementById("btn-contact");
  const topBar = document.getElementById("topBar");

  // نمایش پیام
  messageBox.style.display = "block";
  messageBox.classList.remove("hide");

  // نمایش نوار بالا
  topBar.style.display = "block";

  // ناپدید شدن پیام با انیمیشن بعد از ۵ ثانیه
  setTimeout(() => {
    messageBox.classList.add("hide");
    setTimeout(() => {
      messageBox.style.display = "none";
      topBar.style.display = "none";
    }, 1000); // صبر برای اتمام انیمیشن
  }, 5000);
}

/////////////////////////

      function toggleChat() {
    const chatWidget = document.getElementById("chatWidget");
    const chattoggle = document.querySelector(".chat-toggle");

    if (chatWidget.style.display === "flex") {
        chatWidget.style.display = "none";
        chattoggle.style.display = "flex";
    } else {
        chatWidget.style.display = "flex";
        chattoggle.style.display = "none";
    }
}

// اضافه کردن لیسنر برای کلیک خارج از چت
document.addEventListener("click", function (event) {
    const chatWidget = document.getElementById("chatWidget");
    const loginBtn = document.querySelector(".chat-toggle");

    // بررسی اگر کلیک خارج از ویجت و دکمه انجام شده باشد
    if (!chatWidget.contains(event.target) && !loginBtn.contains(event.target)) {
        chatWidget.style.display = "none";
        loginBtn.style.display = "flex";
    }
});

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const messages = document.getElementById("messages");
    const userMessage = messageInput.value.trim();

    if (userMessage) {
        // نمایش پیام کاربر
        const userBubble = document.createElement("div");
        userBubble.classList.add("message", "user");
        userBubble.innerText = userMessage;
        messages.appendChild(userBubble);

        // پاسخ خودکار
        const botBubble = document.createElement("div");
        botBubble.classList.add("message", "bot");
        botBubble.innerText = "پیام شما دریافت شد!";
        messages.appendChild(botBubble);

        // پاک کردن ورودی
        messageInput.value = "";

        // اسکرول به پایین
        messages.scrollTop = messages.scrollHeight;
    }
}
// تابع برای ارسال پیام
function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const messages = document.getElementById("messages");
  const userMessage = messageInput.value.trim();

  if (userMessage) {
      // نمایش پیام کاربر
      const userBubble = document.createElement("div");
      userBubble.classList.add("message", "user");
      userBubble.innerText = userMessage;
      messages.appendChild(userBubble);

      // پاسخ خودکار
      const botBubble = document.createElement("div");
      botBubble.classList.add("message", "bot");
      botBubble.innerText = "پیام شما دریافت شد!";
      messages.appendChild(botBubble);

      // پاک کردن ورودی
      messageInput.value = "";

      // اسکرول به پایین
      messages.scrollTop = messages.scrollHeight;
  }
}

// اضافه کردن لیسنر برای کلیک خارج از چت
document.addEventListener("click", function (event) {
  const chatWidget = document.getElementById("chatWidget");
  const loginBtn = document.querySelector(".chat-toggle");

  // بررسی اگر کلیک خارج از ویجت و دکمه انجام شده باشد
  if (!chatWidget.contains(event.target) && !loginBtn.contains(event.target)) {
      chatWidget.style.display = "none";
      loginBtn.style.display = "flex";
  }
});

// افزودن لیسنر برای فشردن کلید Enter
document.getElementById("messageInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      event.preventDefault(); // جلوگیری از خط جدید در فیلد ورودی
      sendMessage(); // ارسال پیام
  }
});



function startCountdown(endDate) {
  function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      clearInterval(timerInterval);
      document.querySelector('.timer').innerHTML = '<p>تخفیف تمام شد!</p>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

// Set your countdown target date here (e.g., Yalda night)
const yaldaNight = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime();
  startCountdown(yaldaNight);

  //////////////////////////////////
    const modal = document.getElementById('modal');
    const authButton = document.getElementById('login-Btn');
    const userDetails = document.getElementById('userDetails');

    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    // چک کردن کاربر فعلی از localStorage
    function loadCurrentUser() {
      const storedUser = localStorage.getItem('currentUser');
      currentUser = storedUser ? JSON.parse(storedUser) : null;
      updateUserDetails();
    }

    // ذخیره کاربر فعلی در localStorage
    function saveCurrentUser(user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

    // حذف کاربر فعلی از localStorage
    function clearCurrentUser() {
      localStorage.removeItem('currentUser');
    }

    // به‌روزرسانی اطلاعات کاربر در هدر
    function updateUserDetails() {
      if (currentUser) {
        userDetails.textContent = `خوش آمدید، ${currentUser.username}`;
        userDetails.style.display = 'inline';
        authButton.style.display = 'none';
      } else {
        userDetails.style.display = 'none';
        authButton.style.display = 'inline';
      }
    }

    // ذخیره کاربران در localStorage
    function saveUsers() {
      localStorage.setItem('users', JSON.stringify(users));
    }

    // بازیابی کاربران از localStorage
    function loadUsers() {
      const storedUsers = localStorage.getItem('users');
      users = storedUsers ? JSON.parse(storedUsers) : [];
    }

    // پاک کردن داده‌ها هنگام خروج
    function logout() {
      clearCurrentUser();
      updateUserDetails();
    }

    // اجرای اولیه
    loadUsers();
    loadCurrentUser();

    authButton.addEventListener('click', () => {
      modal.style.display = 'flex';
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = document.getElementById('signupUsername').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;

      if (users.some(user => user.email === email)) {
        showMessage('این کاربر قبلاً ثبت نام کرده است');
        return;
      }

      const newUser = { username, email, password };
      users.push(newUser);
      saveUsers();
      showMessage('ثبت نام با موفقیت انجام شد!');
      signupForm.reset();
      switchToLogin();
    });

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.querySelectorAll('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        saveCurrentUser(user);
        showMessage(`خوش آمدید، ${user.username}`);
        modal.style.display = 'none';
        updateUserDetails();
      } else {
        showMessage('ایمیل یا رمز عبور نادرست است');
      }
    });

    function switchToLogin() {
      signupForm.style.display = 'none';
      loginForm.style.display = 'block';
    }

    function switchToSignup() {
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
    }

    function showMessage(message) {
      const messageBox = document.createElement('div');
      messageBox.textContent = message;
      messageBox.style.position = 'fixed';
      messageBox.style.bottom = '20px';
      messageBox.style.right = '20px';
      messageBox.style.backgroundColor = '#4CAF50';
      messageBox.style.color = 'white';
      messageBox.style.padding = '15px';
      messageBox.style.borderRadius = '5px';
      messageBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      messageBox.style.zIndex = '1000';
      messageBox.style.fontSize = '16px';
      messageBox.style.transition = 'opacity 0.5s ease-out';
      messageBox.style.opacity = '1';
    
      document.body.appendChild(messageBox);
    
      // Fade out after 3 seconds
      setTimeout(() => {
        messageBox.style.opacity = '0';
        setTimeout(() => {
          messageBox.remove();
        }, 500);
      }, 3000);
    }
    
    const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
  logout();
  showMessage('با موفقیت خارج شدید!');
});

function logout() {
  clearCurrentUser();
  updateUserDetails();
}

document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartModal = document.getElementById('cart-modal');
  const closeCart = document.getElementById('close-cart');
  const confirmationModal = document.getElementById('confirmation-modal');
  const confirmDelete = document.getElementById('confirm-delete');
  const cancelDelete = document.getElementById('cancel-delete');
  const message = document.getElementById('message');
  let productToDelete = null;

  function updateCartCount() {
      cartCount.textContent = cart.length;
  }

  function showMessage(text) {
      message.textContent = text;
      setTimeout(() => {
          message.textContent = '';
      }, 3000);
  }

  function renderCart() {
      cartItems.innerHTML = '';
      cart.forEach((product, index) => {
          const li = document.createElement('li');
          li.textContent = product;
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'حذف';
          deleteButton.style.backgroundColor ='#ff914d'
          deleteButton.style.borderRadius = '7px'
          deleteButton.style.border = 'none'
          deleteButton.style.width = '50px'
          deleteButton.style.height = '32px'
          deleteButton.style.transition = 'all 0.5s'
          deleteButton.style.transform = 'scale(1.09) '
          deleteButton.style.marginRight = '8px'
          deleteButton.addEventListener('click', () => {
              productToDelete = index;
              confirmationModal.style.display = 'flex';
          });
          li.appendChild(deleteButton);
          cartItems.appendChild(li);
      });
  }

  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
          const product = button.getAttribute('data-product');
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
          updateCartCount();
          showMessage(`شما به سبد خرید خود "${product}" اضافه کردید.`);
      });
  });

  document.getElementById('cart-header').addEventListener('click', () => {
      renderCart();
      cartModal.style.display = 'flex';
  });

  closeCart.addEventListener('click', () => {
      cartModal.style.display = 'none';
  });

  confirmDelete.addEventListener('click', () => {
      cart.splice(productToDelete, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartCount();
      confirmationModal.style.display = 'none';
      showMessage('محصول شما حذف شد.');
  });

  cancelDelete.addEventListener('click', () => {
      confirmationModal.style.display = 'none';
  });

  updateCartCount();
});
//////////////////
 // متغیر برای نگهداری فایل صوتی در حال پخش
 let currentAudio = null;

 // اضافه کردن رویداد‌ها به المنت‌ها
 document.addEventListener('DOMContentLoaded', function () {
   const elements = document.querySelectorAll('[data-audio]');

   elements.forEach(element => {
     // هاور با ماوس
     element.addEventListener('mouseover', function () {
       const audioFile = this.getAttribute('data-audio');
       playAudio(audioFile);
     });

     // فوکوس با کیبورد
     element.addEventListener('focus', function () {
       const audioFile = this.getAttribute('data-audio');
       playAudio(audioFile);
     });
   });
 });

 // تابع برای پخش فایل صوتی
 function playAudio(audioFile) {
   if (currentAudio) {
     currentAudio.pause(); // قطع پخش قبلی
     currentAudio.currentTime = 0; // بازگشت به ابتدای فایل
   }
   currentAudio = new Audio(audioFile); // ایجاد یک عنصر صوتی
   currentAudio.play(); // پخش فایل صوتی
 }
///////////////////////////////////
 function hidesidebar (p) {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
 }
 function showsidebar (p) {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'block'

 }



 //////////////////////////////////
 document.addEventListener('copy' ,(event) => {
  event.preventDefault()
  const selectedText = window.getSelection().toString()
  const siteLink = '  \nمنبع:http://127.0.0.1:5500/'

  const finalText = selectedText + siteLink;
  event.clipboardData.setData('text/plain', finalText)});

//////////////////////////////////
