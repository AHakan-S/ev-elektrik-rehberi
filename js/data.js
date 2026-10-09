// EV ELEKTRİK REHBERİ - VERİ DOSYASI
// Gerçek verilerinizi bu dosyayı düzenleyerek girebilirsiniz.
// Dosya yapısını bozmamaya dikkat edin.

const panelData = {
    metadata: {
        version: "1.1.0",
        lastUpdated: "2026-10-10",
        author: "Sistem Sahibi"
    },
    // Sigorta Listesi
    fuses: [
        {
            id: "F01",
            label: "Salon ve Mutfak Sebil Prizi",
            type: "priz",
            rooms: ["Salon", "Mutfak"],
            items: [
                "Salondaki mutfak duvarının sırtındaki priz",
                "Mutfaktaki sebilin prizi"
            ],
            devices: ["Sebil"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F02",
            label: "Lavabo ve Alaturka Tuvalet Aydınlatması",
            type: "aydinlatma",
            rooms: ["Lavabo", "Tuvalet"],
            items: [
                "Lavabo aydınlatması",
                "Alaturka tuvalet aydınlatması"
            ],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F03",
            label: "Lavabo ve Modem Prizleri",
            type: "priz",
            rooms: ["Lavabo", "Koridor"], // Modem genelde koridor veya salonda olur, varsayım
            items: [
                "Lavabonun başındaki priz",
                "Modem prizi"
            ],
            devices: ["Modem"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F04",
            label: "Klimalar",
            type: "priz", // Klimalar genellikle priz linyelerine bağlıdır veya direkt sigortaya bağlıdır
            rooms: ["Tüm Ev"],
            items: [
                "Klima bağlantıları"
            ],
            devices: ["Klimalar"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: "Tüm klimaların tek sigortaya bağlı olması muhtemeldir."
        },
        {
            id: "F05",
            label: "Salon TV Ünitesi Altı",
            type: "priz",
            rooms: ["Salon"],
            items: [
                "Salondaki tv ünitesinin altındaki priz"
            ],
            devices: ["TV", "Uydu Alıcısı"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F06",
            label: "Buzdolabı ve Bulaşık Makinesi",
            type: "priz",
            rooms: ["Mutfak"],
            items: [
                "Buzdolabı prizi",
                "Bulaşık makinesi prizi"
            ],
            devices: ["Buzdolabı", "Bulaşık Makinesi"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F07",
            label: "Mutfak Pişirme ve Oturma Odası TV",
            type: "priz",
            rooms: ["Mutfak", "Oturma Odası"],
            items: [
                "Ocak bağlantısı",
                "Ocağın solundaki priz",
                "Fırın prizi",
                "Mikrodalga prizi",
                "Oturma odasında televizyon prizi"
            ],
            devices: ["Ocak", "Fırın", "Mikrodalga", "Oturma Odası TV"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F08",
            label: "Mutfak Lavabo, Balkon, Kombi",
            type: "priz",
            rooms: ["Mutfak", "Balkon"],
            items: [
                "Mutfak lavabosunun sağındaki priz",
                "Balkon prizi",
                "Kombi bağlantısı"
            ],
            devices: ["Kombi"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F09",
            label: "Aslı'nın Odası ve Benim Oda",
            type: "karma",
            rooms: ["Aslı'nın Odası", "Balkon", "Benim Oda"],
            items: [
                "Aslının odadaki aydınlatma",
                "Aslının balkonundaki aydınlatma",
                "Benim odadaki tüm aydınlatmalar",
                "Benim odadaki tüm prizler"
            ],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F10",
            label: "Buzluk, Aslı'nın Odası, Oturma Odası Prizleri",
            type: "priz",
            rooms: ["Mutfak", "Aslı'nın Odası", "Oturma Odası"], // Buzluk genelde mutfakta veya kilerde olur
            items: [
                "Buzluk prizi",
                "Aslının odasındaki priz",
                "Oturma odasında koltuğun arkasındaki priz"
            ],
            devices: ["Buzluk"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F11",
            label: "Çamaşır Makinesi",
            type: "priz",
            rooms: ["Banyo"], // Çamaşır makinesi genelde banyodadır
            items: [
                "Çamaşır makinesi prizi"
            ],
            devices: ["Çamaşır Makinesi"],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F12",
            label: "Salon, Antre, Oturma Odası Aydınlatması",
            type: "aydinlatma",
            rooms: ["Salon", "Antre", "Oturma Odası"],
            items: [
                "Salon aydınlatmaları",
                "Antre aydınlatmaları",
                "Oturma odası aydınlatmaları"
            ],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F13",
            label: "Bilinmeyen Devre",
            type: "karma",
            rooms: ["Bilinmiyor"],
            items: [],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: false,
            notes: "Bu sigortanın nereye bağlı olduğu henüz tespit edilmedi."
        },
        {
            id: "F14",
            label: "Orta Banyo, Koridor, Ütü Odası Aydınlatması",
            type: "aydinlatma",
            rooms: ["Banyo", "Koridor", "Ütü Odası"],
            items: [
                "Orta banyo aydınlatması",
                "Koridor aydınlatması",
                "Ütü odası aydınlatması"
            ],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F15",
            label: "Bilinmeyen Devre",
            type: "karma",
            rooms: ["Bilinmiyor"],
            items: [],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: false,
            notes: "Bu sigortanın nereye bağlı olduğu henüz tespit edilmedi."
        },
        {
            id: "F16",
            label: "Mutfak ve Mutfak Balkonu Aydınlatması",
            type: "aydinlatma",
            rooms: ["Mutfak", "Balkon"],
            items: [
                "Mutfak aydınlatması",
                "Mutfak balkonu aydınlatması"
            ],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        },
        {
            id: "F17",
            label: "Sigorta Odası",
            type: "karma",
            rooms: ["Sigorta Odası"],
            items: [
                "Sigorta odası aydınlatması",
                "Sigorta odası prizi"
            ],
            devices: [],
            specs: {
                current_A: null,
                type: null
            },
            verified: true,
            notes: ""
        }
    ]
};
