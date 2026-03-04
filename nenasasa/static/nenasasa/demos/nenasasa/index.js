			// Intersection Observer for scroll animations
			(function () {
				var observerOptions = {
					root: null,
					rootMargin: "0px 0px -50px 0px",
					threshold: 0.1,
				};

				var observer = new IntersectionObserver(function (entries) {
					entries.forEach(function (entry) {
						if (entry.isIntersecting) {
							entry.target.classList.add("visible");
						}
					});
				}, observerOptions);

				document.querySelectorAll(".animate-on-scroll").forEach(function (el) {
					observer.observe(el);
				});
			})();

			// Mobile menu toggle
			// Mobile menu toggle
			(function () {
				var toggle = document.getElementById("navbar-toggle");
				var menu = document.getElementById("mobile-menu");
				var closeBtn = document.getElementById("mobile-menu-close");

				if (!toggle || !menu) return;

				function openMenu() {
					// First remove hidden class to make it visible
					menu.classList.remove("hidden");

					// Use setTimeout to ensure the display change takes effect before adding the open class
					setTimeout(() => {
						menu.classList.add("is-open");
					}, 10);

					// Update ARIA attributes
					menu.setAttribute("aria-hidden", "false");
					toggle.setAttribute("aria-expanded", "true");

					// Update toggle button icon
					var openIcon = toggle.querySelector(".navbar-icon-open");
					var closeIcon = toggle.querySelector(".navbar-icon-close");
					if (openIcon) openIcon.classList.add("hidden");
					if (closeIcon) closeIcon.classList.remove("hidden");

					// Prevent body scrolling
					document.body.classList.add("menu-open");
				}

				function closeMenu() {
					// Remove open class first
					menu.classList.remove("is-open");

					// Update ARIA attributes
					menu.setAttribute("aria-hidden", "true");
					toggle.setAttribute("aria-expanded", "false");

					// Update toggle button icon
					var openIcon = toggle.querySelector(".navbar-icon-open");
					var closeIcon = toggle.querySelector(".navbar-icon-close");
					if (openIcon) openIcon.classList.remove("hidden");
					if (closeIcon) closeIcon.classList.add("hidden");

					// Re-enable body scrolling
					document.body.classList.remove("menu-open");

					// After animation completes, add hidden class back
					setTimeout(() => {
						// Only add hidden if menu isn't open (prevents race conditions)
						if (!menu.classList.contains("is-open")) {
							menu.classList.add("hidden");
						}
					}, 300); // Match this to your transition duration
				}

				// Toggle menu on button click
				toggle.addEventListener("click", function (e) {
					e.preventDefault();
					e.stopPropagation();

					if (menu.classList.contains("is-open")) {
						closeMenu();
					} else {
						openMenu();
					}
				});

				// Close button functionality
				if (closeBtn) {
					closeBtn.addEventListener("click", function (e) {
						e.preventDefault();
						e.stopPropagation();
						closeMenu();
					});
				}

				// Close menu when clicking a link
				menu.querySelectorAll("nav a").forEach(function (link) {
					link.addEventListener("click", function (e) {
						// Don't close if it's a dropdown toggle
						if (!link.classList.contains("mobile-dropdown-toggle")) {
							closeMenu();
						}
					});
				});

				// Close on escape key
				document.addEventListener("keydown", function (e) {
					if (e.key === "Escape" && menu.classList.contains("is-open")) {
						closeMenu();
					}
				});

				// Close when clicking outside the menu panel
				menu.addEventListener("click", function (e) {
					if (e.target === menu) {
						closeMenu();
					}
				});

				// Mobile dropdown toggles
				document.querySelectorAll(".mobile-dropdown-toggle").forEach((button) => {
					button.addEventListener("click", function (e) {
						e.preventDefault();
						e.stopPropagation();

						const content = this.nextElementSibling;
						const isExpanded = this.getAttribute("aria-expanded") === "true";

						this.setAttribute("aria-expanded", !isExpanded);
						content.classList.toggle("hidden");

						const icon = this.querySelector("svg");
						if (icon) {
							icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
						}
					});
				});
			})();

			// Navbar hide/show on scroll
			(function () {
				const navbar = document.querySelector(".navbar");
				if (!navbar) return;

				let lastScrollTop = 0;
				let scrollThreshold = 50;
				let isNavbarVisible = true;

				function handleNavbarBackground() {
					if (window.scrollY > 50) {
						navbar.classList.add("scrolled");
					} else {
						navbar.classList.remove("scrolled");
					}
				}

				function handleNavbarVisibility() {
					const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

					if (scrollTop <= 50) {
						navbar.classList.remove("navbar-hidden");
						navbar.classList.add("navbar-visible");
						isNavbarVisible = true;
						lastScrollTop = scrollTop;
						return;
					}

					if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
						if (isNavbarVisible) {
							navbar.classList.add("navbar-hidden");
							navbar.classList.remove("navbar-visible");
							isNavbarVisible = false;
						}
					} else if (scrollTop < lastScrollTop) {
						if (!isNavbarVisible) {
							navbar.classList.remove("navbar-hidden");
							navbar.classList.add("navbar-visible");
							isNavbarVisible = true;
						}
					}

					lastScrollTop = scrollTop;
				}

				function throttle(func, limit) {
					let inThrottle;
					return function () {
						const args = arguments;
						const context = this;
						if (!inThrottle) {
							func.apply(context, args);
							inThrottle = true;
							setTimeout(() => (inThrottle = false), limit);
						}
					};
				}

				handleNavbarBackground();

				window.addEventListener(
					"scroll",
					throttle(function () {
						handleNavbarBackground();
						handleNavbarVisibility();
					}, 100),
				);
			})();
