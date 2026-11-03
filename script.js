(function () {
  var products = [
    [
      "seeds",
      "Imported Crop Seeds",
      "High-germination vegetable and field crop seeds sourced from global leaders, for even stands and predictable harvests.",
      "M12 21V9M12 9c-4 0-6-3-6-6 4 0 6 3 6 6zm0 4c4 0 6-3 6-6-4 0-6 3-6 6z",
    ],
    [
      "alfalfa",
      "Premium Alfalfa Seeds (برسيم)",
      "High-protein forage seeds optimized for Saudi climate and livestock needs, for more cuttings per season.",
      "M12 21V6M12 6c0-2 1-3 2-4 1 1.500 1 3-2 4zm0 5c-3 0-5-2-5-4 3 0 5 1 5 4zm0 5c3 0 5-2 5-4-3 0-5 1-5 4z",
    ],
    [
      "fertilizers",
      "Advanced Fertilizers & Nutrients",
      "Soil-enriching formulas designed for maximum yield in arid conditions, matched to your crop.",
      "M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z",
    ],
    [
      "tools",
      "Professional Farm Tools & Hardware",
      "Durable irrigation and hand tools built for heavy agricultural use, season after season.",
      "M14 6l4-4 4 4-4 4M14 10L4 20l-2-2 10-10",
    ],
  ];
  var g = document.getElementById("products");
  products.forEach(function (p) {
    var a = document.createElement("article");
    a.id = p[0];
    a.className = "reveal lift card flex flex-col p-6";
    a.innerHTML =
      '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' +
      p[3] +
      '"/></svg>' +
      '<h3 class="mt-4 text-lg font-semibold">' +
      p[1] +
      '</h3><p class="mt-2 flex-1 text-sm leading-relaxed text-muted">' +
      p[2] +
      "</p>" +
      '<a href="#quote" data-opt="' +
      (products.indexOf(p) + 1) +
      '" class="btn btn-ghost mt-6 !py-2 text-sm">Inquire / Order</a>';
    g.appendChild(a);
  });

  var faqs = [
    [
      "Are your alfalfa and crop seeds certified for Saudi growing conditions?",
      "Yes. We import certified seed lots and select varieties suited to Saudi heat, soil and irrigation. Ask us for the variety and germination details for your crop.",
    ],
    [
      "Do you offer delivery outside Riyadh or only local pickup?",
      "Both. You can collect from our Salam Street warehouse, or we can dispatch to farms across the Kingdom. Share your location in the quote form for a delivery price.",
    ],
    [
      "How can I place a bulk order or request specific imported seed varieties?",
      "Send a quote request or call +966 11 411 2913 with the variety, quantity and delivery date. We will confirm availability and pricing.",
    ],
    [
      "What are your working hours?",
      "We are open Saturday to Thursday, 08:00 to 20:00.",
    ],
  ];
  var f = document.getElementById("faq");
  faqs.forEach(function (q) {
    var d = document.createElement("details");
    d.className = "reveal py-5";
    d.innerHTML =
      '<summary class="flex items-center justify-between gap-4 font-display text-lg font-medium"><span>' +
      q[0] +
      '</span><svg class="chev shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary><p class="mt-3 text-muted">' +
      q[1] +
      "</p>";
    f.appendChild(d);
  });

  var hdr = document.getElementById("hdr");
  function onScroll() {
    hdr.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (en) {
        en.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach(function (e, i) {
      e.style.transitionDelay = (i % 4) * 60 + "ms";
      io.observe(e);
    });
  } else
    els.forEach(function (e) {
      e.classList.add("in");
    });

  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-opt]");
    if (a) {
      document.getElementById("interest").selectedIndex =
        +a.getAttribute("data-opt");
    }
  });

  var dirBtn = document.getElementById("dir"),
    root = document.documentElement;
  dirBtn.addEventListener("click", function () {
    setLang(root.lang === "ar" ? "en" : "ar");
  });

  var L = "\u200e";
  var AR = {
    Seeds: "البذور",
    Alfalfa: "البرسيم",
    Fertilizers: "الأسمدة",
    Tools: "الأدوات",
    "About Us": "من نحن",
    Reviews: "التقييمات",
    "Request Quote / Order": "اطلب عرض سعر / طلبية",
    "Switch language": "تغيير اللغة",
    "Al-Hinta": "محلات الحنطة",
    "Agricultural Services": "للخدمات الزراعية",
    "Riyadh's Trusted Agricultural Partner • 4.0★ Rated (221+ Reviews)":
      "شريك الرياض الزراعي الموثوق • تقييم 4.0★ (أكثر من 221 تقييمًا)",
    "Certified Imported Seeds & High-Yield Fertilizers for Saudi Farms.":
      "بذور مستوردة معتمدة وأسمدة عالية الإنتاجية للمزارع السعودية.",
    "From our home on Salam Street, Al Dubiyah to farms across the Kingdom—supplying premium alfalfa seeds, crop seeds, and professional farming tools with proven reliability.":
      "من مقرنا في شارع السلام بحي الدوبية إلى المزارع في أنحاء المملكة، نوفّر بذور البرسيم الفاخرة وبذور المحاصيل وأدوات الزراعة الاحترافية بموثوقية مثبتة.",
    "Explore Seed Catalog": "استعرض كتالوج البذور",
    "Call +966 11 411 2913": "اتصل " + L + "+966 11 411 2913",
    "Imported seed lots, tested before they reach your field.":
      "دفعات بذور مستوردة، يتم فحصها قبل وصولها إلى حقلك.",
    "Illustration of imported seed sacks with green sprouts growing from open furrows":
      "رسم لأكياس بذور مستوردة مع شتلات خضراء تنمو في الأخاديد",
    "Salam Street warehouse (placeholder image)":
      "مستودع شارع السلام (صورة مؤقتة)",
    "Green crop rows in a Saudi field (placeholder image)":
      "صفوف محاصيل خضراء في حقل سعودي (صورة مؤقتة)",
    "Alfalfa hay bales after harvest (placeholder image)":
      "بالات برسيم بعد الحصاد (صورة مؤقتة)",
    "Verified Reviews": "تقييمات موثقة",
    "Riyadh market expertise": "خبرة في سوق الرياض",
    Decades: "عقود",
    "Certified germination rates": "نسب إنبات معتمدة",
    "Salam St. warehouse": "مستودع شارع السلام",
    "Pickup & delivery": "استلام وتوصيل",
    "Built for Modern Saudi Agriculture.": "مصمم للزراعة السعودية الحديثة.",
    "The usual supply headaches": "متاعب التوريد المعتادة",
    "Inconsistent seed batches that germinate unevenly.":
      "دفعات بذور غير متجانسة تنبت بشكل متفاوت.",
    "Delayed rural transport that misses planting windows.":
      "تأخر النقل إلى المناطق الريفية وفوات مواعيد الزراعة.",
    "Unclear pricing that changes between calls.":
      "أسعار غير واضحة تتغير من اتصال إلى آخر.",
    "The Al-Hinta standard": "معيار الحنطة",
    "Rigorously tested imported seeds, batch by batch.":
      "بذور مستوردة مفحوصة بدقة، دفعة بعد دفعة.",
    "Transparent pricing, confirmed in your quote.":
      "أسعار شفافة مؤكدة في عرض السعر.",
    "Fast Riyadh dispatch or same-day warehouse pickup.":
      "شحن سريع داخل الرياض أو استلام من المستودع في اليوم نفسه.",
    "Everything your field needs, from one counter.":
      "كل ما يحتاجه حقلك من مكان واحد.",
    "Imported Crop Seeds": "بذور محاصيل مستوردة",
    "Premium Alfalfa Seeds (برسيم)": "بذور برسيم فاخرة",
    "Advanced Fertilizers & Nutrients": "أسمدة ومغذيات متطورة",
    "Professional Farm Tools & Hardware": "أدوات ومعدات زراعية احترافية",
    "High-germination vegetable and field crop seeds sourced from global leaders, for even stands and predictable harvests.":
      "بذور خضروات ومحاصيل حقلية عالية الإنبات من كبرى الشركات العالمية، لمزروعات متجانسة وحصاد يمكن توقعه.",
    "High-protein forage seeds optimized for Saudi climate and livestock needs, for more cuttings per season.":
      "بذور علف عالية البروتين ملائمة للمناخ السعودي واحتياجات المواشي، لعدد حشّات أكبر في الموسم.",
    "Soil-enriching formulas designed for maximum yield in arid conditions, matched to your crop.":
      "تركيبات تغذي التربة لأعلى إنتاجية في الظروف الجافة، مناسبة لمحصولك.",
    "Durable irrigation and hand tools built for heavy agricultural use, season after season.":
      "أدوات ري ويد متينة للاستخدام الزراعي الشاق، موسمًا بعد موسم.",
    "Inquire / Order": "استفسر / اطلب",
    "From question to delivery in three steps.":
      "من الاستفسار إلى التوصيل في ثلاث خطوات.",
    "Browse or consult": "تصفّح أو استشر",
    "Browse or consult our catalog for your specific crop or land size.":
      "تصفّح كتالوجنا أو استشرنا حسب محصولك ومساحة أرضك.",
    "Get your price": "احصل على سعرك",
    "Request a quote or call our Riyadh office directly for instant pricing.":
      "اطلب عرض سعر أو اتصل بمكتبنا في الرياض للحصول على السعر فورًا.",
    "Receive your order": "استلم طلبك",
    "Fast dispatch from Al Dubiyah or convenient warehouse pickup.":
      "شحن سريع من الدوبية أو استلام مريح من المستودع.",
    "Trusted by farmers and contractors.": "موثوق لدى المزارعين والمقاولين.",
    "Sample testimonials: replace with your verified customer reviews before launch.":
      "آراء تجريبية: استبدلها بتقييمات عملائك الموثقة قبل الإطلاق.",
    "“The alfalfa seed came up even across all twelve hectares. We reorder every season.”":
      "“نبت البرسيم بشكل متجانس في الهكتارات الاثني عشر كلها. نعيد الطلب كل موسم.”",
    "“Straight answers on Salam Street and fair prices. They had my irrigation fittings ready when I arrived.”":
      "“إجابات صريحة وأسعار عادلة في شارع السلام. كانت وصلات الري جاهزة عند وصولي.”",
    "“Friendly team who actually ask about your soil before recommending a fertilizer.”":
      "“فريق ودود يسأل عن تربتك فعلًا قبل أن يوصي بسماد.”",
    "Abdullah R., commercial farmer, Al-Kharj":
      "عبدالله ر.، مزارع تجاري، الخرج",
    "Faisal M., landscaping contractor": "فيصل م.، مقاول تنسيق حدائق",
    "Khalid S., date and vegetable grower": "خالد س.، مزارع تمور وخضروات",
    "Questions, answered.": "أسئلتكم وإجاباتنا.",
    "Are your alfalfa and crop seeds certified for Saudi growing conditions?":
      "هل بذور البرسيم والمحاصيل لديكم معتمدة للظروف الزراعية في السعودية؟",
    "Yes. We import certified seed lots and select varieties suited to Saudi heat, soil and irrigation. Ask us for the variety and germination details for your crop.":
      "نعم. نستورد دفعات بذور معتمدة ونختار أصنافًا تناسب حرارة السعودية وتربتها وأنظمة الري فيها. اسألنا عن الصنف وتفاصيل الإنبات لمحصولك.",
    "Do you offer delivery outside Riyadh or only local pickup?":
      "هل توفرون التوصيل خارج الرياض أم الاستلام المحلي فقط؟",
    "Both. You can collect from our Salam Street warehouse, or we can dispatch to farms across the Kingdom. Share your location in the quote form for a delivery price.":
      "كلاهما. يمكنك الاستلام من مستودعنا في شارع السلام، أو نشحن إلى المزارع في أنحاء المملكة. أرسل موقعك في نموذج الطلب لنحدد سعر التوصيل.",
    "How can I place a bulk order or request specific imported seed varieties?":
      "كيف أطلب كمية كبيرة أو أصنافًا محددة من البذور المستوردة؟",
    "Send a quote request or call +966 11 411 2913 with the variety, quantity and delivery date. We will confirm availability and pricing.":
      "أرسل طلب عرض سعر أو اتصل على " +
      L +
      "+966 11 411 2913 مع ذكر الصنف والكمية وموعد التسليم، وسنؤكد التوفر والسعر.",
    "What are your working hours?": "ما هي ساعات العمل؟",
    "We are open Saturday to Thursday, 08:00 to 20:00.":
      "نعمل من السبت إلى الخميس، من 08:00 إلى 20:00.",
    "Ready to Maximize Your Harvest?": "هل أنت مستعد لزيادة محصولك؟",
    "Speak directly with our agricultural specialists in Riyadh today.":
      "تحدث اليوم مباشرة مع مختصينا الزراعيين في الرياض.",
    Name: "الاسم",
    "Phone number": "رقم الجوال",
    "Product interest": "المنتج المطلوب",
    Message: "الرسالة",
    "Choose a product": "اختر منتجًا",
    "Premium Alfalfa Seeds": "بذور برسيم فاخرة",
    "Fertilizers & Nutrients": "أسمدة ومغذيات",
    "Farm Tools & Hardware": "أدوات ومعدات زراعية",
    "Bulk order": "طلب بكميات كبيرة",
    "Crop, land size, quantity…": "المحصول، مساحة الأرض، الكمية…",
    "Get My Quote Now": "احصل على عرض السعر الآن",
    "Thank you,": "شكرًا لك،",
    "We received your request and will call you within working hours.":
      "استلمنا طلبك وسنتصل بك خلال ساعات العمل.",
    "Enter your name.": "أدخل اسمك.",
    "Enter a valid phone number, for example +966 5X XXX XXXX.":
      "أدخل رقم جوال صحيحًا، مثل " + L + "+966 5X XXX XXXX.",
    "Choose a product.": "اختر منتجًا.",
    "Al-Hinta Agricultural Services": "محلات الحنطة للخدمات الزراعية",
    "Salam St, Al Dubiyah, Riyadh 12651, Saudi Arabia":
      "شارع السلام، الدوبية، الرياض 12651، المملكة العربية السعودية",
    "Working hours": "ساعات العمل",
    "Saturday to Thursday, 08:00 – 20:00": "من السبت إلى الخميس، 08:00 – 20:00",
    "Al-Hinta Agricultural Services.": "محلات الحنطة للخدمات الزراعية.",
    "All rights reserved.": "جميع الحقوق محفوظة.",
  };
  function setLang(l) {
    root.lang = l;
    root.dir = l === "ar" ? "rtl" : "ltr";
    dirBtn.textContent = l === "ar" ? "English" : "العربية";
    document.title =
      l === "ar"
        ? "محلات الحنطة للخدمات الزراعية | Al-Hinta"
        : "Al-Hinta Agricultural Services | محلات الحنطة";
    document.querySelectorAll("body *").forEach(function (el) {
      ["alt", "placeholder", "aria-label"].forEach(function (a) {
        var v = el.getAttribute(a);
        if (v === null) return;
        var k = "data-en-" + a;
        if (!el.hasAttribute(k)) el.setAttribute(k, v);
        var en = el.getAttribute(k);
        el.setAttribute(a, l === "ar" && AR[en] ? AR[en] : en);
      });
      if (el.children.length || el.tagName === "SCRIPT" || el.closest("svg"))
        return;
      var en = el.getAttribute("data-en");
      if (!en) {
        en = el.textContent.trim().replace(/\s+/g, " ");
        if (!AR[en]) return;
        el.setAttribute("data-en", en);
      }
      el.textContent = l === "ar" ? AR[en] : en;
    });
  }
  var form = document.getElementById("lead");
  function setErr(el, msg) {
    var p = el.parentNode.querySelector(".err");
    el.setAttribute("aria-invalid", msg ? "true" : "false");
    if (p) {
      p.textContent = (root.lang === "ar" && AR[msg]) || msg;
      p.classList.toggle("hidden", !msg);
    }
    return !msg;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = form.name,
      p = form.phone,
      s = form.interest;
    var ok = [
      setErr(n, n.value.trim().length < 2 ? "Enter your name." : ""),
      setErr(
        p,
        /^\+?[0-9\s-]{9,15}$/.test(p.value.trim())
          ? ""
          : "Enter a valid phone number, for example +966 5X XXX XXXX.",
      ),
      setErr(s, s.value ? "" : "Choose a product."),
    ];
    if (ok.indexOf(false) > -1) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    document.getElementById("okn").textContent = n.value.trim();
    form.classList.add("hidden");
    var o = document.getElementById("ok");
    o.classList.remove("hidden");
    o.setAttribute("tabindex", "-1");
    o.focus();
  });
  document.getElementById("yr").textContent = new Date().getFullYear();
  setLang("ar");
})();
