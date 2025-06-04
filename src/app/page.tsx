"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import Image from "next/image";
import Footer from "./components/commons/footer";

export default function Home() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let scene: THREE.Scene;
		let camera: THREE.PerspectiveCamera;
		let renderer: THREE.WebGLRenderer;
		const stars: THREE.Group[] = [];
		const canvas = canvasRef.current;
		if (!canvas) return;

		let mouseX = 0;
		let mouseY = 0;
		const onMouseMove = (event: MouseEvent) => {
			mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		};
		window.addEventListener("mousemove", onMouseMove);

		function init() {
			camera = new THREE.PerspectiveCamera(
				45,
				window.innerWidth / window.innerHeight,
				1,
				1000
			);
			camera.position.z = 5;
			scene = new THREE.Scene();
			renderer = new THREE.WebGLRenderer({ canvas: canvas!, alpha: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			window.addEventListener("resize", onWindowResize, false);
		}

		function addSphere() {
			for (let z = 0; z < 1000; z += 1) {
				const colorValue = 0xffffff;
				const geometry = new THREE.SphereGeometry(0.5, 32, 32);
				const material = new THREE.MeshBasicMaterial({
					color: colorValue,
					alphaTest: 0.5,
					transparent: true,
					opacity: 0.8,
				});
				const sphere = new THREE.Mesh(geometry, material);
				// compute random x, y and group spheres
				const posX = Math.random() * 1000 - 500;
				const posY = Math.random() * 1000 - 500;
				const starGroup = new THREE.Group();
				starGroup.position.set(posX, posY, z);
				const scale = Math.random() * 0.5 + 1.5; // random scale between 1 and 1.5
				starGroup.scale.set(scale, scale, scale);

				// set inner sphere at group center
				sphere.position.set(0, 0, 0);
				starGroup.add(sphere);
				scene.add(starGroup);
				stars.push(starGroup);
			}
		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}

		function animateStars() {
			for (let i = 0; i < stars.length; i++) {
				const star = stars[i];
				star.position.z += i / 200 + 1;
				if (star.position.z > 1000) star.position.z -= 2000;
			}
		}

		function renderScene() {
			requestAnimationFrame(renderScene);
			// tilt the scene toward mouse direction
			scene.rotation.x = mouseY * 0.05;
			scene.rotation.y = mouseX * -0.05;
			animateStars();
			renderer.render(scene, camera);
		}

		init();
		addSphere();
		renderScene();

		return () => {
			window.removeEventListener("resize", onWindowResize);
			window.removeEventListener("mousemove", onMouseMove);
			renderer.dispose();
		};
	}, []);

	return (
		<div className="fixed inset-0 bg-primary overflow-hidden">
			<canvas ref={canvasRef} className="fixed inset-0" />
			<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
				<Image
					src="/logos/logo-aitech-bianco.png"
					alt="AiTech Logo"
					width={150}
					height={150}
				/>
				<p className="text-lg mt-4 text-center">
					{"Soluzioni software nate dall'esigenza della sicurezza."}
				</p>
			</div>
			<div></div>
			<div className="absolute bottom-0 left-0 w-full z-10">
				<Footer />
			</div>
		</div>
	);
}
