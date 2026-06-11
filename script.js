// ============================================================
//  পল্লী চিকিৎসা একাডেমি - মূল স্ক্রিপ্ট
//  গুগল শীট সংযোগ সহ সম্পূর্ণ ফাংশনালিটি
// ============================================================

// ==================== গুগল স্ক্রিপ্ট URL (আপনার ডিপ্লয় করা URL দিন) ====================
var SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_kO-bh6F0aCEnv1ObBBvIJzn-munFV7vpTl3fXz9VDzK5fQcPOVyRwxGecUHcfqxHOg/exec";

// ==================== সাইট সেটিংস লোড ====================
let siteSettings = {
    siteNameBn: "পল্লী চিকিৎসা একাডেমি",
    siteNameEn: "Palli Chikitsa Academy",
    logoIcon: "✚",
    logoBgColor: "#059669",
    heroBadge: "🏥 বাংলাদেশের বিশ্বস্ত মেডিকেল ট্রেনিং ইনস্টিটিউট",
    heroTitleLine1: "দক্ষ হোন, মানুষের",
    heroTitleHighlight: "সেবা করুন",
    heroDesc: "আধুনিক চিকিৎসা বিজ্ঞানের প্রশিক্ষণ নিন — গ্রামে-শহরে সুস্বাস্থ্য নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ।",
    contactPhone: "০১৭০০-০০০০০০",
    contactEmail: "info@pallichikitsa.com",
    contactAddress: "ঢাকা, বাংলাদেশ",
    statStudents: "৫০০+",
    statCoursesCount: "৫টি",
    statCertificate: "১০০%",
    primaryColor: "#059669",
    secondaryColor: "#10b981"
};

function loadSiteSettings() {
    const stored = localStorage.getItem('palli_site_settings');
    if (stored && stored !== "undefined") {
        try {
            const parsed = JSON.parse(stored);
            if (parsed && Object.keys(parsed).length > 0) {
                siteSettings = parsed;
            }
        } catch(e) {}
    }
    applySiteSettings();
}

function applySiteSettings() {
    const logoIcon = document.getElementById('logoIcon');
    if (logoIcon) {
        logoIcon.innerHTML = siteSettings.logoIcon;
        logoIcon.style.background = `linear-gradient(135deg, ${siteSettings.primaryColor}, ${siteSettings.secondaryColor})`;
    }
    const siteNameBn = document.getElementById('siteNameBn');
    if (siteNameBn) siteNameBn.innerText = siteSettings.siteNameBn;
    const siteNameEn = document.getElementById('siteNameEn');
    if (siteNameEn) siteNameEn.innerText = siteSettings.siteNameEn;
    const footerLogoIcon = document.getElementById('footerLogoIcon');
    if (footerLogoIcon) footerLogoIcon.innerHTML = siteSettings.logoIcon;
    const footerSiteName = document.getElementById('footerSiteName');
    if (footerSiteName) footerSiteName.innerText = siteSettings.siteNameBn;
    const footerSiteNameEn = document.getElementById('footerSiteNameEn');
    if (footerSiteNameEn) footerSiteNameEn.innerText = siteSettings.siteNameEn;
    document.title = `${siteSettings.siteNameBn} | মেডিকেল ট্রেনিং কোর্স`;
    
    const heroBadge = document.getElementById('heroBadge');
    if (heroBadge) heroBadge.innerHTML = `<i class="fas fa-hospital-user"></i> ${siteSettings.heroBadge}`;
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) heroTitle.innerHTML = `${siteSettings.heroTitleLine1} <span class="highlight">${siteSettings.heroTitleHighlight}</span>`;
    const heroDesc = document.getElementById('heroDesc');
    if (heroDesc) heroDesc.innerText = siteSettings.heroDesc;
    
    const statStudents = document.getElementById('statStudents');
    if (statStudents) statStudents.innerText = siteSettings.statStudents;
    const statCoursesCount = document.getElementById('statCoursesCount');
    if (statCoursesCount) statCoursesCount.innerText = siteSettings.statCoursesCount;
    const statCertificate = document.getElementById('statCertificate');
    if (statCertificate) statCertificate.innerText = siteSettings.statCertificate;
    
    const contactPhone = document.getElementById('contactPhone');
    if (contactPhone) contactPhone.innerText = siteSettings.contactPhone;
    const contactEmail = document.getElementById('contactEmail');
    if (contactEmail) contactEmail.innerText = siteSettings.contactEmail;
    const contactAddress = document.getElementById('contactAddress');
    if (contactAddress) contactAddress.innerText = siteSettings.contactAddress;
    
    document.documentElement.style.setProperty('--primary', siteSettings.primaryColor);
    document.documentElement.style.setProperty('--primary-dark', siteSettings.primaryColor);
    document.documentElement.style.setProperty('--secondary', siteSettings.secondaryColor);
    
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
        heroSection.style.background = `linear-gradient(135deg, #064e3b 0%, #065f46 40%, ${siteSettings.primaryColor} 100%)`;
    }
}

// ==================== কোর্সের ডেটা ====================
let courses = [];
let currentSelectedCourse = null;

const defaultCourses = [
    {
        name: "পল্লী চিকিৎসা কোর্স",
        emoji: "🏥",
        iconBg: "#dcfce7",
        priceRange: "৳২,৫০০ - ৳১২,০০০",
        plans: [
            { duration: "৩ মাস", price: "৳২,৫০০" },
            { duration: "৬ মাস", price: "৳৫,৫০০" },
            { duration: "১ বছর", price: "৳১২,০০০" }
        ],
        level: "সবার জন্য উপযুক্ত",
        seats: "৪০ আসন",
        desc: "গ্রামীণ জনগোষ্ঠীকে প্রাথমিক স্বাস্থ্যসেবা দেওয়ার জন্য এই কোর্সটি বিশেষভাবে তৈরি। সাধারণ রোগ নির্ণয়, প্রাথমিক চিকিৎসা ও স্বাস্থ্য শিক্ষার ব্যাপারে হাতে-কলমে প্রশিক্ষণ দেওয়া হয়।",
        topics: "প্রাথমিক চিকিৎসা, জ্বর-ঠান্ডা, ডায়রিয়া ব্যবস্থাপনা, রক্তচাপ পরিমাপ, স্বাস্থ্য শিক্ষা",
        tagColor: "#166534",
        tagBg: "#dcfce7"
    },
    {
        name: "মানব চিকিৎসা সহকারী",
        emoji: "👨‍⚕️",
        iconBg: "#dbeafe",
        priceRange: "৳৩,৫০০ - ৳১৫,০০০",
        plans: [
            { duration: "৩ মাস", price: "৳৩,৫০০" },
            { duration: "৬ মাস", price: "৳৮,০০০" },
            { duration: "১ বছর", price: "৳১৫,০০০" }
        ],
        level: "বিগিনার থেকে অ্যাডভান্স",
        seats: "৩০ আসন",
        desc: "ডাক্তারের সহকারী হিসেবে কাজ করার জন্য সম্পূর্ণ প্রশিক্ষণ। রোগীর ইতিহাস সংগ্রহ, ওষুধ ব্যবস্থাপনা ও ক্লিনিক্যাল পদ্ধতি শেখানো হয়।",
        topics: "রোগী ব্যবস্থাপনা, ওষুধ পরিচিতি, ইনজেকশন প্রদান, ড্রেসিং, ECG পরিচিতি",
        tagColor: "#1e40af",
        tagBg: "#dbeafe"
    },
    {
        name: "ফার্মেসি ও ওষুধ বিজ্ঞান",
        emoji: "💊",
        iconBg: "#fef9c3",
        priceRange: "৳৩,০০০ - ৳১০,০০০",
        plans: [
            { duration: "৩ মাস", price: "৳৩,০০০" },
            { duration: "৬ মাস", price: "৳৬,৫০০" },
            { duration: "১ বছর", price: "৳১০,০০০" }
        ],
        level: "বিগিনার ফ্রেন্ডলি",
        seats: "৩৫ আসন",
        desc: "ফার্মেসি পরিচালনার সম্পূর্ণ জ্ঞান অর্জন করুন। ওষুধ সংরক্ষণ, বিতরণ, পার্শ্বপ্রতিক্রিয়া ও ফার্মেসি ব্যবসা পরিচালনা শিখুন।",
        topics: "ওষুধ পরিচিতি, ফার্মেসি আইন, স্টক ম্যানেজমেন্ট, প্রেসক্রিপশন পড়া, গ্রাহক সেবা",
        tagColor: "#854d0e",
        tagBg: "#fef9c3"
    },
    {
        name: "ধাত্রীবিদ্যা ও মা-শিশু স্বাস্থ্য",
        emoji: "👶",
        iconBg: "#fce7f3",
        priceRange: "৳২,৮০০ - ৳১১,০০০",
        plans: [
            { duration: "৩ মাস", price: "৳২,৮০০" },
            { duration: "৬ মাস", price: "৳৬,০০০" },
            { duration: "১ বছর", price: "৳১১,০০০" }
        ],
        level: "মহিলাদের জন্য বিশেষ",
        seats: "২৫ আসন",
        desc: "মা ও শিশু স্বাস্থ্যসেবায় বিশেষজ্ঞ হোন। গর্ভকালীন সেবা, প্রসব সহযোগিতা, নবজাতক পরিচর্যা ও পরিবার পরিকল্পনা বিষয়ে প্রশিক্ষণ।",
        topics: "গর্ভকালীন সেবা, প্রসব সহযোগিতা, নবজাতক পরিচর্যা, স্তন্যদান পরামর্শ, টিকা কার্যক্রম",
        tagColor: "#9d174d",
        tagBg: "#fce7f3"
    },
    {
        name: "প্যারামেডিক ও জরুরি সেবা",
        emoji: "🚑",
        iconBg: "#fee2e2",
        priceRange: "৳৪,০০০ - ৳১৮,০০০",
        plans: [
            { duration: "৩ মাস", price: "৳৪,০০০" },
            { duration: "৬ মাস", price: "৳৯,৫০০" },
            { duration: "১ বছর", price: "৳১৮,০০০" }
        ],
        level: "ইন্টারমিডিয়েট",
        seats: "২০ আসন",
        desc: "জরুরি চিকিৎসা সেবায় দক্ষ হয়ে উঠুন। দুর্ঘটনা, হার্ট অ্যাটাক, স্ট্রোক ও জরুরি পরিস্থিতি মোকাবেলায় বিশেষ প্রশিক্ষণ।",
        topics: "CPR ও AED, ট্রমা ম্যানেজমেন্ট, অ্যাম্বুলেন্স সেবা, জরুরি ওষুধ, হাসপাতাল রেফারেল",
        tagColor: "#991b1b",
        tagBg: "#fee2e2"
    }
];

function loadCoursesFromStorage() {
    const stored = localStorage.getItem('palli_courses_live');
    if (stored && stored !== "undefined") {
        try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                courses = parsed;
                renderCourses();
                updateCourseStats();
                return;
            }
        } catch(e) {}
    }
    courses = JSON.parse(JSON.stringify(defaultCourses));
    renderCourses();
    updateCourseStats();
}

function updateCourseStats() {
    const statCoursesCount = document.getElementById('statCoursesCount');
    if (statCoursesCount) {
        statCoursesCount.innerText = courses.length + 'টি';
    }
}

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    courses.forEach((course, index) => {
        const topics = course.topics.split(',');
        const tagsHtml = topics.slice(0, 4).map(t => 
            `<span class="cc-tag" style="background:${course.tagBg};color:${course.tagColor}">${t.trim()}</span>`
        ).join('');

        const card = document.createElement('div');
        card.className = 'course-card';
        card.setAttribute('data-index', index);
        card.innerHTML = `
            <div class="cc-top">
                <div class="cc-icon" style="background:${course.iconBg}">${course.emoji}</div>
                <div class="cc-info">
                    <h3>${course.name}</h3>
                    <div class="cc-level">${course.level}</div>
                </div>
            </div>
            <div class="cc-body">
                <p class="cc-desc">${course.desc.substring(0, 120)}...</p>
                <div class="cc-tags">${tagsHtml}</div>
            </div>
            <div class="cc-footer">
                <div>
                    <div class="cc-price">${course.priceRange}</div>
                    <div class="cc-price-range">মেয়াদ ভেদে মূল্য</div>
                </div>
                <button class="cc-enroll" data-index="${index}">ভর্তি হন <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
        
        const enrollBtn = card.querySelector('.cc-enroll');
        enrollBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(index);
        });
        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });
}

// ==================== মডাল ফাংশন ====================
function openModal(index) {
    currentSelectedCourse = courses[index];
    const c = currentSelectedCourse;
    
    const modalIcon = document.getElementById('modalIcon');
    if (modalIcon) {
        modalIcon.textContent = c.emoji;
        modalIcon.style.background = c.iconBg;
    }
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) modalTitle.textContent = c.name;
    const modalMeta = document.getElementById('modalMeta');
    if (modalMeta) modalMeta.textContent = `${c.level} · ${c.seats}`;
    
    const topics = c.topics.split(',');
    const topicsHtml = topics.map(t => `<span class="md-topic">${t.trim()}</span>`).join('');
    
    let planOptions = '';
    if (c.plans && c.plans.length > 0) {
        planOptions = c.plans.map((plan, idx) => 
            `<option value="${idx}" data-price="${plan.price}">${plan.duration} — ${plan.price}</option>`
        ).join('');
    }
    
    const planSelectorHtml = `
        <div class="plan-selector">
            <label><i class="fas fa-calendar-alt"></i> মেয়াদ নির্বাচন করুন <span class="req">*</span></label>
            <select class="plan-dropdown" id="planDropdown">
                <option value="">— মেয়াদ বেছে নিন —</option>
                ${planOptions}
            </select>
            <div class="price-highlight" id="selectedPriceDisplay">নির্বাচিত মূল্য: ---</div>
        </div>
    `;
    
    const modalDetail = document.getElementById('modalDetail');
    if (modalDetail) {
        modalDetail.innerHTML = `
            <p class="md-desc">${c.desc}</p>
            <div class="md-stats">
                <div class="md-stat"><label>মূল্য পরিসর</label><span>${c.priceRange}</span></div>
                <div class="md-stat"><label>লেভেল</label><span>${c.level}</span></div>
                <div class="md-stat"><label>আসন সংখ্যা</label><span>${c.seats}</span></div>
            </div>
            ${planSelectorHtml}
            <div class="md-topics">${topicsHtml}</div>
        `;
    }
    
    const fName = document.getElementById('fName');
    if (fName) fName.value = '';
    const fPhone = document.getElementById('fPhone');
    if (fPhone) fPhone.value = '';
    const fAddress = document.getElementById('fAddress');
    if (fAddress) fAddress.value = '';
    const fMessage = document.getElementById('fMessage');
    if (fMessage) fMessage.value = '';
    
    const modalFormWrap = document.getElementById('modalFormWrap');
    if (modalFormWrap) modalFormWrap.style.display = 'block';
    const modalSuccess = document.getElementById('modalSuccess');
    if (modalSuccess) modalSuccess.style.display = 'none';
    const btnSubmit = document.getElementById('btnSubmit');
    if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = '<i class="fas fa-paper-plane"></i> আবেদন জমা দিন';
    }
    
    setTimeout(() => {
        const planDropdown = document.getElementById('planDropdown');
        if (planDropdown) {
            planDropdown.onchange = function() {
                const priceDisplay = document.getElementById('selectedPriceDisplay');
                if (this.value !== "" && c.plans && c.plans[parseInt(this.value)]) {
                    const selectedPlan = c.plans[parseInt(this.value)];
                    if (priceDisplay) {
                        priceDisplay.innerHTML = `নির্বাচিত মূল্য: ${selectedPlan.price} (${selectedPlan.duration})`;
                        priceDisplay.style.background = "#d1fae5";
                    }
                } else {
                    if (priceDisplay) {
                        priceDisplay.innerHTML = "নির্বাচিত মূল্য: ---";
                        priceDisplay.style.background = "";
                    }
                }
            };
        }
    }, 50);
    
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    const modalBox = document.querySelector('.modal-box');
    if (modalBox) modalBox.scrollTop = 0;
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== ফর্ম সাবমিট ====================
function submitForm() {
    const name = document.getElementById('fName')?.value.trim();
    const phone = document.getElementById('fPhone')?.value.trim();
    const address = document.getElementById('fAddress')?.value.trim();
    const message = document.getElementById('fMessage')?.value.trim();
    const planDropdown = document.getElementById('planDropdown');
    
    let selectedPlanText = "";
    let selectedPrice = "";
    if (planDropdown && planDropdown.selectedIndex > 0) {
        selectedPlanText = planDropdown.options[planDropdown.selectedIndex]?.text || "";
        const selectedOption = planDropdown.options[planDropdown.selectedIndex];
        selectedPrice = selectedOption?.getAttribute('data-price') || "";
    }
    
    if (!name) { alert('অনুগ্রহ করে আপনার নাম লিখুন'); return; }
    if (!phone || phone.length < 10) { alert('সঠিক ফোন নম্বর দিন (01XXXXXXXXX)'); return; }
    if (!address) { alert('অনুগ্রহ করে আপনার ঠিকানা দিন'); return; }
    if (!selectedPlanText) { alert('অনুগ্রহ করে কোর্সের মেয়াদ নির্বাচন করুন'); return; }
    if (!currentSelectedCourse) { alert('কোর্স তথ্য পাওয়া যায়নি'); return; }
    
    const btn = document.getElementById('btnSubmit');
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> পাঠানো হচ্ছে...';
        btn.disabled = true;
    }
    
    const payload = {
        name: name,
        phone: phone,
        address: address,
        course: currentSelectedCourse.name,
        duration: selectedPlanText,
        price: selectedPrice,
        message: message,
        timestamp: new Date().toLocaleString('bn-BD')
    };
    
    let allApplications = localStorage.getItem('palli_applications');
    allApplications = allApplications ? JSON.parse(allApplications) : [];
    allApplications.push(payload);
    localStorage.setItem('palli_applications', JSON.stringify(allApplications));
    
    if (SCRIPT_URL && SCRIPT_URL !== "" && SCRIPT_URL !== "https://script.google.com/macros/s/AKfycby_kO-bh6F0aCEnv1ObBBvIJzn-munFV7vpTl3fXz9VDzK5fQcPOVyRwxGecUHcfqxHOg/exec") {
        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(e => console.log("Submit error:", e));
    }
    
    const modalFormWrap = document.getElementById('modalFormWrap');
    if (modalFormWrap) modalFormWrap.style.display = 'none';
    const modalSuccess = document.getElementById('modalSuccess');
    if (modalSuccess) modalSuccess.style.display = 'block';
}

function showSuccess() {
    const modalFormWrap = document.getElementById('modalFormWrap');
    if (modalFormWrap) modalFormWrap.style.display = 'none';
    const modalSuccess = document.getElementById('modalSuccess');
    if (modalSuccess) modalSuccess.style.display = 'block';
}

// ==================== ইভেন্ট লিসেনার ====================
document.addEventListener('DOMContentLoaded', function() {
    const btnSubmit = document.getElementById('btnSubmit');
    if (btnSubmit) btnSubmit.addEventListener('click', submitForm);
    
    const modalClose = document.getElementById('modalClose');
    if (modalClose) modalClose.addEventListener('click', closeModal);
    
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
    
    const customCloseBtn = document.getElementById('customCloseBtn');
    if (customCloseBtn) customCloseBtn.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('nav');
        if (nav) {
            if (window.scrollY > 20) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        }
    });
    
    window.addEventListener('storage', function(e) {
        if (e.key === 'palli_courses_live') {
            loadCoursesFromStorage();
        }
        if (e.key === 'palli_site_settings') {
            loadSiteSettings();
        }
    });
    
    loadSiteSettings();
    loadCoursesFromStorage();
});

// ==================== অ্যাডমিন পাসওয়ার্ড সিস্টেম ====================
const ADMIN_PASSWORD = "admin123";
const PASSWORD_STORAGE_KEY = "palli_admin_password_saved";

const passwordModal = document.getElementById('passwordModal');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const passwordSubmitBtn = document.getElementById('passwordSubmitBtn');
const passwordCancelBtn = document.getElementById('passwordCancelBtn');
const adminPasswordInput = document.getElementById('adminPassword');
const savePasswordCheckbox = document.getElementById('savePasswordCheckbox');

function checkSavedPassword() {
    const savedPassword = localStorage.getItem(PASSWORD_STORAGE_KEY);
    if (savedPassword === ADMIN_PASSWORD) {
        window.location.href = "admin.html";
    }
}

function verifyPassword() {
    const enteredPassword = adminPasswordInput.value;
    if (enteredPassword === ADMIN_PASSWORD) {
        if (savePasswordCheckbox && savePasswordCheckbox.checked) {
            localStorage.setItem(PASSWORD_STORAGE_KEY, ADMIN_PASSWORD);
        }
        if (passwordModal) passwordModal.style.display = 'none';
        window.location.href = "admin.html";
    } else {
        alert('❌ ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন।');
        if (adminPasswordInput) adminPasswordInput.value = '';
        if (adminPasswordInput) adminPasswordInput.focus();
    }
}

if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', function() {
        if (passwordModal) {
            if (adminPasswordInput) adminPasswordInput.value = '';
            passwordModal.style.display = 'flex';
            if (adminPasswordInput) adminPasswordInput.focus();
        }
    });
}

if (passwordSubmitBtn) {
    passwordSubmitBtn.addEventListener('click', verifyPassword);
}

if (adminPasswordInput) {
    adminPasswordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') verifyPassword();
    });
}

if (passwordCancelBtn) {
    passwordCancelBtn.addEventListener('click', function() {
        if (passwordModal) passwordModal.style.display = 'none';
    });
}

if (passwordModal) {
    passwordModal.addEventListener('click', function(e) {
        if (e.target === passwordModal) {
            passwordModal.style.display = 'none';
        }
    });
}

// পেজ লোড হলে সেভ করা পাসওয়ার্ড চেক করুন (শুধুমাত্র পাবলিক সাইটে)
if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "") {
    checkSavedPassword();
}
