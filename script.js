function loadEntries() {
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const list = document.getElementById('entries');
    list.innerHTML = '';
    entries.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry.date + ': ' + entry.text;
        list.appendChild(li);
    });
}

function saveEntry() {
    const textarea = document.getElementById('entry');
    const text = textarea.value.trim();
    if (!text) return;
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const today = new Date().toLocaleDateString('tr-TR');
    entries.unshift({ date: today, text });
    localStorage.setItem('entries', JSON.stringify(entries));
    textarea.value = '';
    loadEntries();
}

document.getElementById('save').addEventListener('click', saveEntry);

document.addEventListener('DOMContentLoaded', loadEntries);
