import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Importação direta dos templates
import {Template01} from "../templates/Template01/index";
import { Template02} from "../templates/Template02/index";
enum TemplateNames {
  template1 = "template1",
  template2 = "template2",
}

export const Editor = () => {
  const [selectTemplate, setSelectTemplate] = useState<TemplateNames>(TemplateNames.template1);

  // Mapear templates diretamente
  const templates = {
    [TemplateNames.template1]: Template01,
    [TemplateNames.template2]: Template02,
  };

  const SelectedTemplate = templates[selectTemplate];

  return (
    <div>
      <SelectedTemplate />
    </div>
  );
};
