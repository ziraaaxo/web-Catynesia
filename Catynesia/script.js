// Catynesia - script.js

document.addEventListener('DOMContentLoaded', ()=>{

  // Login form validation (special rule from original HTML)
  const loginForm = document.getElementById('login-form');
  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      const id = document.getElementById('id_pengguna').value.trim();
      const pw = document.getElementById('kata_sandi').value;
      if(!(id === 'admin' && pw === '12345678')){
        e.preventDefault();
        showError(loginForm, 'ID Pengguna atau Kata Sandi salah. Gunakan ID: admin dan kata sandi: 12345678');
      }
    });
  }

  // Register form: simple checks and feedback
  const registerForm = document.getElementById('register-form');
  if(registerForm){
    registerForm.addEventListener('submit', (e)=>{
      clearError(registerForm);
      const nohp = document.getElementById('nohp').value.trim();
      const password = document.getElementById('reg-kata_sandi').value;
      const iduser = document.getElementById('reg-id_pengguna').value.trim();
      if(!/^08\d{8,12}$/.test(nohp)){
        e.preventDefault();
        showError(registerForm, 'Nomor HP harus diawali 08 dan terdiri dari 10–14 digit.');
        return;
      }
      if(password.length < 8){
        e.preventDefault();
        showError(registerForm, 'Kata sandi minimal 8 karakter.');
        return;
      }
      if(iduser.length < 4){
        e.preventDefault();
        showError(registerForm, 'ID Pengguna minimal 4 karakter.');
        return;
      }
      // If passes, allow submit (in demo it will go to welcome.html)
    });
  }

  // Reset password form
  const resetForm = document.getElementById('reset-form');
  if(resetForm){
    resetForm.addEventListener('submit', (e)=>{
      // pretend to send link; in demo show success alert
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      alert('Jika email ' + email + ' terdaftar, link reset telah dikirim (demo).');
      window.location.href = 'index.html';
    });
  }

  // Toggle password visibility where applicable
  document.querySelectorAll('.toggle-show').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = document.querySelector(btn.dataset.target);
      if(!target) return;
      if(target.type === 'password'){ target.type = 'text'; btn.textContent = 'Sembunyikan'; }
      else{ target.type = 'password'; btn.textContent = 'Tampilkan'; }
    });
  });

  // helpers
  function showError(form, msg){
    let err = form.querySelector('.error');
    if(!err){
      err = document.createElement('div');
      err.className = 'error';
      form.prepend(err);
    }
    err.textContent = msg;
    err.scrollIntoView({behavior:'smooth', block:'center'});
  }
  function clearError(form){
    const err = form.querySelector('.error');
    if(err) err.remove();
  }

});
