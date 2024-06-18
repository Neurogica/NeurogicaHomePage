import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Stars: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  const options = {
    preset: "stars",
    size: {
      value: { min: 0.05, max: 0.15 }
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default Stars;
