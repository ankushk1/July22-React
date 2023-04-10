import React from "react";
import { useDarkMode } from "../utils/customHooks";

const DarkLight = () => {
  const { mode, handleModeChange } = useDarkMode();

  return (
    <div>
      {mode === "light" ? (
        <button
          className="btn btn-dark text-light"
          onClick={() => handleModeChange("dark")}
        >
          ☾
        </button>
      ) : (
        <button
          className="btn btn-light bg-warning"
          onClick={() => handleModeChange("light")}
        >
          ☀
        </button>
      )}

      <div
        style={
          mode === "light"
            ? {}
            : {
                backgroundColor: "black",
                color: "white"
              }
        }
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        doloremque reiciendis deleniti sunt, voluptate porro accusamus inventore
        esse a autem labore accusantium aperiam rerum, repudiandae obcaecati
        quisquam impedit molestias vel at error quis. Accusantium corrupti
        officiis ratione. Iure unde nemo, ullam molestiae consectetur quo, quas
        laborum quasi illo repudiandae inventore reprehenderit quisquam alias
        nihil! Eum dolores sunt reprehenderit unde nemo neque nostrum mollitia
        enim quas, fuga ducimus fugit, incidunt veritatis optio voluptas
        provident? Tenetur expedita aliquid ea, odio necessitatibus adipisci
        repellendus accusantium facere officiis aspernatur eius quis recusandae
        ratione ullam omnis dolores quisquam libero numquam quas incidunt. Ea,
        natus modi.
      </div>
    </div>
  );
};

export default DarkLight;
