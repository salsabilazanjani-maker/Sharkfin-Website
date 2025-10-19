
        function openSalesSimulator() {
            createModal('🎯 Sales Simulator', `
                <h4 style="color: #e67e22; margin-bottom: 20px;">🧠 Quiz: Teknik Penjualan</h4>
                <div class="quiz-container">
                    <div class="quiz-question">Bagaimana kamu menanggapi pelanggan yang menolak harga produkmu?</div>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectQuizAnswer(1, 'A', this)">A. Langsung memberikan diskon besar-besaran</button>
                        <button class="quiz-option" onclick="selectQuizAnswer(1, 'B', this)">B. Menjelaskan value dan benefit produk secara detail</button>
                        <button class="quiz-option" onclick="selectQuizAnswer(1, 'C', this)">C. Menyerah dan mencari pelanggan lain</button>
                    </div>
                    <div id="quiz-result-1" class="quiz-result"></div>
                </div>
                
                <h4 style="color: #e67e22; margin-bottom: 20px;">🎮 Simulasi Roleplay</h4>
                <div class="chat-simulation">
                    <div class="chat-header">💬 Chat dengan Customer Virtual</div>
                    <div class="chat-messages" id="sales-chat">
                        <div class="message customer">Halo, saya tertarik dengan produk Anda, tapi harganya terlalu mahal untuk budget saya!</div>
                    </div>
                    <div class="chat-input">
                        <input type="text" id="sales-response" placeholder="Ketik respons penjualan Anda...">
                        <button onclick="sendSalesResponse()">Kirim</button>
                    </div>
                </div>
            `);
        }

        function openCustomerService() {
            createModal('🎧 Customer Service Pro', `
                <h4 style="color: #e67e22; margin-bottom: 20px;">🧠 Studi Kasus</h4>
                <div class="quiz-container">
                    <div class="quiz-question">Pelanggan marah karena barang terlambat 3 hari. Apa yang kamu lakukan?</div>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectQuizAnswer(2, 'A', this)">A. Menyalahkan kurir dan meminta maaf seadanya</button>
                        <button class="quiz-option" onclick="selectQuizAnswer(2, 'B', this)">B. Mendengarkan keluhan, meminta maaf tulus, dan berikan solusi konkret</button>
                        <button class="quiz-option" onclick="selectQuizAnswer(2, 'C', this)">C. Menjelaskan bahwa keterlambatan bukan salah perusahaan</button>
                    </div>
                    <div id="quiz-result-2" class="quiz-result"></div>
                </div>
                
                <h4 style="color: #e67e22; margin-bottom: 20px;">💬 Simulasi Chat dengan Pelanggan Marah</h4>
                <div class="chat-simulation">
                    <div class="chat-header">😡 Pelanggan Komplain</div>
                    <div class="chat-messages" id="service-chat">
                        <div class="message customer angry">SAYA SANGAT KECEWA! Pesanan saya sudah 3 hari terlambat dan tidak ada kabar sama sekali!</div>
                    </div>
                    <div class="chat-input">
                        <input type="text" id="service-response" placeholder="Ketik respons customer service Anda...">
                        <button onclick="sendServiceResponse()">Kirim</button>
                    </div>
                </div>
            `);
        }

        function openScaleUpMaster() {
            createModal('📈 Scale Up Master', `
                <h4 style="color: #e67e22; margin-bottom: 20px;">🧩 Mini Case Study</h4>
                <div class="case-study">
                    <div class="case-title">Skenario Ekspansi Bisnis</div>
                    <div class="case-scenario">
                        <strong>Situasi:</strong> Perusahaan ABC memiliki toko online yang sukses di Jakarta. Mereka ingin ekspansi ke 3 kota besar (Surabaya, Bandung, Medan) tapi cash flow masih terbatas dan tim masih kecil.
                    </div>
                    <div class="quiz-question">Strategi terbaik yang harus dipilih?</div>
                    <div class="quiz-options">
                        <button class="quiz-option" onclick="selectQuizAnswer(3, 'A', this)">A. Ekspansi bertahap, mulai dari 1 kota dengan market research mendalam</button>
                        <button class="quiz-option" onclick="selectQuizAnswer(3, 'B', this)">B. Cari investor untuk ekspansi ke 3 kota sekaligus</button>
                        <button class="quiz-option" onclick="selectQuizAnswer(3, 'C', this)">C. Tunda ekspansi sampai cash flow benar-benar stabil</button>
                    </div>
                    <div id="quiz-result-3" class="quiz-result"></div>
                </div>
                
                <h4 style="color: #e67e22; margin-bottom: 20px;">💬 Forum Diskusi</h4>
                <div class="forum-container">
                    <textarea id="forum-input" placeholder="Bagikan pengalaman atau pendapat Anda tentang scaling bisnis..."></textarea>
                    <button onclick="postToForum()">Posting Pendapat</button>
                    <div id="forum-posts" class="forum-posts">
                        <div class="forum-post">
                            <strong>BusinessGuru:</strong> Menurut saya timing sangat penting dalam scaling. Jangan terburu-buru, pastikan sistem internal sudah solid dulu.
                        </div>
                        <div class="forum-post">
                            <strong>StartupFounder:</strong> Saya setuju! Pernah gagal ekspansi karena terlalu cepat. Sekarang lebih fokus pada kualitas daripada kecepatan.
                        </div>
                    </div>
                </div>
            `);
        }

        function openInvestorReady() {
            createModal('💰 Investor Ready', `
                <h4 style="color: #e67e22; margin-bottom: 20px;">🧠 Template Pitch Deck Mini</h4>
                <div class="pitch-template">
                    <div class="pitch-field">
                        <label>Nama Bisnis:</label>
                        <input type="text" id="business-name" placeholder="Contoh: EcoFood Delivery">
                    </div>
                    <div class="pitch-field">
                        <label>Problem yang Dipecahkan:</label>
                        <textarea id="business-problem" placeholder="Jelaskan masalah yang ingin Anda selesaikan di pasar"></textarea>
                    </div>
                    <div class="pitch-field">
                        <label>Solusi Anda:</label>
                        <textarea id="business-solution" placeholder="Jelaskan solusi unik yang Anda tawarkan"></textarea>
                    </div>
                    <div class="pitch-field">
                        <label>Target Market:</label>
                        <input type="text" id="target-market" placeholder="Siapa target pelanggan utama Anda?">
                    </div>
                    <div class="pitch-field">
                        <label>Keunggulan Kompetitif:</label>
                        <textarea id="competitive-advantage" placeholder="Apa yang membuat bisnis Anda berbeda dari kompetitor?"></textarea>
                    </div>
                </div>
                
                <h4 style="color: #e67e22; margin-bottom: 20px;">🎥 Simulasi Presentasi ke AI Investor</h4>
                <div class="presentation-sim">
                    <button class="present-btn" onclick="startPresentation()">🚀 Mulai Presentasi ke AI Investor</button>
                    <div id="investor-feedback" class="investor-feedback"></div>
                </div>
            `);
        }

        function createModal(title, content) {
            const existingModal = document.querySelector('.modal-overlay');
            if (existingModal) {
                existingModal.remove();
            }
            
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            modalOverlay.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>${title}</h3>
                        <button class="close-modal" onclick="closeModal()">×</button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                </div>
            `;
            
            document.body.appendChild(modalOverlay);
        }

        function closeModal() {
            const modal = document.querySelector('.modal-overlay');
            if (modal) {
                modal.remove();
            }
        }

        function selectQuizAnswer(stepNumber, answer, button) {
            const correctAnswers = {1: 'B', 2: 'B', 3: 'A'};
            const resultDiv = document.getElementById(`quiz-result-${stepNumber}`);
            const options = button.parentNode.querySelectorAll('.quiz-option');
            
            options.forEach(option => option.disabled = true);
            
            const explanations = {
                1: {
                    'B': 'Benar! Menjelaskan value adalah kunci untuk mengatasi keberatan harga.',
                    'A': 'Kurang tepat. Diskon besar bisa merusak persepsi value produk.',
                    'C': 'Salah. Ini adalah kesempatan untuk membangun kepercayaan pelanggan.'
                },
                2: {
                    'B': 'Benar! Empati, pengakuan kesalahan, dan solusi konkret adalah kunci customer service yang baik.',
                    'A': 'Kurang tepat. Menyalahkan pihak lain tidak menyelesaikan masalah pelanggan.',
                    'C': 'Salah. Ini akan membuat pelanggan semakin marah dan merasa tidak didengar.'
                },
                3: {
                    'A': 'Benar! Ekspansi bertahap dengan riset mendalam meminimalkan risiko dan memaksimalkan peluang sukses.',
                    'B': 'Bisa jadi pilihan, tapi berisiko tinggi jika belum ada track record yang kuat.',
                    'C': 'Terlalu konservatif. Bisa kehilangan momentum dan kesempatan market.'
                }
            };
            
            if (answer === correctAnswers[stepNumber]) {
                resultDiv.innerHTML = `<div class="correct">✅ ${explanations[stepNumber][answer]}</div>`;
            } else {
                resultDiv.innerHTML = `<div class="incorrect">❌ ${explanations[stepNumber][answer]}</div>`;
            }
        }

        function sendSalesResponse() {
            const input = document.getElementById('sales-response');
            const chatMessages = document.getElementById('sales-chat');
            const response = input.value.trim();
            
            if (response) {
                chatMessages.innerHTML += `<div class="message user">${response}</div>`;
                
                setTimeout(() => {
                    const aiResponses = [
                        "Hmm, bisa dijelaskan lebih detail tentang valuenya? Saya masih ragu dengan harganya.",
                        "Oke, saya mulai tertarik. Ada paket yang lebih terjangkau atau cicilan?",
                        "Baiklah, saya akan pertimbangkan. Bisa kirim proposal detailnya?",
                        "Terima kasih penjelasannya. Saya butuh waktu untuk diskusi dengan tim dulu."
                    ];
                    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                    chatMessages.innerHTML += `<div class="message customer">${randomResponse}</div>`;
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
                
                input.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        function sendServiceResponse() {
            const input = document.getElementById('service-response');
            const chatMessages = document.getElementById('service-chat');
            const response = input.value.trim();
            
            if (response) {
                chatMessages.innerHTML += `<div class="message user">${response}</div>`;
                
                setTimeout(() => {
                    const aiResponses = [
                        "Terima kasih sudah merespons. Saya harap solusinya benar-benar ditindaklanjuti ya.",
                        "Oke, saya menunggu kompensasinya. Tolong dipercepat prosesnya.",
                        "Baiklah, saya puas dengan penanganannya. Terima kasih sudah responsif.",
                        "Hmm, saya masih kecewa. Bagaimana jaminan ini tidak terulang lagi?"
                    ];
                    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                    chatMessages.innerHTML += `<div class="message customer">${randomResponse}</div>`;
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
                
                input.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        function postToForum() {
            const input = document.getElementById('forum-input');
            const forumPosts = document.getElementById('forum-posts');
            const post = input.value.trim();
            
            if (post) {
                const newPost = document.createElement('div');
                newPost.className = 'forum-post';
                newPost.innerHTML = `<strong>Anda:</strong> ${post}`;
                forumPosts.insertBefore(newPost, forumPosts.firstChild);
                input.value = '';
                
                // Simulate other users responding
                setTimeout(() => {
                    const responses = [
                        "Setuju banget! Pengalaman yang sangat berharga untuk dibagi.",
                        "Menarik sekali perspektifnya. Terima kasih sudah sharing!",
                        "Saya punya pengalaman serupa. Memang challenging tapi worth it."
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    const responsePost = document.createElement('div');
                    responsePost.className = 'forum-post';
                    responsePost.innerHTML = `<strong>Member${Math.floor(Math.random() * 100)}:</strong> ${randomResponse}`;
                    forumPosts.insertBefore(responsePost, forumPosts.children[1]);
                }, 2000);
            }
        }

        function startPresentation() {
            const businessName = document.getElementById('business-name').value;
            const businessProblem = document.getElementById('business-problem').value;
            const businessSolution = document.getElementById('business-solution').value;
            const targetMarket = document.getElementById('target-market').value;
            const competitiveAdvantage = document.getElementById('competitive-advantage').value;
            
            const feedbackDiv = document.getElementById('investor-feedback');
            
            if (!businessName || !businessProblem || !businessSolution || !targetMarket) {
                feedbackDiv.innerHTML = '<div class="feedback-error">❌ Mohon lengkapi minimal 4 field utama terlebih dahulu!</div>';
                return;
            }
            
            feedbackDiv.innerHTML = '<div class="feedback-loading">🤖 AI Investor sedang mengevaluasi pitch Anda...</div>';
            
            setTimeout(() => {
                const score = Math.floor(Math.random() * 3) + 7; // Score 7-9
                const feedback = `
                    <div class="feedback-success">
                        <h5>🤖 Feedback AI Investor untuk "${businessName}":</h5>
                        <p><strong>Evaluasi Pitch Deck:</strong></p>
                        <ul>
                            <li>✅ Problem statement: ${businessProblem ? 'Jelas dan relevan' : 'Perlu diperjelas'}</li>
                            <li>✅ Solusi: ${businessSolution ? 'Inovatif dan praktis' : 'Butuh detail lebih'}</li>
                            <li>⚠️ Target market: ${targetMarket ? 'Cukup spesifik, bisa lebih detail' : 'Terlalu umum'}</li>
                            <li>💡 Competitive advantage: ${competitiveAdvantage ? 'Menarik, perlu validasi' : 'Belum dijelaskan'}</li>
                        </ul>
                        <p><strong>💰 Investment Score: ${score}/10</strong></p>
                        <p><strong>🎯 Rekomendasi:</strong> ${score >= 8 ? 'Pitch yang solid! Siap untuk presentasi ke investor real.' : 'Pitch yang baik, perlu sedikit perbaikan di beberapa area.'}</p>
                        <p><strong>📈 Next Steps:</strong> Tambahkan data market size, financial projection, dan tim background.</p>
                    </div>
                `;
                feedbackDiv.innerHTML = feedback;
            }, 2500);
        }

        // Close modal when clicking outside
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98ef033b81e39e1e',t:'MTc2MDUyODEyMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();


        // Smooth scrolling function
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Journey Step Modal
        function openStepModal(stepNumber) {
            currentModalStep = stepNumber; // Store current step number
            
            const modal = document.getElementById('step-modal');
            const modalIcon = document.getElementById('modal-icon');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            
            const stepData = {
                1: {
                    icon: '💡',
                    title: '1. Ide Brilian',
                    description: 'Temukan ide bisnis yang sesuai dengan passion dan keahlianmu. Pelajari cara brainstorming, validasi ide, dan menemukan unique selling point yang membedakanmu dari kompetitor.'
                },
                2: {
                    icon: '🎯',
                    title: '2. Riset Pasar',
                    description: 'Pelajari target customer dan kompetitor di sekitarmu. Pahami kebutuhan pasar, analisis kompetitor, dan tentukan positioning yang tepat untuk bisnismu.'
                },
                3: {
                    icon: '💰',
                    title: '3. Modal Pintar',
                    description: 'Hitung modal yang dibutuhkan dan cari sumber pendanaan. Belajar financial planning, budgeting, dan berbagai cara mendapatkan modal untuk startup.'
                },
                4: {
                    icon: '🎨',
                    title: '4. Branding Kece',
                    description: 'Buat brand identity yang menarik dan memorable. Pelajari cara membuat logo, memilih warna, dan membangun brand personality yang kuat.'
                },
                5: {
                    icon: '🚀',
                    title: '5. Go Live!',
                    description: 'Saatnya launch dan mulai jualan ke dunia! Pelajari strategi marketing, sales funnel, dan cara mempertahankan customer loyalty.'
                },
                6: {
                    icon: '💰',
                    title: '6. Sales Simulator',
                    description: 'Praktik jualan langsung dengan customer virtual! Belajar teknik closing, handle objection, dan tingkatkan conversion rate dengan simulasi real-time.'
                },
                7: {
                    icon: '🤝',
                    title: '7. Customer Service Pro',
                    description: 'Handle komplain dan bikin customer happy! Pelajari cara menangani customer yang sulit, membangun loyalty, dan turn complaint jadi opportunity.'
                },
                8: {
                    icon: '📈',
                    title: '8. Scale Up Master',
                    description: 'Expand bisnis dan kelola tim yang lebih besar! Belajar delegation, hiring, operational systems, dan strategic planning untuk growth.'
                },
                9: {
                    icon: '🎯',
                    title: '9. Investor Ready',
                    description: 'Pitch ke investor dan dapatkan funding! Buat business plan yang menarik, financial projection, dan presentasi yang convincing untuk investor.'
                }
            };
            
            const step = stepData[stepNumber];
            modalIcon.textContent = step.icon;
            modalTitle.textContent = step.title;
            modalDescription.textContent = step.description;
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeStepModal() {
            const modal = document.getElementById('step-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Journey functions
        let currentStep = 0;
        let userProgress = {
            level: 0,
            badges: 0,
            streak: 0,
            completedSteps: []
        };

        function startJourney() {
            // Scroll to journey section first
            scrollToSection('journey');
            
            // Show welcome message
            setTimeout(() => {
                alert('🎉 Selamat! Journey bisnis kamu dimulai. Klik Step 1 untuk memulai!');
                
                // Highlight Step 1 with pulsing effect
                const step1Card = document.querySelector('.journey-step');
                if (step1Card) {
                    step1Card.style.animation = 'pulse 2s infinite';
                    step1Card.style.boxShadow = '0 0 30px rgba(255, 127, 106, 0.6)';
                    
                    // Remove highlight after 5 seconds
                    setTimeout(() => {
                        step1Card.style.animation = '';
                        step1Card.style.boxShadow = '';
                    }, 5000);
                }
            }, 500);
        }

        let currentModalStep = 1;
        
        function startStep() {
            const stepNumber = currentModalStep;
            
            if (stepNumber === 1 || userProgress.completedSteps.includes(stepNumber - 1)) {
                closeStepModal();
                showStepWorksheet(stepNumber);
            } else {
                alert('🔒 Selesaikan step sebelumnya terlebih dahulu!');
            }
        }

        function showStepWorksheet(stepNumber) {
            const worksheetData = {
                1: {
                    title: 'Worksheet: Ide Brilian',
                    icon: '💡',
                    fields: [
                        { label: 'Apa passion/hobi utamamu?', placeholder: 'Contoh: Fotografi, memasak, teknologi...', key: 'passion' },
                        { label: 'Masalah apa yang sering kamu lihat di sekitar?', placeholder: 'Contoh: Susah cari makanan sehat, aplikasi belajar yang membosankan...', key: 'problem' },
                        { label: 'Ide bisnis yang ingin kamu coba:', placeholder: 'Contoh: Platform belajar fotografi online untuk pemula...', key: 'idea' },
                        { label: 'Kenapa ide ini menarik buatmu?', placeholder: 'Contoh: Karena aku suka fotografi dan banyak teman yang mau belajar...', key: 'why' }
                    ]
                },
                2: {
                    title: 'Worksheet: Riset Pasar',
                    icon: '🎯',
                    fields: [
                        { label: 'Siapa target customer utamamu?', placeholder: 'Contoh: Mahasiswa usia 18-25 yang suka fotografi...', key: 'target' },
                        { label: 'Dimana mereka biasanya nongkrong (online/offline)?', placeholder: 'Contoh: Instagram, YouTube, komunitas fotografi kampus...', key: 'hangout' },
                        { label: 'Siapa kompetitor utamamu?', placeholder: 'Contoh: Kelas.com, Udemy, YouTube creators...', key: 'competitors' },
                        { label: 'Apa yang membedakan idemu dari kompetitor?', placeholder: 'Contoh: Fokus khusus fotografi, ada mentoring 1-on-1...', key: 'differentiation' }
                    ]
                },
                3: {
                    title: 'Worksheet: Modal Pintar',
                    icon: '💰',
                    fields: [
                        { label: 'Berapa modal awal yang kamu butuhkan?', placeholder: 'Contoh: Rp 5.000.000 untuk equipment dan marketing...', key: 'initialCapital' },
                        { label: 'Apa saja yang perlu dibeli/disewa?', placeholder: 'Contoh: Kamera, laptop, software editing, domain website...', key: 'expenses' },
                        { label: 'Dari mana kamu bisa dapat modal?', placeholder: 'Contoh: Tabungan pribadi, pinjam orangtua, crowdfunding...', key: 'funding' },
                        { label: 'Berapa harga jual produk/layananmu?', placeholder: 'Contoh: Kelas online Rp 299.000, mentoring Rp 150.000/jam...', key: 'pricing' }
                    ]
                },
                4: {
                    title: 'Worksheet: Branding Kece',
                    icon: '🎨',
                    fields: [
                        { label: 'Nama brand/bisnis yang kamu pilih:', placeholder: 'Contoh: SnapLearn, PhotoMaster Academy...', key: 'brandName' },
                        { label: 'Warna utama brand (pilih 2-3 warna):', placeholder: 'Contoh: Biru navy, orange, putih...', key: 'colors' },
                        { label: 'Personality brand (3 kata sifat):', placeholder: 'Contoh: Friendly, professional, inspiring...', key: 'personality' },
                        { label: 'Tagline/slogan yang catchy:', placeholder: 'Contoh: "Belajar Fotografi, Jadi Fotografer!"', key: 'tagline' }
                    ]
                },
                5: {
                    title: 'Worksheet: Go Live!',
                    icon: '🚀',
                    fields: [
                        { label: 'Platform mana yang akan kamu gunakan untuk jualan?', placeholder: 'Contoh: Instagram, website sendiri, marketplace...', key: 'platform' },
                        { label: 'Strategi marketing pertama yang akan kamu coba:', placeholder: 'Contoh: Post konten di Instagram, kolaborasi dengan influencer...', key: 'marketing' },
                        { label: 'Target penjualan bulan pertama:', placeholder: 'Contoh: 10 siswa untuk kelas online...', key: 'target' },
                        { label: 'Kapan kamu akan mulai launch?', placeholder: 'Contoh: 2 minggu lagi setelah persiapan konten...', key: 'timeline' }
                    ]
                },
                6: {
                    title: 'Sales Simulator: Praktik Jualan',
                    icon: '💰',
                    isSimulator: true,
                    fields: [
                        { label: 'Produk yang akan kamu jual:', placeholder: 'Contoh: Kelas fotografi online untuk pemula...', key: 'product' },
                        { label: 'Harga jual produk:', placeholder: 'Contoh: Rp 299.000...', key: 'price' },
                        { label: 'Target customer utama:', placeholder: 'Contoh: Mahasiswa yang suka fotografi...', key: 'customer' },
                        { label: 'Unique selling point (USP):', placeholder: 'Contoh: Satu-satunya kelas dengan mentoring 1-on-1...', key: 'usp' }
                    ]
                },
                7: {
                    title: 'Customer Service Simulator',
                    icon: '🤝',
                    isSimulator: true,
                    fields: [
                        { label: 'Cara kamu handle customer yang komplain:', placeholder: 'Contoh: Dengarkan dulu, minta maaf, tawarkan solusi...', key: 'complaint' },
                        { label: 'Strategi untuk bikin customer loyal:', placeholder: 'Contoh: Follow up rutin, kasih bonus, personal touch...', key: 'loyalty' },
                        { label: 'Cara kamu follow up setelah penjualan:', placeholder: 'Contoh: Chat personal, minta feedback, tawarkan produk lain...', key: 'followup' },
                        { label: 'Response time target untuk customer:', placeholder: 'Contoh: Maksimal 2 jam untuk chat, 24 jam untuk email...', key: 'response' }
                    ]
                },
                8: {
                    title: 'Scale Up Planning',
                    icon: '📈',
                    fields: [
                        { label: 'Target revenue 6 bulan ke depan:', placeholder: 'Contoh: Rp 50 juta per bulan...', key: 'revenue' },
                        { label: 'Tim yang perlu kamu hire:', placeholder: 'Contoh: 1 content creator, 1 customer service...', key: 'team' },
                        { label: 'Sistem/tools yang perlu dibangun:', placeholder: 'Contoh: CRM system, automated email marketing...', key: 'systems' },
                        { label: 'Strategi ekspansi (produk/market baru):', placeholder: 'Contoh: Tambah kelas videografi, expand ke kota lain...', key: 'expansion' }
                    ]
                },
                9: {
                    title: 'Investor Pitch Preparation',
                    icon: '🎯',
                    fields: [
                        { label: 'Funding yang kamu butuhkan:', placeholder: 'Contoh: Rp 500 juta untuk ekspansi...', key: 'funding' },
                        { label: 'Untuk apa funding akan digunakan:', placeholder: 'Contoh: 60% marketing, 30% team, 10% technology...', key: 'usage' },
                        { label: 'Proyeksi revenue 2 tahun ke depan:', placeholder: 'Contoh: Tahun 1: Rp 2M, Tahun 2: Rp 8M...', key: 'projection' },
                        { label: 'Competitive advantage yang kamu punya:', placeholder: 'Contoh: First mover, exclusive partnership, patent...', key: 'advantage' }
                    ]
                }
            };

            const worksheet = worksheetData[stepNumber];
            const savedData = JSON.parse(localStorage.getItem(`step${stepNumber}Data`) || '{}');

            // Create worksheet modal
            const worksheetModal = document.createElement('div');
            worksheetModal.id = 'worksheet-modal';
            worksheetModal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
            
            worksheetModal.innerHTML = `
                <div class="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
                    <div class="text-center mb-6">
                        <div class="text-6xl mb-4">${worksheet.icon}</div>
                        <h3 class="font-poppins font-bold text-2xl coral-text mb-2">${worksheet.title}</h3>
                        <p class="text-gray-600">Isi worksheet ini untuk menyelesaikan step ${stepNumber}</p>
                    </div>
                    
                    <form id="worksheet-form" class="space-y-6">
                        ${worksheet.fields.map(field => `
                            <div>
                                <label class="block text-sm font-bold text-gray-700 mb-2">${field.label}</label>
                                <textarea 
                                    name="${field.key}" 
                                    placeholder="${field.placeholder}"
                                    class="w-full p-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-coral"
                                    rows="3"
                                >${savedData[field.key] || ''}</textarea>
                            </div>
                        `).join('')}
                        
                        <div class="flex space-x-4 pt-4">
                            <button type="button" onclick="saveWorksheet(${stepNumber})" class="flex-1 coral-bg text-white py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                                💾 Simpan Progress
                            </button>
                            <button type="button" onclick="completeWorksheet(${stepNumber})" class="flex-1 mint-bg text-white py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                                ✅ Selesai & Lanjut
                            </button>
                        </div>
                        
                        <button type="button" onclick="closeWorksheet()" class="w-full sand-bg text-gray-800 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                            ← Kembali ke Journey
                        </button>
                    </form>
                </div>
            `;

            document.body.appendChild(worksheetModal);
        }

        function saveWorksheet(stepNumber) {
            const form = document.getElementById('worksheet-form');
            const formData = new FormData(form);
            const data = {};
            
            for (let [key, value] of formData.entries()) {
                data[key] = value.trim();
            }
            
            localStorage.setItem(`step${stepNumber}Data`, JSON.stringify(data));
            alert('💾 Progress berhasil disimpan! Kamu bisa lanjutkan nanti.');
        }

        function completeWorksheet(stepNumber) {
            const form = document.getElementById('worksheet-form');
            const formData = new FormData(form);
            const data = {};
            let filledFields = 0;
            
            for (let [key, value] of formData.entries()) {
                data[key] = value.trim();
                if (value.trim()) filledFields++;
            }
            
            if (filledFields < 3) {
                alert('📝 Isi minimal 3 field untuk menyelesaikan step ini ya!');
                return;
            }
            
            localStorage.setItem(`step${stepNumber}Data`, JSON.stringify(data));
            
            // Check if this is a simulator step
            const worksheetData = {
                6: { isSimulator: true },
                7: { isSimulator: true }
            };
            
            if (worksheetData[stepNumber]?.isSimulator) {
                closeWorksheet();
                startSimulator(stepNumber, data);
            } else {
                closeWorksheet();
                completeStep(stepNumber);
            }
        }

        function startSimulator(stepNumber, userData) {
            if (stepNumber === 6) {
                startSalesSimulator(userData);
            } else if (stepNumber === 7) {
                startCustomerServiceSimulator(userData);
            }
        }

        function startSalesSimulator(userData) {
            const customers = [
                {
                    name: 'Andi (Mahasiswa)',
                    avatar: '👨‍🎓',
                    personality: 'skeptical',
                    budget: 'terbatas',
                    objections: ['Harganya mahal banget', 'Apa bedanya sama YouTube gratis?', 'Gimana kalau gak cocok?'],
                    interests: ['fotografi', 'belajar praktis', 'mentoring']
                },
                {
                    name: 'Sari (Pekerja)',
                    avatar: '👩‍💼',
                    personality: 'busy',
                    budget: 'menengah',
                    objections: ['Gak ada waktu buat belajar', 'Udah terlalu tua buat mulai', 'Kapan bisa praktek?'],
                    interests: ['skill baru', 'career development', 'flexible learning']
                },
                {
                    name: 'Riko (Entrepreneur)',
                    avatar: '👨‍💻',
                    personality: 'decisive',
                    budget: 'tinggi',
                    objections: ['Perlu bukti hasil nyata', 'Bisa langsung applicable?', 'Ada support setelah beli?'],
                    interests: ['business growth', 'networking', 'advanced techniques']
                }
            ];

            const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
            showSalesSimulation(randomCustomer, userData);
        }

        function showSalesSimulation(customer, userData) {
            const simulatorModal = document.createElement('div');
            simulatorModal.id = 'simulator-modal';
            simulatorModal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
            
            simulatorModal.innerHTML = `
                <div class="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-96 overflow-y-auto">
                    <div class="text-center mb-6">
                        <div class="text-6xl mb-4"></div>
                        <h3 class="font-poppins font-bold text-2xl coral-text mb-2">Sales Simulator</h3>
                        <p class="text-gray-600">Praktik jualan dengan customer virtual!</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Customer Profile -->
                        <div class="bg-sky-50 rounded-2xl p-6">
                            <h4 class="font-bold text-lg mb-4">👤 Customer Profile</h4>
                            <div class="space-y-3">
                                <div class="flex items-center space-x-3">
                                    <span class="text-3xl">${customer.avatar}</span>
                                    <div>
                                        <div class="font-bold">${customer.name}</div>
                                        <div class="text-sm text-gray-600">Budget: ${customer.budget}</div>
                                    </div>
                                </div>
                                <div>
                                    <div class="font-semibold text-sm">Personality: ${customer.personality}</div>
                                    <div class="text-sm text-gray-600">Interests: ${customer.interests.join(', ')}</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Your Product -->
                        <div class="bg-coral-50 rounded-2xl p-6">
                            <h4 class="font-bold text-lg mb-4">🎯 Your Product</h4>
                            <div class="space-y-2 text-sm">
                                <div><strong>Produk:</strong> ${userData.product}</div>
                                <div><strong>Harga:</strong> ${userData.price}</div>
                                <div><strong>Target:</strong> ${userData.customer}</div>
                                <div><strong>USP:</strong> ${userData.usp}</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Conversation -->
                    <div class="mt-8">
                        <h4 class="font-bold text-lg mb-4">💬 Conversation</h4>
                        <div id="conversation" class="bg-gray-50 rounded-2xl p-4 h-48 overflow-y-auto mb-4">
                            <div class="flex items-start space-x-3 mb-4">
                                <span class="text-2xl">${customer.avatar}</span>
                                <div class="bg-white rounded-2xl p-3 flex-1">
                                    <div class="font-bold text-sm">${customer.name}</div>
                                    <div class="text-sm">Hai! Aku tertarik sama ${userData.product}. Tapi ${customer.objections[0].toLowerCase()}. Bisa jelasin lebih detail?</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Response Options -->
                        <div class="space-y-3">
                            <button onclick="respondToCustomer('empathy', '${customer.name}')" class="w-full text-left p-3 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all">
                                😊 "Aku paham concern kamu. Let me explain the value..."
                            </button>
                            <button onclick="respondToCustomer('aggressive', '${customer.name}')" class="w-full text-left p-3 bg-red-50 rounded-2xl hover:bg-red-100 transition-all">
                                😤 "Harga segitu udah murah banget! Kalo gak mau ya udah..."
                            </button>
                            <button onclick="respondToCustomer('solution', '${customer.name}')" class="w-full text-left p-3 bg-green-50 rounded-2xl hover:bg-green-100 transition-all">
                                💡 "Gimana kalau aku kasih trial dulu? Atau payment plan?"
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4 mt-8">
                        <button onclick="closeSimulator()" class="flex-1 sand-bg text-gray-800 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                            ← Kembali
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(simulatorModal);
        }

        function respondToCustomer(responseType, customerName) {
            const conversation = document.getElementById('conversation');
            let customerReaction = '';
            let salesResult = '';
            
            if (responseType === 'empathy') {
                customerReaction = '😊 "Oh gitu ya... Oke aku mulai tertarik. Bisa kasih contoh hasil student sebelumnya?"';
                salesResult = '✅ Good response! Customer mulai trust dan mau denger lebih lanjut.';
            } else if (responseType === 'aggressive') {
                customerReaction = '😠 "Wah attitude-nya gimana sih? Aku cancel deh, bye!"';
                salesResult = '❌ Customer pergi! Aggressive approach biasanya backfire.';
            } else if (responseType === 'solution') {
                customerReaction = '🤔 "Wah boleh tuh trial-nya! Gimana caranya?"';
                salesResult = '🎉 Excellent! Offering solution shows you care about customer needs.';
            }
            
            // Add your response
            const yourResponse = document.createElement('div');
            yourResponse.className = 'flex items-start space-x-3 mb-4 justify-end';
            yourResponse.innerHTML = `
                <div class="bg-coral text-white rounded-2xl p-3 max-w-xs">
                    <div class="font-bold text-sm">Kamu</div>
                    <div class="text-sm">${responseType === 'empathy' ? 'Aku paham concern kamu...' : responseType === 'aggressive' ? 'Harga segitu udah murah banget!' : 'Gimana kalau aku kasih trial dulu?'}</div>
                </div>
                <span class="text-2xl">😊</span>
            `;
            conversation.appendChild(yourResponse);
            
            // Add customer reaction
            setTimeout(() => {
                const reaction = document.createElement('div');
                reaction.className = 'flex items-start space-x-3 mb-4';
                reaction.innerHTML = `
                    <span class="text-2xl">${responseType === 'aggressive' ? '😠' : '😊'}</span>
                    <div class="bg-white rounded-2xl p-3 flex-1">
                        <div class="font-bold text-sm">${customerName}</div>
                        <div class="text-sm">${customerReaction}</div>
                    </div>
                `;
                conversation.appendChild(reaction);
                conversation.scrollTop = conversation.scrollHeight;
                
                // Show result
                setTimeout(() => {
                    alert(`📊 Sales Result: ${salesResult}\n\n${responseType === 'solution' ? '🎯 Conversion Rate: 85%' : responseType === 'empathy' ? '🎯 Conversion Rate: 60%' : '🎯 Conversion Rate: 5%'}\n\nTip: Always listen to customer concerns and offer solutions!`);
                    
                    if (responseType !== 'aggressive') {
                        completeStep(6);
                        closeSimulator();
                    }
                }, 1500);
            }, 1000);
        }

        function startCustomerServiceSimulator(userData) {
            const complaints = [
                {
                    customer: 'Budi',
                    avatar: '😡',
                    issue: 'Produknya gak sesuai ekspektasi! Mau refund!',
                    severity: 'high',
                    context: 'Beli kelas fotografi tapi materinya terlalu basic'
                },
                {
                    customer: 'Lisa',
                    avatar: '😔',
                    issue: 'Udah 3 hari chat gak dibalas...',
                    severity: 'medium',
                    context: 'Butuh bantuan teknis tapi slow response'
                },
                {
                    customer: 'Anto',
                    avatar: '🤔',
                    issue: 'Bingung cara akses materinya gimana?',
                    severity: 'low',
                    context: 'Customer baru yang butuh guidance'
                }
            ];

            const randomComplaint = complaints[Math.floor(Math.random() * complaints.length)];
            showCustomerServiceSimulation(randomComplaint, userData);
        }

        function showCustomerServiceSimulation(complaint, userData) {
            const simulatorModal = document.createElement('div');
            simulatorModal.id = 'simulator-modal';
            simulatorModal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
            
            simulatorModal.innerHTML = `
                <div class="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-96 overflow-y-auto">
                    <div class="text-center mb-6">
                        <div class="text-6xl mb-4">🤝</div>
                        <h3 class="font-poppins font-bold text-2xl coral-text mb-2">Customer Service Simulator</h3>
                        <p class="text-gray-600">Handle customer complaint dengan profesional!</p>
                    </div>
                    
                    <div class="bg-red-50 rounded-2xl p-6 mb-6">
                        <h4 class="font-bold text-lg mb-4">🚨 Incoming Complaint</h4>
                        <div class="flex items-start space-x-3">
                            <span class="text-3xl">${complaint.avatar}</span>
                            <div>
                                <div class="font-bold">${complaint.customer}</div>
                                <div class="text-red-600 font-semibold">"${complaint.issue}"</div>
                                <div class="text-sm text-gray-600 mt-2">Context: ${complaint.context}</div>
                                <div class="text-xs text-red-500 mt-1">Severity: ${complaint.severity.toUpperCase()}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="font-bold text-lg mb-4">💬 Your Response Strategy</h4>
                        <div class="space-y-3">
                            <button onclick="handleComplaint('listen', '${complaint.customer}')" class="w-full text-left p-3 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all">
                                👂 Listen first: "Maaf banget ${complaint.customer}, aku paham frustasi kamu..."
                            </button>
                            <button onclick="handleComplaint('defensive', '${complaint.customer}')" class="w-full text-left p-3 bg-red-50 rounded-2xl hover:bg-red-100 transition-all">
                                🛡️ Defensive: "Itu bukan salah kita, kamu yang gak baca terms & conditions..."
                            </button>
                            <button onclick="handleComplaint('solution', '${complaint.customer}')" class="w-full text-left p-3 bg-green-50 rounded-2xl hover:bg-green-100 transition-all">
                                💡 Immediate solution: "Let me fix this right now! Here's what I'll do..."
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <button onclick="closeSimulator()" class="flex-1 sand-bg text-gray-800 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                            ← Kembali
                        </button>
                    </div>
                </div>
            `;

            document.body.appendChild(simulatorModal);
        }

        function handleComplaint(approach, customerName) {
            let result = '';
            let satisfaction = 0;
            
            if (approach === 'listen') {
                result = `✅ Excellent! ${customerName} merasa didengar dan mulai tenang. Customer satisfaction: 85%\n\nTip: Always acknowledge customer feelings first before offering solutions.`;
                satisfaction = 85;
            } else if (approach === 'defensive') {
                result = `❌ Customer semakin marah dan post negative review! Customer satisfaction: 10%\n\nTip: Never blame the customer, even if they're wrong.`;
                satisfaction = 10;
            } else if (approach === 'solution') {
                result = `🎯 Good! Customer appreciate quick action. Customer satisfaction: 75%\n\nTip: Proactive solutions work, but listening first is even better.`;
                satisfaction = 75;
            }
            
            alert(`📊 Customer Service Result:\n\n${result}\n\n${satisfaction > 70 ? '🏆 Customer turned into loyal advocate!' : satisfaction > 40 ? '😐 Customer issue resolved but not impressed' : '💔 Customer will never come back and tell others'}`);
            
            if (satisfaction > 40) {
                completeStep(7);
            }
            closeSimulator();
        }

        function closeSimulator() {
            const modal = document.getElementById('simulator-modal');
            if (modal) {
                modal.remove();
            }
        }

        function closeWorksheet() {
            const modal = document.getElementById('worksheet-modal');
            if (modal) {
                modal.remove();
            }
        }

        function viewStepData(stepNumber) {
            const savedData = JSON.parse(localStorage.getItem(`step${stepNumber}Data`) || '{}');
            
            if (Object.keys(savedData).length === 0) {
                alert(`📝 Belum ada data tersimpan untuk Step ${stepNumber}. Mulai isi worksheet dulu ya!`);
                return;
            }
            
            const stepTitles = {
                1: 'Ide Brilian',
                2: 'Riset Pasar', 
                3: 'Modal Pintar',
                4: 'Branding Kece',
                5: 'Go Live!'
            };
            
            let dataText = `📋 Data ${stepTitles[stepNumber]} kamu:\n\n`;
            Object.entries(savedData).forEach(([key, value]) => {
                if (value) {
                    dataText += `• ${value}\n`;
                }
            });
            
            alert(dataText + '\n💡 Kamu bisa edit data ini kapan saja dengan klik step yang sudah selesai!');
        }

        function completeStep(stepNumber) {
            if (!userProgress.completedSteps.includes(stepNumber)) {
                userProgress.completedSteps.push(stepNumber);
                userProgress.level += 20;
                userProgress.badges += 1;
                userProgress.streak += 1;
                
                updateProgressDisplay();
                updateJourneyMap();
                
                alert(`🎉 Selamat! Step ${stepNumber} selesai! Kamu mendapat badge baru dan naik level!`);
            }
        }



        function updateProgressDisplay() {
            // Update level
            const levels = ['Beach Newbie', 'Wave Rider', 'Surf Explorer', 'Ocean Master', 'Biz Legend'];
            const levelIndex = Math.min(Math.floor(userProgress.level / 20), levels.length - 1);
            
            document.querySelector('.text-3xl.font-bold.text-gray-800').textContent = levels[levelIndex];
            
            // Update progress bars
            const progressBars = document.querySelectorAll('.coral-progress, .bg-gray-300');
            progressBars.forEach(bar => {
                if (bar.parentElement.parentElement.textContent.includes('Level Kamu')) {
                    bar.style.width = Math.min(userProgress.level, 100) + '%';
                    bar.className = userProgress.level > 0 ? 'coral-progress h-4 rounded-full' : 'bg-gray-300 h-4 rounded-full';
                }
            });
            
            // Update badges
            const badgeElements = document.querySelectorAll('.flex.justify-center.space-x-2 span');
            badgeElements.forEach((badge, index) => {
                if (index < userProgress.badges) {
                    badge.style.opacity = '1';
                } else {
                    badge.style.opacity = '0.3';
                }
            });
            
            document.querySelector('.text-sm.text-gray-600').textContent = `${userProgress.badges} dari 10 badge`;
            
            // Update streak
            document.querySelector('.text-3xl.font-bold.text-gray-800.mb-2').textContent = userProgress.streak + ' Hari';
            
            // Update wave progress
            document.querySelector('.absolute.inset-0.flex.items-center.justify-center div').textContent = 
                `Progress: ${userProgress.level}% - ${userProgress.level === 0 ? 'Siap Memulai!' : 'Terus Semangat!'}`;
        }

        function updateJourneyMap() {
            const stepCards = document.querySelectorAll('.journey-step');
            
            stepCards.forEach((card, index) => {
                const stepNumber = index + 1;
                const statusBadge = card.querySelector('.bg-coral, .bg-gray-400');
                const actionButton = card.querySelector('button');
                const iconContainer = card.querySelector('.w-16.h-16');
                const title = card.querySelector('.font-poppins.font-bold.text-lg');
                const description = card.querySelector('.text-gray-600.text-sm');
                
                if (userProgress.completedSteps.includes(stepNumber)) {
                    // Completed step - make it green
                    card.style.opacity = '1';
                    card.style.cursor = 'pointer';
                    card.className = card.className.replace('opacity-60', '').replace('cursor-not-allowed', '');
                    
                    if (statusBadge) {
                        statusBadge.className = 'bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block';
                        statusBadge.textContent = 'COMPLETED';
                    }
                    
                    if (actionButton) {
                        actionButton.className = 'w-full bg-green-500 text-white py-2 rounded-xl font-bold text-sm hover:scale-105 transition-all';
                        actionButton.textContent = '📋 Lihat Data';
                        actionButton.style.cursor = 'pointer';
                        actionButton.onclick = () => viewStepData(stepNumber);
                    }
                    
                    if (iconContainer) {
                        iconContainer.className = 'w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-3xl text-white mb-4 mx-auto';
                    }
                    
                    if (title) {
                        title.className = 'font-poppins font-bold text-lg text-green-600 mb-2';
                    }
                    
                    if (description) {
                        description.className = 'text-gray-600 text-sm mb-4';
                    }
                    
                } else if (stepNumber === 1 || userProgress.completedSteps.includes(stepNumber - 1)) {
                    // Available step - keep coral color and make clickable
                    card.style.opacity = '1';
                    card.style.cursor = 'pointer';
                    card.className = card.className.replace('opacity-60', '').replace('cursor-not-allowed', '');
                    
                    if (statusBadge) {
                        statusBadge.className = 'bg-coral text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block';
                        statusBadge.textContent = `STEP ${stepNumber}`;
                    }
                    
                    if (actionButton) {
                        actionButton.className = 'w-full coral-bg text-white py-2 rounded-xl font-bold text-sm hover:scale-105 transition-all';
                        actionButton.textContent = stepNumber === 1 ? 'Mulai Sekarang' : 'Mulai Step Ini';
                        actionButton.style.cursor = 'pointer';
                    }
                    
                    if (iconContainer) {
                        iconContainer.className = 'w-16 h-16 coral-bg rounded-full flex items-center justify-center text-3xl text-white mb-4 mx-auto floating';
                    }
                    
                    if (title) {
                        title.className = 'font-poppins font-bold text-lg coral-text mb-2';
                    }
                    
                } else {
                    // Locked step - keep gray and disabled
                    card.style.opacity = '0.6';
                    card.style.cursor = 'not-allowed';
                    
                    if (statusBadge) {
                        statusBadge.className = 'bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block';
                        statusBadge.textContent = `STEP ${stepNumber}`;
                    }
                    
                    if (actionButton) {
                        actionButton.className = 'w-full bg-gray-300 text-gray-500 py-2 rounded-xl font-bold text-sm cursor-not-allowed';
                        actionButton.textContent = '🔒 Locked';
                    }
                    
                    if (iconContainer) {
                        iconContainer.className = 'w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl text-white mb-4 mx-auto';
                    }
                    
                    if (title) {
                        title.className = 'font-poppins font-bold text-lg text-gray-500 mb-2';
                    }
                    
                    if (description) {
                        description.className = 'text-gray-400 text-sm mb-4';
                    }
                }
            });
            
            // Update overall progress bar (now out of 9 steps)
            const overallProgress = (userProgress.completedSteps.length / 9) * 100;
            const progressBar = document.querySelector('.coral-progress');
            const progressText = document.querySelector('.coral-text.font-bold');
            
            if (progressBar) {
                progressBar.style.width = overallProgress + '%';
            }
            if (progressText) {
                progressText.textContent = Math.round(overallProgress) + '% Complete';
            }
            
            // Update final achievement visibility
            const finalAchievement = document.querySelector('.bg-gradient-to-r.from-purple-500.via-pink-500.to-orange-400');
            if (finalAchievement && userProgress.completedSteps.length === 9) {
                finalAchievement.style.opacity = '1';
                finalAchievement.className = 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 rounded-3xl p-8 max-w-2xl mx-auto border-4 border-yellow-600 shadow-2xl';
                finalAchievement.innerHTML = `
                    <div class="text-6xl mb-4">👑</div>
                    <h3 class="font-poppins font-bold text-3xl text-yellow-900 mb-4 drop-shadow-lg">Entrepreneur Legend</h3>
                    <p class="text-yellow-900/80 text-lg mb-6">
                        Selamat! Kamu udah jadi entrepreneur sejati yang siap menghadapi tantangan bisnis apapun!
                    </p>
                    <div class="bg-yellow-600/30 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-yellow-700/50">
                        <div class="text-yellow-900 font-bold text-lg">🏆 Achievement Unlocked: Business Master</div>
                    </div>
                    <button onclick="celebrateCompletion()" class="bg-yellow-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
                        🎉 Celebrate Success!
                    </button>
                `;
            }
        }

        // Challenge functions
        function startIdeGenerator() {
            // Create idea generator modal
            const modal = document.createElement('div');
            modal.id = 'idea-generator-modal';
            modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
            
            modal.innerHTML = `
                <div class="bg-white rounded-3xl p-8 max-w-2xl w-full">
                    <div class="text-center mb-6">
                        <div class="text-6xl mb-4">🧠</div>
                        <h3 class="font-poppins font-bold text-2xl coral-text mb-2">Ide Generator Challenge</h3>
                        <p class="text-gray-600">Spin roda ide dan dapatkan inspirasi bisnis kreatif!</p>
                    </div>
                    
                    <div class="bg-gradient-to-r from-coral to-sunset-orange rounded-2xl p-6 mb-6 text-center text-white">
                        <div class="text-4xl mb-4 animate-spin" id="idea-spinner">🎯</div>
                        <div class="text-xl font-bold" id="idea-display">Klik tombol untuk mulai!</div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <button onclick="spinIdea()" class="flex-1 coral-bg text-white py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                            🎲 Spin Idea!
                        </button>
                        <button onclick="closeIdeGenerator()" class="flex-1 sand-bg text-gray-800 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                            ← Tutup
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
        }

        function spinIdea() {
            const ideas = [
                'Aplikasi food delivery untuk makanan sehat',
                'Platform belajar online untuk skill kreatif',
                'Jasa konsultasi bisnis untuk UMKM',
                'E-commerce produk ramah lingkungan',
                'Layanan subscription box untuk hobi',
                'Platform freelancer khusus anak muda',
                'Aplikasi manajemen keuangan pribadi',
                'Jasa digital marketing untuk UKM',
                'Aplikasi dating untuk entrepreneur',
                'Platform jual beli barang bekas premium',
                'Jasa cleaning service ramah lingkungan',
                'Aplikasi booking lapangan olahraga',
                'Platform kursus online untuk orang tua',
                'Jasa fotografi untuk UMKM',
                'Aplikasi tracking kesehatan mental'
            ];
            
            const ideaDisplay = document.getElementById('idea-display');
            const spinner = document.getElementById('idea-spinner');
            
            ideaDisplay.textContent = 'Spinning...';
            spinner.style.animation = 'spin 2s linear infinite';
            
            setTimeout(() => {
                const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
                ideaDisplay.textContent = randomIdea;
                spinner.style.animation = '';
                spinner.textContent = '💡';
            }, 2000);
        }

        function closeIdeGenerator() {
            const modal = document.getElementById('idea-generator-modal');
            if (modal) {
                modal.remove();
            }
        }

        function startMarketMatcher() {
            // Create market matcher quiz modal
            const modal = document.createElement('div');
            modal.id = 'market-matcher-modal';
            modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
            
            const products = [
                { name: 'Skincare Premium Anti-Aging', correct: 'Millennials (26-35)' },
                { name: 'Aplikasi Belajar Coding', correct: 'Gen Z (18-25)' },
                { name: 'Suplemen Kesehatan Jantung', correct: 'Gen X (36-50)' },
                { name: 'Fashion Vintage Thrifting', correct: 'Gen Z (18-25)' }
            ];
            
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            
            modal.innerHTML = `
                <div class="bg-white rounded-3xl p-8 max-w-2xl w-full">
                    <div class="text-center mb-6">
                        <div class="text-6xl mb-4">💡</div>
                        <h3 class="font-poppins font-bold text-2xl text-teal-600 mb-2">Market Matcher Challenge</h3>
                        <p class="text-gray-600">Cocokkan produk dengan target market yang tepat!</p>
                    </div>
                    
                    <div class="bg-teal-50 rounded-2xl p-6 mb-6 text-center">
                        <h4 class="font-bold text-lg mb-4">🎯 Produk yang akan dipasarkan:</h4>
                        <div class="text-xl font-bold text-teal-700">${randomProduct.name}</div>
                    </div>
                    
                    <div class="space-y-3 mb-6">
                        <button onclick="selectMarket('Gen Z (18-25)', '${randomProduct.correct}')" class="w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-teal-100 transition-all">
                            👶 Gen Z (18-25) - Digital natives, sosial media savvy
                        </button>
                        <button onclick="selectMarket('Millennials (26-35)', '${randomProduct.correct}')" class="w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-teal-100 transition-all">
                            👨‍💼 Millennials (26-35) - Career focused, quality conscious
                        </button>
                        <button onclick="selectMarket('Gen X (36-50)', '${randomProduct.correct}')" class="w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-teal-100 transition-all">
                            👩‍💼 Gen X (36-50) - Established, family oriented
                        </button>
                        <button onclick="selectMarket('Baby Boomers (50+)', '${randomProduct.correct}')" class="w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-teal-100 transition-all">
                            👴 Baby Boomers (50+) - Traditional, value driven
                        </button>
                    </div>
                    
                    <button onclick="closeMarketMatcher()" class="w-full sand-bg text-gray-800 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                        ← Tutup
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
        }

        function selectMarket(selected, correct) {
            const isCorrect = selected === correct;
            const score = isCorrect ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 30) + 40;
            
            alert(`🎯 Jawaban kamu: ${selected}\n${isCorrect ? '✅ Benar!' : '❌ Kurang tepat!'}\n\nSkor: ${score}/100\n\n${score > 80 ? '🏆 Excellent! Kamu paham banget target market!' : score > 60 ? '👍 Good job! Terus belajar ya!' : '💪 Keep practicing! Riset market itu penting!'}`);
            
            closeMarketMatcher();
        }

        function closeMarketMatcher() {
            const modal = document.getElementById('market-matcher-modal');
            if (modal) {
                modal.remove();
            }
        }

        function startSpeedPitch() {
            // Create speed pitch modal
            const modal = document.createElement('div');
            modal.id = 'speed-pitch-modal';
            modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
            
            const pitchTopics = [
                'Aplikasi delivery makanan sehat',
                'Platform belajar skill digital',
                'Jasa konsultasi bisnis online',
                'E-commerce produk lokal',
                'Aplikasi manajemen keuangan'
            ];
            
            const randomTopic = pitchTopics[Math.floor(Math.random() * pitchTopics.length)];
            
            modal.innerHTML = `
                <div class="bg-white rounded-3xl p-8 max-w-2xl w-full">
                    <div class="text-center mb-6">
                        <div class="text-6xl mb-4">⚡</div>
                        <h3 class="font-poppins font-bold text-2xl text-orange-600 mb-2">Speed Pitch Challenge</h3>
                        <p class="text-gray-600">Presentasikan ide bisnismu dalam 30 detik!</p>
                    </div>
                    
                    <div class="bg-orange-50 rounded-2xl p-6 mb-6 text-center">
                        <h4 class="font-bold text-lg mb-4">🎤 Topic Pitch Kamu:</h4>
                        <div class="text-xl font-bold text-orange-700">${randomTopic}</div>
                    </div>
                    
                    <div class="bg-gray-50 rounded-2xl p-6 mb-6 text-center">
                        <div class="text-6xl mb-4" id="timer-display">⏰</div>
                        <div class="text-3xl font-bold" id="countdown">30</div>
                        <div class="text-sm text-gray-600 mt-2">detik tersisa</div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <button onclick="startPitchTimer()" class="flex-1 bg-orange-500 text-white py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                            🎤 Mulai Timer!
                        </button>
                        <button onclick="closeSpeedPitch()" class="flex-1 sand-bg text-gray-800 py-3 rounded-2xl font-bold hover:scale-105 transition-all">
                            ← Tutup
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
        }

        function startPitchTimer() {
            let countdown = 30;
            const countdownElement = document.getElementById('countdown');
            const timerDisplay = document.getElementById('timer-display');
            
            const timer = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;
                
                if (countdown <= 10) {
                    countdownElement.style.color = '#ef4444';
                    timerDisplay.textContent = '🔥';
                }
                
                if (countdown <= 0) {
                    clearInterval(timer);
                    timerDisplay.textContent = '🎉';
                    countdownElement.textContent = 'SELESAI!';
                    countdownElement.style.color = '#10b981';
                    
                    setTimeout(() => {
                        alert('🎤 Waktu habis! Great job practicing your pitch!\n\n💡 Tips struktur pitch yang baik:\n1. Problem yang kamu solve\n2. Solution yang kamu tawarkan\n3. Target market\n4. Revenue model\n5. Call to action\n\nTerus latihan ya!');
                    }, 1000);
                }
            }, 1000);
        }

        function closeSpeedPitch() {
            const modal = document.getElementById('speed-pitch-modal');
            if (modal) {
                modal.remove();
            }
        }

        // Quiz functions
        let currentQuestion = 1;
        let quizAnswers = [];
        
        const quizQuestions = [
            {
                question: "Ketika melihat masalah di sekitar, reaksi pertamamu adalah...",
                options: [
                    "A. Langsung mikir solusi kreatif dan inovatif",
                    "B. Bikin rencana detail untuk menyelesaikannya", 
                    "C. Ajak orang lain untuk solve bareng-bareng",
                    "D. Cari tahu dulu akar masalahnya apa"
                ]
            },
            {
                question: "Kalau punya uang 10 juta, kamu akan...",
                options: [
                    "A. Invest di teknologi atau produk baru yang belum ada",
                    "B. Beli peralatan untuk mulai bisnis yang udah pasti profit",
                    "C. Ajak teman-teman untuk patungan bisnis bareng",
                    "D. Riset dulu semua kemungkinan investasi terbaik"
                ]
            },
            {
                question: "Tim impianmu terdiri dari...",
                options: [
                    "A. Orang-orang kreatif yang suka eksperimen",
                    "B. Orang-orang yang bisa eksekusi dengan cepat dan tepat",
                    "C. Orang-orang yang peduli sama impact sosial",
                    "D. Orang-orang yang detail dan suka analisis data"
                ]
            },
            {
                question: "Definisi sukses buatmu adalah...",
                options: [
                    "A. Menciptakan sesuatu yang belum pernah ada sebelumnya",
                    "B. Mencapai target dan KPI yang udah ditetapkan",
                    "C. Memberikan dampak positif untuk banyak orang",
                    "D. Membangun bisnis yang sustainable dan profitable"
                ]
            },
            {
                question: "Kalau bisnis kamu gagal, kamu akan...",
                options: [
                    "A. Langsung coba ide baru yang lebih inovatif",
                    "B. Evaluasi kesalahan dan coba lagi dengan strategi yang lebih baik",
                    "C. Fokus ke project yang bisa bantu orang lain dulu",
                    "D. Analisis mendalam kenapa gagal sebelum mulai lagi"
                ]
            }
        ];

        function selectAnswer(answer) {
            quizAnswers.push(answer);
            
            if (currentQuestion < 5) {
                currentQuestion++;
                updateQuizQuestion();
                updateQuizProgress();
            } else {
                showQuizResult();
            }
        }
        
        function updateQuizQuestion() {
            const quizContent = document.getElementById('quiz-content');
            const question = quizQuestions[currentQuestion - 1];
            
            quizContent.innerHTML = `
                <div class="text-center mb-8">
                    <div class="text-5xl mb-4">🤔</div>
                    <h3 class="font-poppins font-bold text-2xl mb-4">Pertanyaan ${currentQuestion} dari 5</h3>
                    <p class="text-lg text-gray-700">
                        ${question.question}
                    </p>
                </div>
                
                <div class="space-y-4">
                    ${question.options.map(option => `
                        <button onclick="selectAnswer('${option.charAt(0)}')" class="quiz-option w-full text-left p-4 bg-gray-50 rounded-2xl hover:bg-coral hover:text-white transition-all">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            `;
        }

        function updateQuizProgress() {
            const progress = (currentQuestion - 1) * 20;
            document.getElementById('quiz-progress').style.width = progress + '%';
            document.querySelector('.text-sm.text-gray-600').textContent = progress + '%';
        }

        function showQuizResult() {
            const resultTypes = {
                'A': { type: 'Innovator 🚀', desc: 'Kamu suka menciptakan hal-hal baru dan berpikir out of the box!' },
                'B': { type: 'Executor 💪', desc: 'Kamu jago eksekusi dan bikin rencana jadi kenyataan!' },
                'C': { type: 'Social Impact Hero 🌟', desc: 'Kamu peduli banget sama dampak positif untuk masyarakat!' },
                'D': { type: 'Strategic Analyst 🧠', desc: 'Kamu suka analisis mendalam dan bikin keputusan yang tepat!' }
            };
            
            // Count most frequent answer
            const counts = {};
            quizAnswers.forEach(answer => counts[answer] = (counts[answer] || 0) + 1);
            const mostFrequent = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
            
            const result = resultTypes[mostFrequent];
            
            const quizContent = document.getElementById('quiz-content');
            quizContent.innerHTML = `
                <div class="text-center">
                    <div class="text-6xl mb-4">🎉</div>
                    <h3 class="font-poppins font-bold text-3xl coral-text mb-4">Hasil Quiz Kamu!</h3>
                    <div class="bg-gradient-to-r from-coral to-sunset-orange text-white rounded-2xl p-6 mb-6">
                        <div class="text-2xl font-bold mb-2">${result.type}</div>
                        <p class="text-lg">${result.desc}</p>
                    </div>
                    <button onclick="restartQuiz()" class="coral-bg text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all">
                        🔄 Coba Lagi
                    </button>
                </div>
            `;
            
            document.getElementById('quiz-progress').style.width = '100%';
            document.querySelector('.text-sm.text-gray-600').textContent = '100%';
        }

        function restartQuiz() {
            currentQuestion = 1;
            quizAnswers = [];
            updateQuizQuestion();
            updateQuizProgress();
        }

        // Progress functions
        function viewDetailedProgress() {
            alert('📊 Membuka dashboard progress detail...');
        }

        function setLearningGoal() {
            alert('🎯 Setting target belajar baru...');
        }

        // Mentor carousel
        function scrollCarousel(direction) {
            const carousel = document.getElementById('mentor-carousel');
            const scrollAmount = 320; // Width of one card plus gap
            
            if (direction === 'left') {
                carousel.scrollLeft -= scrollAmount;
            } else {
                carousel.scrollLeft += scrollAmount;
            }
        }

        function saveTip(tipText) {
            // Save to localStorage (in real app, would save to database)
            let savedTips = JSON.parse(localStorage.getItem('savedTips') || '[]');
            if (!savedTips.includes(tipText)) {
                savedTips.push(tipText);
                localStorage.setItem('savedTips', JSON.stringify(savedTips));
                alert(`💾 Tip berhasil disimpan! Total tips tersimpan: ${savedTips.length}`);
            } else {
                alert('💡 Tip ini sudah tersimpan sebelumnya!');
            }
        }

        function viewAllTips() {
            const savedTips = JSON.parse(localStorage.getItem('savedTips') || '[]');
            
            if (savedTips.length > 0) {
                const tipsList = savedTips.map((tip, index) => `${index + 1}. ${tip}`).join('\n');
                alert(`📚 Tips yang sudah kamu simpan:\n\n${tipsList}\n\nTerus kumpulkan tips berharga lainnya!`);
            } else {
                const tips = [
                    'Validasi ide dengan customer sebelum invest besar',
                    'Fokus pada satu target market dulu, jangan terlalu luas',
                    'Build MVP (Minimum Viable Product) untuk testing',
                    'Network adalah net worth - bangun relasi yang kuat',
                    'Cash flow lebih penting dari profit di awal',
                    'Jangan takut pivot kalau strategi tidak berhasil'
                ];
                
                const randomTip = tips[Math.floor(Math.random() * tips.length)];
                alert(`📚 Tip hari ini: "${randomTip}"\n\nMulai simpan tips dengan klik tombol 💡 Simpan Tip!`);
            }
        }

        // Community functions
        function postComment() {
            const textarea = document.querySelector('textarea');
            const comment = textarea.value.trim();
            
            if (comment) {
                // Add comment to the list
                const commentSection = document.querySelector('.space-y-4.mb-6');
                const newComment = document.createElement('div');
                newComment.className = 'bg-sky-50 rounded-2xl p-4';
                newComment.innerHTML = `
                    <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold">
                            K
                        </div>
                        <div class="flex-1">
                            <div class="font-bold text-sm">Kamu</div>
                            <p class="text-gray-700 text-sm">${comment}</p>
                            <div class="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                                <span>Baru saja</span>
                                <button class="hover:text-coral">❤️ 0</button>
                                <button class="hover:text-coral">💬 Reply</button>
                            </div>
                        </div>
                    </div>
                `;
                commentSection.insertBefore(newComment, commentSection.firstChild);
                textarea.value = '';
                alert('💬 Komentar berhasil dipost! Terima kasih sudah berbagi pengalaman.');
            } else {
                alert('✍️ Tulis sesuatu dulu sebelum post ya!');
            }
        }

        function joinCommunity() {
            const communities = [
                'Discord Server: SharkFin Community (5,000+ members)',
                'WhatsApp Group: Daily Motivation & Tips',
                'Telegram Channel: Business News & Updates',
                'Instagram: @sharkfin_id untuk daily inspiration'
            ];
            
            const communityList = communities.map(c => `• ${c}`).join('\n');
            alert(`🦈 Join komunitas SharkFin di:\n\n${communityList}\n\nPilih yang paling cocok buatmu!`);
        }

        function celebrateCompletion() {
            const achievements = [
                '🎯 Completed 9 Business Steps',
                '💰 Mastered Sales Techniques', 
                '🤝 Expert Customer Service',
                '📈 Ready for Scale Up',
                '🎯 Investor-Ready Entrepreneur'
            ];
            
            const achievementList = achievements.map(a => `✅ ${a}`).join('\n');
            alert(`🎉 CONGRATULATIONS! 🎉\n\nKamu udah berhasil menyelesaikan seluruh SharkFin Journey!\n\n${achievementList}\n\n👑 Status: ENTREPRENEUR LEGEND\n\nSekarang kamu siap untuk:\n• Memulai bisnis sendiri\n• Menghadapi tantangan real business\n• Menjadi mentor untuk entrepreneur lain\n\nKeep growing and inspiring others! 🚀`);
            
            // Add confetti effect (visual celebration)
            document.body.style.background = 'linear-gradient(45deg, #FF7F6A, #FFB366, #6DD6BE, #3EB5B1)';
            document.body.style.backgroundSize = '400% 400%';
            document.body.style.animation = 'waveFlow 2s ease-in-out infinite';
            
            setTimeout(() => {
                document.body.style.background = '';
                document.body.style.animation = '';
            }, 5000);
        }

        // Calculator Functions
        function switchCalculator(type) {
            // Hide all calculators and results
            document.querySelectorAll('.calculator-content').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.results-content').forEach(el => el.classList.add('hidden'));
            
            // Reset all tabs
            document.querySelectorAll('.calc-tab').forEach(tab => {
                tab.className = 'calc-tab flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all text-gray-600 hover:bg-gray-200';
            });
            
            // Show selected calculator and result
            document.getElementById(`${type}-calculator`).classList.remove('hidden');
            document.getElementById(`${type}-results`).classList.remove('hidden');
            
            // Activate selected tab
            const activeTab = document.getElementById(`${type}-tab`);
            if (type === 'startup') {
                activeTab.className = 'calc-tab flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all bg-coral text-white';
            } else if (type === 'breakeven') {
                activeTab.className = 'calc-tab flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all bg-ocean-blue text-white';
            } else if (type === 'profit') {
                activeTab.className = 'calc-tab flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all bg-mint-green text-white';
            }
        }

        function formatCurrency(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        }

        function calculateStartup() {
            const equipmentCost = parseFloat(document.getElementById('equipment-cost').value) || 0;
            const operationalCost = parseFloat(document.getElementById('operational-cost').value) || 0;
            const marketingCost = parseFloat(document.getElementById('marketing-cost').value) || 0;
            const emergencyMonths = parseFloat(document.getElementById('emergency-months').value) || 6;
            
            const emergencyCost = operationalCost * emergencyMonths;
            const totalCost = equipmentCost + operationalCost + marketingCost + emergencyCost;
            
            // Update displays
            document.getElementById('total-startup-cost').textContent = formatCurrency(totalCost);
            document.getElementById('equipment-display').textContent = formatCurrency(equipmentCost);
            document.getElementById('marketing-display').textContent = formatCurrency(marketingCost);
            document.getElementById('operational-display').textContent = formatCurrency(operationalCost);
            document.getElementById('emergency-display').textContent = formatCurrency(emergencyCost);
            
            // Funding recommendation
            let recommendation = '';
            if (totalCost <= 10000000) {
                recommendation = ' Modal kecil - bisa pakai tabungan pribadi atau pinjam keluarga';
            } else if (totalCost <= 50000000) {
                recommendation = 'Modal menengah - pertimbangkan KUR atau investor angel';
            } else if (totalCost <= 200000000) {
                recommendation = ' Modal besar - butuh investor serius atau venture capital';
            } else {
                recommendation = 'Modal sangat besar - perlu business plan solid untuk institutional investor';
            }
            
            document.getElementById('funding-recommendation').textContent = recommendation;
        }

        function calculateBreakeven() {
            const sellingPrice = parseFloat(document.getElementById('selling-price').value) || 0;
            const variableCost = parseFloat(document.getElementById('variable-cost').value) || 0;
            const fixedCost = parseFloat(document.getElementById('fixed-cost').value) || 0;
            
            const unitMargin = sellingPrice - variableCost;
            const breakevenUnits = fixedCost / unitMargin;
            const breakevenRevenue = breakevenUnits * sellingPrice;
            
            // Update displays
            document.getElementById('breakeven-units').textContent = Math.ceil(breakevenUnits).toLocaleString('id-ID') + ' unit/bulan';
            document.getElementById('breakeven-revenue').textContent = formatCurrency(breakevenRevenue);
            document.getElementById('unit-margin').textContent = formatCurrency(unitMargin);
            
            // Analysis
            let analysis = '';
            if (unitMargin <= 0) {
                analysis = '❌ Margin negatif! Harga jual harus lebih tinggi dari biaya variabel.';
            } else if (breakevenUnits <= 30) {
                analysis = '🎉 Excellent! BEP rendah, mudah dicapai dalam 1 bulan.';
            } else if (breakevenUnits <= 100) {
                analysis = '👍 Good! BEP wajar, bisa dicapai dengan marketing yang tepat.';
            } else if (breakevenUnits <= 500) {
                analysis = '⚠️ Challenging! Perlu strategi marketing agresif untuk mencapai BEP.';
            } else {
                analysis = '🚨 Very high BEP! Pertimbangkan untuk menurunkan fixed cost atau naikkan margin.';
            }
            
            document.getElementById('breakeven-analysis').textContent = analysis;
        }

        function calculateProfit() {
            const monthlySales = parseFloat(document.getElementById('monthly-sales').value) || 0;
            const sellingPrice = parseFloat(document.getElementById('profit-selling-price').value) || 0;
            const productionCost = parseFloat(document.getElementById('production-cost').value) || 0;
            const operationalCost = parseFloat(document.getElementById('profit-operational-cost').value) || 0;
            const growthRate = parseFloat(document.getElementById('growth-rate').value) || 0;
            
            const monthlyRevenue = monthlySales * sellingPrice;
            const monthlyCost = (monthlySales * productionCost) + operationalCost;
            const monthlyProfit = monthlyRevenue - monthlyCost;
            
            // Calculate yearly projection with growth
            let yearlyProfit = 0;
            let currentSales = monthlySales;
            
            for (let month = 1; month <= 12; month++) {
                const monthRevenue = currentSales * sellingPrice;
                const monthCost = (currentSales * productionCost) + operationalCost;
                yearlyProfit += monthRevenue - monthCost;
                currentSales *= (1 + growthRate / 100);
            }
            
            // Update displays
            document.getElementById('monthly-profit').textContent = formatCurrency(monthlyProfit);
            document.getElementById('monthly-revenue').textContent = formatCurrency(monthlyRevenue);
            document.getElementById('monthly-cost').textContent = formatCurrency(monthlyCost);
            document.getElementById('yearly-profit').textContent = formatCurrency(yearlyProfit);
            
            // ROI Analysis
            let roiAnalysis = '';
            const profitMargin = (monthlyProfit / monthlyRevenue) * 100;
            
            if (monthlyProfit <= 0) {
                roiAnalysis = '❌ Rugi! Revenue tidak cukup untuk cover biaya operasional.';
            } else if (profitMargin < 10) {
                roiAnalysis = '⚠️ Margin tipis (<10%). Perlu optimasi cost atau naikkan harga.';
            } else if (profitMargin < 25) {
                roiAnalysis = '👍 Margin sehat (10-25%). Bisnis sustainable dengan growth potential.';
            } else if (profitMargin < 50) {
                roiAnalysis = '🎉 Margin excellent (25-50%)! Bisnis sangat profitable.';
            } else {
                roiAnalysis = '💎 Margin luar biasa (>50%)! Premium business model.';
            }
            
            document.getElementById('roi-analysis').textContent = roiAnalysis;
        }

        function saveCalculation() {
            const activeCalculator = document.querySelector('.calculator-content:not(.hidden)').id;
            let calculationData = {};
            
            if (activeCalculator === 'startup-calculator') {
                calculationData = {
                    type: 'startup',
                    equipment: document.getElementById('equipment-cost').value,
                    operational: document.getElementById('operational-cost').value,
                    marketing: document.getElementById('marketing-cost').value,
                    emergency: document.getElementById('emergency-months').value,
                    total: document.getElementById('total-startup-cost').textContent,
                    timestamp: new Date().toISOString()
                };
            } else if (activeCalculator === 'breakeven-calculator') {
                calculationData = {
                    type: 'breakeven',
                    sellingPrice: document.getElementById('selling-price').value,
                    variableCost: document.getElementById('variable-cost').value,
                    fixedCost: document.getElementById('fixed-cost').value,
                    breakevenUnits: document.getElementById('breakeven-units').textContent,
                    timestamp: new Date().toISOString()
                };
            } else if (activeCalculator === 'profit-calculator') {
                calculationData = {
                    type: 'profit',
                    monthlySales: document.getElementById('monthly-sales').value,
                    sellingPrice: document.getElementById('profit-selling-price').value,
                    productionCost: document.getElementById('production-cost').value,
                    operationalCost: document.getElementById('profit-operational-cost').value,
                    monthlyProfit: document.getElementById('monthly-profit').textContent,
                    timestamp: new Date().toISOString()
                };
            }
            
            // Save to localStorage
            let savedCalculations = JSON.parse(localStorage.getItem('savedCalculations') || '[]');
            savedCalculations.push(calculationData);
            localStorage.setItem('savedCalculations', JSON.stringify(savedCalculations));
            
            alert('💾 Perhitungan berhasil disimpan! Kamu bisa lihat history perhitungan di profile.');
        }

        function exportToPDF() {
            const activeResults = document.querySelector('.results-content:not(.hidden)');
            const calculationType = activeResults.id.replace('-results', '');
            
            // Create a simple text export (in real app, would generate actual PDF)
            let exportText = `📊 BUSINESS CALCULATOR REPORT\n`;
            exportText += `Generated: ${new Date().toLocaleDateString('id-ID')}\n`;
            exportText += `Type: ${calculationType.toUpperCase()}\n\n`;
            
            if (calculationType === 'startup') {
                exportText += `MODAL STARTUP CALCULATION\n`;
                exportText += `Equipment: ${document.getElementById('equipment-display').textContent}\n`;
                exportText += `Marketing: ${document.getElementById('marketing-display').textContent}\n`;
                exportText += `Operational: ${document.getElementById('operational-display').textContent}\n`;
                exportText += `Emergency Fund: ${document.getElementById('emergency-display').textContent}\n`;
                exportText += `TOTAL REQUIRED: ${document.getElementById('total-startup-cost').textContent}\n`;
            } else if (calculationType === 'breakeven') {
                exportText += `BREAK EVEN ANALYSIS\n`;
                exportText += `Break Even Point: ${document.getElementById('breakeven-units').textContent}\n`;
                exportText += `Revenue Needed: ${document.getElementById('breakeven-revenue').textContent}\n`;
                exportText += `Unit Margin: ${document.getElementById('unit-margin').textContent}\n`;
            } else if (calculationType === 'profit') {
                exportText += `PROFIT PROJECTION\n`;
                exportText += `Monthly Revenue: ${document.getElementById('monthly-revenue').textContent}\n`;
                exportText += `Monthly Cost: ${document.getElementById('monthly-cost').textContent}\n`;
                exportText += `Monthly Profit: ${document.getElementById('monthly-profit').textContent}\n`;
                exportText += `Yearly Projection: ${document.getElementById('yearly-profit').textContent}\n`;
            }
            
            // Create downloadable text file
            const blob = new Blob([exportText], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `business-calculation-${calculationType}-${Date.now()}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            alert('📄 Report berhasil di-export! File akan otomatis ter-download.');
        }

        function shareCalculation() {
            const activeResults = document.querySelector('.results-content:not(.hidden)');
            const calculationType = activeResults.id.replace('-results', '');
            
            let shareText = `🧮 Aku baru aja hitung ${calculationType} bisnis di SharkFin!\n\n`;
            
            if (calculationType === 'startup') {
                shareText += ` Total modal yang dibutuhkan: ${document.getElementById('total-startup-cost').textContent}\n`;
            } else if (calculationType === 'breakeven') {
                shareText += ` Break even point: ${document.getElementById('breakeven-units').textContent}\n`;
            } else if (calculationType === 'profit') {
                shareText += ` Proyeksi profit bulanan: ${document.getElementById('monthly-profit').textContent}\n`;
            }
            
            shareText += `\nCoba juga di SharkFin.id! 🦈`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Business Calculator - SharkFin',
                    text: shareText,
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(shareText).then(() => {
                    alert('📤 Text berhasil di-copy! Paste di social media untuk share hasil perhitunganmu.');
                });
            }
        }

        // Initialize animations and interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Add floating animation delays
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach((el, index) => {
                el.style.animationDelay = (index * 0.5) + 's';
            });

            // Close modal when clicking outside
            document.getElementById('step-modal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeStepModal();
                }
            });

            // Smooth scroll for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98c60ae5261bf8e6',t:'MTc2MDA5ODUyMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();


	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>

    function showRegistrationPopup() {
  const existingModal = document.querySelector('.modal-overlay');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay fade-in';
  modal.innerHTML = `
    <div class="modal-content slide-up text-center">
      <div class="modal-header">
        <h3>🌊 Pendaftaran SharkFin Segera Dibuka!</h3>
        <button class="close-modal" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body">
        <p style="font-size:1.1rem; color:#2c3e50; margin-bottom:25px;">
          Terima kasih sudah tertarik dengan SharkFin! 🦈<br/>
          Semua fitur seru seperti <strong>Journey, Quiz, dan Kalkulator</strong><br/>
          akan bisa kamu akses saat pendaftaran resmi dibuka.
        </p>
        <button class="feature-btn" onclick="closeModal()">Oke, Saya Tunggu! ✨</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}
