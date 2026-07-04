// 自然卷的个人网站 - 交互脚本

document.addEventListener("DOMContentLoaded", function () {
    // 控制台温柔上线提示
    console.log("💗 自然卷的个人网站已温柔上线 ~");

    // 移动端汉堡菜单切换
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // 点击导航链接后自动收起菜单
        const navLinks = navMenu.querySelectorAll(".nav-link");
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // 页面加载时内容淡入动画
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    fadeElements.forEach(function (element) {
        observer.observe(element);
    });

    // 为没有 fade-in 类的主要元素也添加淡入效果
    const mainElements = document.querySelectorAll(
        ".hero, .card, .value-card, .timeline-item"
    );
    mainElements.forEach(function (element, index) {
        if (!element.classList.contains("fade-in")) {
            element.classList.add("fade-in");
            element.style.transitionDelay = (index * 0.08) + "s";
            observer.observe(element);
        }
    });
});
