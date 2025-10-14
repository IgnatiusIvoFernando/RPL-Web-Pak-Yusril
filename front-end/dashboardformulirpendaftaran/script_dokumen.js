document.addEventListener("DOMContentLoaded", () => {
    // Ambil semua tombol upload di halaman (urut sesuai tampilan)
    const buttons = document.querySelectorAll(".btn-form-dokumen");

    // Peta tombol ke file modal dan ID-nya
    const modalMap = [
        { file: "untuk-ijazah.html", id: "modalIjazah" },
        { file: "untuk-kk.html", id: "modalKK" },
        { file: "untuk-akta.html", id: "modalAkta" },
        { file: "untuk-foto3x4.html", id: "modalFoto" }
    ];

    // Kaitkan setiap tombol dengan modal masing-masing
    buttons.forEach((button, index) => {
        const modalInfo = modalMap[index];
        if (modalInfo) {
            button.addEventListener("click", () => openModalFromFile(modalInfo.file, modalInfo.id));
        }
    });

    /**
     * Fungsi untuk memuat dan menampilkan modal dari file HTML eksternal
     */
    async function openModalFromFile(filePath, modalId) {
        try {
            // Jika modal belum pernah dimuat sebelumnya
            if (!document.getElementById(modalId)) {
                const response = await fetch(filePath);
                const html = await response.text();
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = html.trim();

                const modalElement = tempDiv.querySelector(`#${modalId}`);
                if (modalElement) {
                    document.body.appendChild(modalElement);
                    attachModalCloseHandler(modalElement);
                } else {
                    console.error(`Modal '${modalId}' tidak ditemukan di ${filePath}`);
                    return;
                }
            }

            // Tampilkan modal
            const modal = document.getElementById(modalId);
            modal.style.display = "flex";

        } catch (error) {
            console.error("Gagal memuat modal:", error);
        }
    }

    /**
     * Tutup modal saat klik luar atau tekan ESC
     */
    function attachModalCloseHandler(modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeModal(modal);
            }
        });
    }

    /**
     * Tutup modal dengan efek halus
     */
    function closeModal(modal) {
        modal.style.animation = "fadeOut 0.25s ease";
        setTimeout(() => {
            modal.style.display = "none";
            modal.style.animation = "";
        }, 200);
    }
});
