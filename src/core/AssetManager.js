import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/** Optional GLTF loading with a caller-supplied procedural fallback. */
export class AssetManager {
  constructor() { this.loader = new GLTFLoader(); this.cache = new Map(); }
  async loadModel(url, fallback) {
    if (this.cache.has(url)) return this.cache.get(url).clone(true);
    try {
      const gltf = await this.loader.loadAsync(url);
      this.cache.set(url, gltf.scene);
      return gltf.scene.clone(true);
    } catch (error) {
      console.warn(`Optional model unavailable (${url}); using procedural fallback.`, error);
      if (typeof fallback === 'function') return fallback();
      throw error;
    }
  }
}
