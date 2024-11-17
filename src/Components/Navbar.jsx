import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../style/Navbar.module.css"; // Import the CSS module

export default function Navbar({ HeaderOpen }) {
	const first = useRef([]);
	const activebox = useRef();
	const smooth = useRef();

	useEffect(() => {
		if (HeaderOpen) {
			gsap.fromTo(
				first.current,
				{ x: 100, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 1.2,
					ease: "elastic.out(1, 0.75)",
					stagger: 0.2,
				},
			);
			gsap.fromTo(
				smooth.current,
				{ x: 100, opacity: 0, duration: 1 },
				{ x: 0, opacity: 1, duration: 1.2 },
			);
		} else {
			gsap.to(first.current, {
				x: 100,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
			});
			gsap.to(smooth.current, {
				x: -100,
				opacity: 0,
				duration: 1,
			});
		}
	}, [HeaderOpen]);

	const nav = [
		{ name: "Home", link: "#home", className: styles.navLinkActive },
		{ name: "About", link: "#about", className: styles.navLink },
		{ name: "Work", link: "#work", className: styles.navLink },
		{
			name: "Contact",
			link: "#contact",
			className: `${styles.navLink} ${styles.mdHidden}`,
		},
		{ name: "Review", link: "#review", className: styles.navLink },
	];

	return (
		<div
			className={`${styles.navbar} ${HeaderOpen ? styles.active : ""}`}
			ref={smooth}
		>
			{nav.map(({ name, className, link }, key) => (
				<a
					href={link}
					className={className}
					key={key}
					ref={(el) => (first.current[key] = el)}
				>
					{name}
				</a>
			))}
			<div className={styles.activeBox} ref={activebox}></div>
		</div>
	);
}
