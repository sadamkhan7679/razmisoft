const generateIconFiles = async () => {
  const fs = require("fs").promises;
  const path = require("path");

  // Check, Circle, X
  const icons = [
    "AI",
    "Blockchain",
    "Cloud",
    "CMS",
    "DesktopApp",
    "Ecommerce",
    "Mobile",
    "WebApp",
    "WebDesign",
  ];

  const iconTemplate = (iconName: string) => {
    return `
import { SVGIconProps } from "@/types/root";
export const ${iconName} = ({
  width = 200,
  height = 200,
  ...props
}: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      </svg>
  );
};
`;
  };

  try {
    // First, create all the files
    for (const icon of icons) {
      const filePath = "icons/services/" + icon + "Icon.tsx";
      await fs.writeFile(filePath, "");
      console.log(`Created file: ${filePath}`);
    }

    // Then, write the content to each file
    for (const icon of icons) {
      const filePath = "icons/services/" + icon + "Icon.tsx";
      await fs.writeFile(filePath, iconTemplate(`${icon}Icon`));
      console.log(`Wrote content to: ${filePath}`);
    }

    console.log("Icon files generated successfully!");
  } catch (error) {
    console.error("Error generating icon files:", error);
  }
};

generateIconFiles();
