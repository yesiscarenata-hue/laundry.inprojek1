
    // Form submission
    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Ambil data dari form
        const nama = document.getElementById('nama').value;
        const telepon = document.getElementById('telepon').value;
        const layanan = document.getElementById('layanan').value;
        
        // Validasi sederhana
        if(nama === '' || telepon === '' || layanan === '') {
            alert('Harap isi semua data yang diperlukan!');
            return;
        }
        
        // Tampilkan pesan sukses
        alert('Terima kasih ' + nama + '!\nPesanan laundry Anda telah diterima.\nKami akan menghubungi Anda di nomor ' + telepon + ' untuk konfirmasi.');
        
        // Reset form
        document.getElementById('orderForm').reset();
    });
    
    // Set tanggal minimum untuk input date (hari ini)
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tanggal').min = today;
    
    // Estimasi berat
    document.querySelectorAll('input[name="berat"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const berat = this.value;
            let estimasi = '';
            
            if(berat === 'ringan') {
                estimasi = 'Rp 20.000 - Rp 50.000';
            } else if(berat === 'sedang') {
                estimasi = 'Rp 50.000 - Rp 100.000';
            } else if(berat === 'berat') {
                estimasi = 'Rp 100.000 - Rp 200.000';
            }
            
        
            let estimasiAlert = document.getElementById('estimasiAlert');
            if(!estimasiAlert) {
                estimasiAlert = document.createElement('div');
                estimasiAlert.id = 'estimasiAlert';
                estimasiAlert.className = 'alert alert-info mt-3';
                document.querySelector('.contact-form').appendChild(estimasiAlert);
            }
            
            estimasiAlert.innerHTML = '<strong>Estimasi Harga:</strong> ' + estimasi + ' (tergantung jenis pakaian)';
        });
    });
