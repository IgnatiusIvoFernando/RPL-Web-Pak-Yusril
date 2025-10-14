document.addEventListener("DOMContentLoaded", () => {
    const btnAyah = document.getElementById("openAyah");
    const btnIbu = document.getElementById("openIbu");

    // Fungsi untuk memuat & menampilkan modal
    async function openModalFromFile(filePath, modalId) {
        try {
            if (!document.getElementById(modalId)) {
                const response = await fetch(filePath);
                const html = await response.text();
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = html;

                const modalElement = tempDiv.querySelector(`#${modalId}`);
                if (modalElement) {
                    document.body.appendChild(modalElement);
                    attachModalCloseHandler(modalElement);
                } else {
                    console.error(`Modal '${modalId}' tidak ditemukan di ${filePath}`);
                    return;
                }
            }

            const modal = document.getElementById(modalId);
            modal.style.display = "flex";
        } catch (error) {
            console.error("Gagal memuat modal:", error);
        }
    }

    // Fungsi untuk menutup modal
    function attachModalCloseHandler(modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                modal.style.display = "none";
            }
        });
    }

    // Tombol pembuka modal
    if (btnAyah) {
        btnAyah.addEventListener("click", () => openModalFromFile("modal-ayah.html", "modalAyah"));
    }
    if (btnIbu) {
        btnIbu.addEventListener("click", () => openModalFromFile("modal-ibu.html", "modalIbu"));
    }
});
