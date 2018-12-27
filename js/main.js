if (!("serviceWorker" in navigator)) {
  console.error("ServiceWorker: Browser tidak mendukung.");
} else {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function(registration) {
      console.log(
        "ServiceWorker: Pendaftaran berhasil. Scope:",
        registration.scope
      );
    })
    .catch(function(error) {
      console.error("ServiceWorker: Pendaftaran gagal. Error:", error);
    });
}
