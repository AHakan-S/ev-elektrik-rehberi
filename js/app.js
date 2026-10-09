// Uygulama Mantığı

document.addEventListener('DOMContentLoaded', () => {
    // 1. Meta Verileri Yükle
    document.getElementById('docVersion').innerText = `Sürüm: ${panelData.metadata.version}`;
    document.getElementById('docDate').innerText = `Son Güncelleme: ${panelData.metadata.lastUpdated}`;

    // Odaları topla ve filtreye ekle
    const allRooms = new Set();
    panelData.fuses.forEach(fuse => {
        fuse.rooms.forEach(room => allRooms.add(room));
    });
    
    const roomFilter = document.getElementById('roomFilter');
    Array.from(allRooms).sort().forEach(room => {
        const option = document.createElement('option');
        option.value = room;
        option.innerText = room;
        roomFilter.appendChild(option);
    });

    // 2. İstatistikleri Hesapla
    const calcStats = () => {
        let total = panelData.fuses.length;
        let outlets = panelData.fuses.filter(f => f.type === 'priz' || f.type === 'karma').length;
        let lights = panelData.fuses.filter(f => f.type === 'aydinlatma' || f.type === 'karma').length;
        let unverified = panelData.fuses.filter(f => !f.verified).length;

        document.getElementById('statTotal').innerText = total;
        document.getElementById('statOutlets').innerText = outlets;
        document.getElementById('statLights').innerText = lights;
        document.getElementById('statUnverified').innerText = unverified;
    };

    // 3. Kartları Oluştur
    const fusesContainer = document.getElementById('fusesContainer');

    const renderCards = (data) => {
        fusesContainer.innerHTML = '';
        
        if (data.length === 0) {
            fusesContainer.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: #64748b;">Arama kriterlerine uygun devre bulunamadı.</div>`;
            return;
        }

        data.forEach(fuse => {
            const card = document.createElement('div');
            card.className = 'fuse-card';

            // Tür Badge'i
            let typeLabel = "Belirtilmedi";
            if(fuse.type === 'priz') typeLabel = "Priz";
            if(fuse.type === 'aydinlatma') typeLabel = "Aydınlatma";
            if(fuse.type === 'karma') typeLabel = "Karma";

            // Durum İkonu
            const statusIcon = fuse.verified 
                ? `<span class="status-ok">✓ Doğrulandı</span>`
                : `<span class="status-warning">⚠️ Kontrol Gerekli</span>`;

            // Liste Elemanları
            const itemsList = fuse.items.length > 0 
                ? fuse.items.map(item => `<li>${item}</li>`).join('')
                : '<li>Belirtilmedi</li>';

            const devicesList = fuse.devices.length > 0 
                ? fuse.devices.map(dev => `<li>${dev}</li>`).join('')
                : '';

            // Teknik Bilgiler
            const ampers = fuse.specs?.current_A ? `${fuse.specs.current_A}A` : '-';
            const specType = fuse.specs?.type ? fuse.specs.type : '-';

            card.innerHTML = `
                <div class="fuse-header">
                    <div class="fuse-id-group">
                        <span class="fuse-id">${fuse.id}</span>
                        <span class="fuse-type-badge type-${fuse.type}">${typeLabel}</span>
                    </div>
                    <div class="fuse-status">${statusIcon}</div>
                </div>
                <div class="fuse-body">
                    <h3 class="fuse-title">${fuse.label}</h3>
                    <div class="fuse-room">📍 ${fuse.rooms.join(', ')}</div>
                    
                    <div class="data-group">
                        <strong>Bağlı Noktalar</strong>
                        <ul class="data-list">${itemsList}</ul>
                    </div>
                    
                    ${devicesList ? `
                    <div class="data-group">
                        <strong>Beklenen Cihazlar</strong>
                        <ul class="data-list">${devicesList}</ul>
                    </div>` : ''}

                    ${fuse.notes ? `
                    <div class="data-group" style="background:#fffbeb; padding:0.5rem; border-left:3px solid #f59e0b; margin-top:1rem; font-size:0.85rem;">
                        <strong>Not</strong>
                        ${fuse.notes}
                    </div>` : ''}
                </div>
                <div class="fuse-footer">
                    <span>Akım: <b>${ampers}</b></span>
                    <span>Tip: <b>${specType}</b></span>
                </div>
            `;
            fusesContainer.appendChild(card);
        });
    };

    // 4. Arama ve Filtreleme Mantığı
    const filterData = () => {
        const searchText = document.getElementById('searchInput').value.toLowerCase();
        const typeVal = document.getElementById('typeFilter').value;
        const roomVal = document.getElementById('roomFilter').value;
        const statusVal = document.getElementById('statusFilter').value;

        const filtered = panelData.fuses.filter(fuse => {
            // Arama Kontrolü (ID, Etiket, Odalar, Cihazlar, Notlar içinde)
            const searchMatch = !searchText || 
                fuse.id.toLowerCase().includes(searchText) ||
                fuse.label.toLowerCase().includes(searchText) ||
                fuse.rooms.some(r => r.toLowerCase().includes(searchText)) ||
                fuse.items.some(i => i.toLowerCase().includes(searchText)) ||
                fuse.devices.some(d => d.toLowerCase().includes(searchText)) ||
                (fuse.notes && fuse.notes.toLowerCase().includes(searchText));

            // Tür Kontrolü
            const typeMatch = typeVal === 'all' || fuse.type === typeVal;

            // Oda Kontrolü
            const roomMatch = roomVal === 'all' || fuse.rooms.includes(roomVal);

            // Durum Kontrolü
            let statusMatch = true;
            if (statusVal === 'verified') statusMatch = fuse.verified === true;
            if (statusVal === 'unverified') statusMatch = fuse.verified === false;

            return searchMatch && typeMatch && roomMatch && statusMatch;
        });

        renderCards(filtered);
    };

    // Olay Dinleyicileri (Event Listeners)
    document.getElementById('searchInput').addEventListener('input', filterData);
    document.getElementById('typeFilter').addEventListener('change', filterData);
    document.getElementById('roomFilter').addEventListener('change', filterData);
    document.getElementById('statusFilter').addEventListener('change', filterData);

    // JSON Dışa Aktarma
    document.getElementById('btnExport').addEventListener('click', () => {
        const dataStr = JSON.stringify(panelData, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `elektrik_rehberi_yedek_${new Date().toISOString().slice(0,10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // İlk Yükleme
    calcStats();
    renderCards(panelData.fuses);
});
