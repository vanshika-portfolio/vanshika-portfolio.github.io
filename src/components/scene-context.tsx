import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SceneId = "noir" | "city" | "nature" | "aurora" | "blueprint";

export const scenes: { id: SceneId; label: string; hint: string }[] = [
  { id: "noir", label: "Noir", hint: "Pure black" },
  { id: "city", label: "City", hint: "Skyline at night" },
  { id: "nature", label: "Ridge", hint: "Coastal mountains" },
  { id: "aurora", label: "Aurora", hint: "Animated gradient" },
  { id: "blueprint", label: "Blueprint", hint: "Technical lines" },
];

const STORAGE_KEY = "vs-scene";

type SceneContextValue = { scene: SceneId; setScene: (s: SceneId) => void };

const SceneContext = createContext<SceneContextValue>({ scene: "city", setScene: () => {} });

export function SceneProvider({ children }: { children: ReactNode }) {
  const [scene, setScene] = useState<SceneId>("city");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as SceneId | null;
    if (stored && scenes.some((s) => s.id === stored)) setScene(stored);
  }, []);

  const update = (next: SceneId) => {
    setScene(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return <SceneContext.Provider value={{ scene, setScene: update }}>{children}</SceneContext.Provider>;
}

export function useScene() {
  return useContext(SceneContext);
}
