// ============================================================
//  ⚠️ এখানে আপনার Google Apps Script URL বসান
// ============================================================
var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwBDfSFo_Mw-EzrfzcN56ZAVK2wIaSM7JKncdGSOXJ7pKW2yrTOiEW_KtS1QuYyRePM4A/exec";

// ============================================================
//  কোর্সের ডেটা (প্রাইস রেঞ্জ সহ)
// ============================================================
var courses = [
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
        topics: "প্রাথমিক চিকিৎসা,জ্বর-ঠান্ডা,ডায়রিয়া ব্যবস্থাপনা,রক্তচাপ পরিমাপ,স্বাস্থ্য শিক্ষা",
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
        topics: "রোগী ব্যবস্থাপনা,ওষুধ পরিচিতি,ইনজেকশন প্রদান,ড্রেসিং,ECG পরিচিতি",
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
        topics: "ওষুধ পরিচিতি,ফার্মেসি আইন,স্টক ম্যানেজমেন্ট,প্রেসক্রিপশন পড়া,গ্রাহক সেবা",
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
        topics: "গর্ভকালীন সেবা,প্রসব সহযোগিতা,নবজাতক পরিচর্যা,স্তন্যদান পরামর্শ,টিকা কার্যক্রম",
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
        topics: "CPR ও AED,ট্রমা ম্যানেজমেন্ট,অ্যাম্বুলেন্স সেবা,জরুরি ওষুধ,হাসপাতাল রেফারেল",
        tagColor: "#991b1b",
        tagBg: "#fee2e2"
    }
];

// ============================================================
//  কোর্স কার্ড রেন্ডার
// ============================================================
var grid = document.getElementById('coursesGrid');
var courseSelect = document.getElementById('fCourse');

courses.forEach(function(c, i) {
    var topics = c.topics.split(',');
    var tagsHtml = topics.slice(0, 4).map(function(t) {
        return '<span class="cc-tag" style="background:' + c.tagBg + ';color:' + c.tagColor + '">' + t.trim() + '</span>';
    }).join('');

    var card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-index', i);
    card.innerHTML =
        '<div class="cc-top">' +
        '<div class="cc-icon" style="background:' + c.iconBg + '">' + c.emoji + '</div>' +
        '<div class="cc-info"><h3>' + c.name + '</h3><div class="cc-level">' + c.level + '</div></div>' +
        '</div>' +
        '<div class="cc-body">' +
        '<p class="cc-desc">' + c.desc.substring(0, 120) + '...</p>' +
        '<div class="cc-tags">' + tagsHtml + '</div>' +
        '</div>' +
        '<div class="cc-footer">' +
        '<div class="cc-price-wrap"><div class="cc-price">' + c.priceRange + '</div><div class="cc-price-range">মেয়াদ ভেদে মূল্য</div></div>' +
        '<button class="cc-enroll" data-index="' + i + '">ভর্তি হন</button>' +
        '</div>';

    card.querySelector('.cc-enroll').addEventListener('click', function(e) {
        e.stopPropagation();
        openModal(i);
    });
    card.addEventListener('click', function() {
        openModal(i);
    });
    grid.appendChild(card);

    var opt = document.createElement('option');
    opt.value = c.name;
    opt.textContent = c.name;
    courseSelect.appendChild(opt);
});

// ============================================================
//  MODAL (with plan dropdown & price update)
// ============================================================
var currentCourseIndex = null;
var currentPlans = [];

function openModal(i) {
    currentCourseIndex = i;
    var c = courses[i];
    currentPlans = c.plans;

    document.getElementById('modalIcon').textContent = c.emoji;
    document.getElementById('modalIcon').style.background = c.iconBg;
    document.getElementById('modalTitle').textContent = c.name;
    document.getElementById('modalMeta').textContent = c.level + ' · ' + c.seats;

    var topics = c.topics.split(',');
    var topicsHtml = topics.map(function(t) {
        return '<span class="md-topic">' + t.trim() + '</span>';
    }).join('');

    var planOptions = c.plans.map(function(plan, idx) {
        return '<option value="' + idx + '" data-price="' + plan.price + '">' + plan.duration + ' — ' + plan.price + '</option>';
    }).join('');

    var planSelectorHtml = '<div class="plan-selector" id="planSelector"><label>📅 মেয়াদ নির্বাচন করুন <span class="req">*</span></label>' +
        '<select class="plan-dropdown" id="planDropdown">' +
        '<option value="">— মেয়াদ বেছে নিন —</option>' +
        planOptions +
        '</select><div class="price-highlight" id="selectedPriceDisplay">নির্বাচিত মূল্য: ---</div></div>';

    document.getElementById('modalDetail').innerHTML =
        '<p class="md-desc">' + c.desc + '</p>' +
        '<div class="md-stats">' +
        '<div class="md-stat"><label>মূল্য পরিসর</label><span>' + c.priceRange + '</span></div>' +
        '<div class="md-stat"><label>লেভেল</label><span>' + c.level + '</span></div>' +
        '<div class="md-stat"><label>আসন সংখ্যা</label><span>' + c.seats + '</span></div>' +
        '</div>' +
        planSelectorHtml +
        '<div class="md-topics">' + topicsHtml + '</div>';

    document.getElementById('fCourse').value = c.name;
    document.getElementById('modalFormWrap').style.display = 'block';
    document.getElementById('modalSuccess').style.display = 'none';
    document.getElementById('btnSubmit').textContent = 'আবেদন জমা দিন →';
    document.getElementById('btnSubmit').disabled = false;

    document.getElementById('fName').value = '';
    document.getElementById('fPhone').value = '';
    document.getElementById('fEmail').value = '';
    document.getElementById('fArea').value = '';
    document.getElementById('fMsg').value = '';

    var planDropdown = document.getElementById('planDropdown');
    if (planDropdown) {
        var newPlanDropdown = planDropdown.cloneNode(true);
        planDropdown.parentNode.replaceChild(newPlanDropdown, planDropdown);
        newPlanDropdown.addEventListener('change', function(e) {
            var selectedIdx = this.value;
            var priceDisplay = document.getElementById('selectedPriceDisplay');
            if (selectedIdx !== "" && currentPlans[selectedIdx]) {
                priceDisplay.textContent = "নির্বাচিত মূল্য: " + currentPlans[selectedIdx].price + " (" + currentPlans[selectedIdx].duration + ")";
                priceDisplay.style.background = "#d1fae5";
                priceDisplay.style.color = "#065f46";
                priceDisplay.classList.add('highlight-plan');
                setTimeout(function() {
                    priceDisplay.classList.remove('highlight-plan');
                }, 800);
            } else {
                priceDisplay.textContent = "নির্বাচিত মূল্য: ---";
                priceDisplay.style.background = "";
            }
        });
    }

    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.querySelector('.modal-box').scrollTop = 0;
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// ============================================================
//  FORM SUBMIT with plan validation
// ============================================================
document.getElementById('btnSubmit').addEventListener('click', function() {
    var name = document.getElementById('fName').value.trim();
    var phone = document.getElementById('fPhone').value.trim();
    var course = document.getElementById('fCourse').value;

    var planDropdown = document.getElementById('planDropdown');
    var selectedPlanValue = planDropdown ? planDropdown.value : "";
    var selectedPlanText = "";
    if (planDropdown && planDropdown.selectedIndex >= 0) {
        selectedPlanText = planDropdown.options[planDropdown.selectedIndex]?.text || "";
    }

    if (!name) {
        alert('অনুগ্রহ করে আপনার নাম লিখুন۔');
        document.getElementById('fName').focus();
        return;
    }
    if (!phone || phone.length < 11) {
        alert('সঠিক ফোন নম্বর দিন।');
        document.getElementById('fPhone').focus();
        return;
    }
    if (!course) {
        alert('একটি কোর্স বেছে নিন।');
        return;
    }
    if (!selectedPlanValue || selectedPlanValue === "") {
        alert('⚠️ অনুগ্রহ করে কোর্সের মেয়াদ নির্বাচন করুন (৩ মাস / ৬ মাস / ১ বছর)');
        if (planDropdown) planDropdown.focus();
        var selectorDiv = document.getElementById('planSelector');
        if (selectorDiv) selectorDiv.classList.add('highlight-plan');
        setTimeout(function() {
            if (selectorDiv) selectorDiv.classList.remove('highlight-plan');
        }, 1000);
        return;
    }

    var btn = this;
    btn.textContent = '⏳ পাঠানো হচ্ছে...';
    btn.disabled = true;

    var payload = {
        name: name,
        phone: phone,
        email: document.getElementById('fEmail').value.trim(),
        course: course,
        duration_plan: selectedPlanText,
        area: document.getElementById('fArea').value.trim(),
        message: document.getElementById('fMsg').value.trim()
    };

    if (SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE" || !SCRIPT_URL) {
        setTimeout(function() {
            showSuccess();
        }, 800);
        return;
    }

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(function() {
        showSuccess();
    }).catch(function() {
        showSuccess();
    });
});

function showSuccess() {
    document.getElementById('modalFormWrap').style.display = 'none';
    document.getElementById('modalSuccess').style.display = 'block';
}

document.getElementById('customCloseBtn').addEventListener('click', function() {
    var externalLink = "#";
    if (externalLink !== "#") {
        window.location.href = externalLink;
    } else {
        closeModal();
    }
});

window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});