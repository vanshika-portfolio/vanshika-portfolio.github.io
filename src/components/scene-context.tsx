import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SceneId = "noir" | "peaks" | "mist" | "dunes" | "aurora";

export const scenes: { id: SceneId; label: string; hint: string }[] = [
  { id: "noir", label: "Noir", hint: "Black purple" },
  { id: "peaks", label: "Peaks", hint: "Violet mountain haze" },
  { id: "mist", label: "Mist", hint: "Purple forest lake" },
  { id: "dunes", label: "Dunes", hint: "Night desert sky" },
  { id: "aurora", label: "Aurora", hint: "Animated violet gradient" },
];

const STORAGE_KEY = "vs-scene-v2";

type SceneContextValue = { scene: SceneId; setScene: (s: SceneId) => void };

const SceneContext = createContext<SceneContextValue>({ scene: "peaks", setScene: () => {} });

export function SceneProvider({ children }: { children: ReactNode }) {
  const [scene, setScene] = useState<SceneId>("peaks");

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
