  function toggleMenu() {
    const menu = document.getElementById('navLinks');
    menu.classList.toggle('active');
  }

  const modal = document.getElementById("modalForm");
  const btn = document.querySelector(".btn2");
  const form = document.getElementById("contactForm");

  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  function closeModal() {
    modal.classList.remove("active");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      nombre: form.nombre.value,
      celular: form.celular.value,
      correo: form.correo.value,
      empresa: form.empresa.value,
      cargo: form.cargo.value,
      fecha: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'contacto.jsn'; // extensión ficticia .jsn
    a.click();

    alert("Datos guardados. Se descargó el archivo.");
    form.reset();
    closeModal();
  });