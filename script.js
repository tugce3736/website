// DOM elementlerini seçiyoruz
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Paylaşım butonları ve üçgen simgesi
const shareToggle = document.getElementById("share-toggle");
const shareButtons = document.getElementById("share-buttons");

// Todo itemlerini eklemek için işlev
addButton.addEventListener("click", function() {
    const todoText = todoInput.value.trim();  // Input'tan gelen metni alıyoruz
    if (todoText !== "") {
        // Yeni todo itemi oluşturuyoruz
        const li = document.createElement("li");
        li.textContent = todoText;

        // Silme butonunu oluşturuyoruz
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        // Silme butonunu list itemine ekliyoruz
        li.appendChild(deleteButton);

        // Yeni todo itemini listeye ekliyoruz
        todoList.appendChild(li);

        // Input alanını temizliyoruz
        todoInput.value = "";
    }
});

// WhatsApp ile paylaş fonksiyonu
function shareOnWhatsApp() {
    const todoItems = document.querySelectorAll("li");
    let todoText = "Yapılacaklar Listesi:\n\n";
    todoItems.forEach(item => {
        todoText += item.textContent + "\n";
    });

    const encodedText = encodeURIComponent(todoText);
    const whatsappUrl = "https://wa.me/?text=" + encodedText;

    window.open(whatsappUrl, "_blank");
}

// WhatsApp paylaşım butonuna tıklanınca fonksiyon çalışacak
const whatsappButton = document.getElementById("whatsapp-share");
whatsappButton.addEventListener("click", shareOnWhatsApp);

// E-posta ile paylaş fonksiyonu
function shareOnEmail() {
    const todoItems = document.querySelectorAll("li");
    let todoText = "Yapılacaklar Listesi:\n\n";
    todoItems.forEach(item => {
        todoText += item.textContent + "\n";
    });

    // E-posta linkini oluşturuyoruz
    const encodedText = encodeURIComponent(todoText);
    const emailSubject = encodeURIComponent("Yapılacaklar Listesi");
    const emailBody = encodedText;
    const emailUrl = "mailto:?subject=" + emailSubject + "&body=" + emailBody;

    window.open(emailUrl, "_blank");
}

// E-posta ile paylaş butonuna tıklanınca fonksiyon çalışacak
const emailButton = document.getElementById("email-share");
emailButton.addEventListener("click", shareOnEmail);

// Paylaşım butonlarını göster/gizle
shareToggle.addEventListener("click", function() {
    // Butonları görünür hale getirme / gizleme
    if (shareButtons.style.display === "none") {
        shareButtons.style.display = "block"; // Göster
        shareToggle.innerHTML = "&#9660;";  // Aşağı ok simgesi
    } else {
        shareButtons.style.display = "none"; // Gizle
        shareToggle.innerHTML = "&#9654;";  // Üçgen simgesi
    }
});
