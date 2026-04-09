import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class PlanetB {
    constructor(scene, orbitRadius, orbitSpeed) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;

        // Planet group
        this.group = new THREE.Group();

        // -----------------------------
        // STEP 1: Create planet
        // -----------------------------
        const planetRadius = 1.8; // between 1.5-2
        const geometry = new THREE.SphereGeometry(planetRadius, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            color: 0x33ccff,       // Customize color
            roughness: 0.5,
            metalness: 0.2
        });
        this.planetMesh = new THREE.Mesh(geometry, material);
        this.planetMesh.castShadow = true;
        this.planetMesh.receiveShadow = true;
        this.group.add(this.planetMesh);

        // -----------------------------
        // STEP 2: Add moons
        // -----------------------------
        this.moons = [];
        const moonCount = Math.floor(Math.random() * 3) + 1; // 1-3 moons
        for (let i = 0; i < moonCount; i++) {
            const moonGeo = new THREE.SphereGeometry(0.3, 32, 32);
            const moonMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
            const moon = new THREE.Mesh(moonGeo, moonMat);
            moon.castShadow = true;
            moon.receiveShadow = true;

            // Random orbit distance
            moon.userData.orbitRadius = planetRadius + 0.8 + Math.random() * 1.2;
            moon.userData.angle = Math.random() * Math.PI * 2;
            moon.userData.speed = 0.01 + Math.random() * 0.02;

            moon.position.set(moon.userData.orbitRadius, 0, 0);
            this.group.add(moon);
            this.moons.push(moon);
        }

        // -----------------------------
        // STEP 3: Load models
        // -----------------------------
        this.models = [];
        const loader = new GLTFLoader();
        const modelFiles = ['alien.glb', 'crystal.glb']; // put in models/PlanetB/
        modelFiles.forEach((file, idx) => {
            loader.load(`models/PlanetB/${file}`, (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.2, 0.2, 0.2);
                // Place randomly on planet surface
                const phi = Math.random() * Math.PI * 2;
                const theta = Math.random() * Math.PI;
                const r = planetRadius + 0.05;
                model.position.set(
                    r * Math.sin(theta) * Math.cos(phi),
                    r * Math.cos(theta),
                    r * Math.sin(theta) * Math.sin(phi)
                );
                model.lookAt(0, 0, 0); // orient to planet center
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
                this.group.add(model);
                this.models.push(model);
            });
        });

        // Add group to scene
        this.scene.add(this.group);

        // Raycaster for click detection
        this.raycaster = new THREE.Raycaster();
    }

    update(delta) {
        // Orbit planet around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;

        // Rotate planet on its axis
        this.group.rotation.y += delta * 0.5;

        // Rotate moons around planet
        this.moons.forEach((moon) => {
            moon.userData.angle += moon.userData.speed * delta * 30;
            moon.position.x = Math.cos(moon.userData.angle) * moon.userData.orbitRadius;
            moon.position.z = Math.sin(moon.userData.angle) * moon.userData.orbitRadius;
        });

        // Optional: simple model animation (rotate them slowly)
        this.models.forEach((model) => {
            model.rotation.y += delta * 0.3;
        });
    }

    click(mouse, scene, camera) {
        this.raycaster.setFromCamera(mouse, camera);

        const intersects = this.raycaster.intersectObjects(this.models, true);
        if (intersects.length > 0) {
            const target = intersects[0].object.parent; // assume model root
            // Simple click animation: jump up and down
            const startY = target.position.y;
            const jumpHeight = 0.5;
            let t = 0;
            const animateJump = () => {
                if (t < Math.PI) {
                    target.position.y = startY + Math.sin(t) * jumpHeight;
                    t += 0.1;
                    requestAnimationFrame(animateJump);
                } else {
                    target.position.y = startY;
                }
            };
            animateJump();
        }
    }
}