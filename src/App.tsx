import React, { useEffect } from "react";

// router config
import { useLocation } from "react-router-dom";
import RouteConfig from "@/router";

// style
import "@/styles/reset.css";
import "@/styles/global.css";
import twCssModule from "@/styles/tailwind.module.css";

//layout
import BaseLayout from "@/components/layout";
import { TailwindStyledMapProvider } from "@/tailwind-styled-map";



export default function App() {
  const APP_NAME = "vite-react-template-typescript";

  const TitleMap = [
    {
      path: "/",
      title: `Home - ${APP_NAME}`,
    },
    {
      path: "/about",
      title: `About - ${APP_NAME}`,
    },
    {
      path: "*",
      title: `Not Found - ${APP_NAME}`,
    },
  ];

  const currentLocation = useLocation();

  useEffect(() => {
    const curTitle = TitleMap.find(
      (item) => item.path === currentLocation.pathname
    );
    if (curTitle && curTitle.title) {
      document.title = curTitle.title;
    }
  }, [currentLocation]);

  return (
    <React.Fragment>
      <TailwindStyledMapProvider value={{ tailwind: twCssModule }}>
        <BaseLayout>
          <RouteConfig />
        </BaseLayout>
      </TailwindStyledMapProvider>
    </React.Fragment>
  );
}
