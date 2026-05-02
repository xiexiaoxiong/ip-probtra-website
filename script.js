document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.workflow-step').forEach(step => {
        observer.observe(step);
    });

    // Stats counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    function animateCounters() {
        document.querySelectorAll('.stat-number').forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const suffix = counter.dataset.suffix || '';
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * target);

                counter.textContent = current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Parallax effect for glow orbs
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const orbs = document.querySelectorAll('.glow-orb');
        orbs.forEach((orb, i) => {
            const speed = i === 0 ? 0.3 : 0.2;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Feature card tilt effect
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // ===== MODAL =====
    const modal = document.getElementById('consultModal');
    const modalSuccess = document.getElementById('modalSuccess');
    const consultForm = document.getElementById('consultForm');
    const submitBtn = document.getElementById('submitBtn');

    document.querySelectorAll('.consult-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            consultForm.style.display = '';
            modalSuccess.classList.remove('show');
            consultForm.reset();
        }, 300);
    }

    document.querySelector('.modal-close').addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ===== EMAILJS =====
    // 替换为你自己的 EmailJS 配置
    const EMAILJS_PUBLIC_KEY = 'mYAfbz2lSi8h9cYuf';
    const EMAILJS_SERVICE_ID = 'service_lkd1sxa';
    const EMAILJS_TEMPLATE_ID = 'template_akkl3hr';

    emailjs.init(EMAILJS_PUBLIC_KEY);

    consultForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitBtn.textContent = '提交中...';
        submitBtn.disabled = true;

        const formData = {
            user_email: document.getElementById('userEmail').value,
            user_phone: document.getElementById('userPhone').value,
            to_email: 'xiexiaoxiong4@gmail.com'
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
            consultForm.style.display = 'none';
            modalSuccess.classList.add('show');
        } catch (error) {
            console.error('发送失败:', error);
            submitBtn.textContent = '发送失败，重试';
            submitBtn.disabled = false;
        }
    });
});