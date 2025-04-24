import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, NavLink, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, createContext, useState, useContext } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
var Gender = /* @__PURE__ */ ((Gender2) => {
  Gender2[Gender2["male"] = 0] = "male";
  Gender2[Gender2["femelle"] = 1] = "femelle";
  return Gender2;
})(Gender || {});
var Result = /* @__PURE__ */ ((Result2) => {
  Result2[Result2["positif"] = 0] = "positif";
  Result2[Result2["negatif"] = 1] = "negatif";
  return Result2;
})(Result || {});
var ReproductionStatus = /* @__PURE__ */ ((ReproductionStatus2) => {
  ReproductionStatus2[ReproductionStatus2["Saillie"] = 0] = "Saillie";
  ReproductionStatus2[ReproductionStatus2["Non Saillie"] = 1] = "Non Saillie";
  return ReproductionStatus2;
})(ReproductionStatus || {});
var ReproductionType = /* @__PURE__ */ ((ReproductionType2) => {
  ReproductionType2[ReproductionType2["IA"] = 0] = "IA";
  ReproductionType2[ReproductionType2["Monte Naturelle"] = 1] = "Monte Naturelle";
  ReproductionType2[ReproductionType2["Transfert d'embryon"] = 2] = "Transfert d'embryon";
  return ReproductionType2;
})(ReproductionType || {});
var GestationResults = /* @__PURE__ */ ((GestationResults2) => {
  GestationResults2[GestationResults2["Gestante"] = 0] = "Gestante";
  GestationResults2[GestationResults2["Non Gestante"] = 1] = "Non Gestante";
  return GestationResults2;
})(GestationResults || {});
const dashboardDataSample = {
  "cattleNumber": 143,
  "cattleInProduction": 70,
  "cattleNotInProduction": 53,
  "cattleNotProducing": 20
};
const animalListSample = [{
  id: "1234",
  pentagNumber: "123456",
  gender: 1,
  age: 1,
  fatherPentagNumber: "123455",
  motherPentagNumber: "123454"
}, {
  id: "2345",
  pentagNumber: "234567",
  gender: 1,
  age: 3,
  fatherPentagNumber: "234566",
  motherPentagNumber: "234565"
}, {
  id: "3456",
  pentagNumber: "345678",
  gender: 0,
  age: 4,
  fatherPentagNumber: "345677",
  motherPentagNumber: "345676"
}];
const animalDetailsSample = {
  id: "1234",
  identification: {
    pentagNumber: "123456",
    birthdate: /* @__PURE__ */ new Date(),
    birthplace: "Dijon",
    race: "Charolaise",
    gender: 1,
    fatherPentagNumber: "123455",
    motherPentagNumber: "123454",
    enteredFarmDate: /* @__PURE__ */ new Date(),
    exitedFarmDate: /* @__PURE__ */ new Date()
  },
  sanitary: {
    status: {
      mastitis: 11,
      metabolicProblems: "metabolisme ralenti",
      BCS: 1,
      limping: 2
    },
    vaccines: [
      {
        type: "Covid",
        date: /* @__PURE__ */ new Date(),
        veterinarian: "John Vet"
      }
    ],
    veterinarianTreatments: [
      {
        productName: "Azorpic",
        administrationDate: /* @__PURE__ */ new Date(),
        durationMonths: 10,
        consumptionDelayMonths: 11
      }
    ],
    controls: {
      analysisResults: [{
        type: "Grippe",
        result: 0
      }],
      screenings: [{
        type: "Covid",
        date: /* @__PURE__ */ new Date()
      }]
    },
    veterinarianVisits: [{
      date: /* @__PURE__ */ new Date(),
      vetName: "John Vet",
      observations: "Pas d'observations particulières"
    }]
  },
  reproduction: {
    general: {
      status: 0,
      firstInseminationDate: /* @__PURE__ */ new Date(),
      lactationNumber: 4
    },
    reproductions: [{
      inseminationDate: /* @__PURE__ */ new Date(),
      type: 0,
      genitorName: "Sarro",
      genitorPentagNumber: "123455",
      origin: "Bourg",
      IANumber: 1235,
      IAObservations: "Pas d'observations sur l'IA",
      gestationControls: [{
        date: /* @__PURE__ */ new Date(),
        results: 0,
        daysAfterIA: 11,
        observations: "Pas d'observations sur la gestation"
      }],
      postCalvingReproductionCycle: {
        rebreedingDate: /* @__PURE__ */ new Date(),
        rebreedingIntensity: "régulière",
        calvingInseminationIntervalMonths: 10,
        calvingToCalvingIntervalMonths: 4,
        inseminationAmount: 5,
        reformDecision: false
      }
    }]
  },
  production: {
    milk: {
      dailyLiters: 30,
      litersByLactation: 20,
      lifetimeLiters: 3500,
      lactationPeakLiters: 50,
      lactationPersistence: true,
      followUp: "pas de follow up spécifique"
    },
    quality: {
      fatRating: 90,
      proteinRating: 50,
      somaticCells: 50,
      ureaLevels: 10,
      alimentaryEfficency: 5,
      antibioticPresence: false
    },
    economic: {
      alimentaryCostPerProducedLiter: 10,
      revenue: 1e3,
      vetCharges: 100,
      geneticValue: {
        lacticIndex: 40,
        reproduction: 200,
        mammaryHealth: 100
      }
    }
  }
};
const defaultFarmContext = {
  currentAnimal: null,
  dashboardData: null,
  list: []
  // addAnimal: () => {},
};
const FarmContext = createContext(defaultFarmContext);
function FarmProvider({ children }) {
  const [list, setList] = useState(animalListSample);
  const [currentAnimal, setCurrentAnimal] = useState(animalDetailsSample);
  const [dashboardData, setDashboardData] = useState(dashboardDataSample);
  return /* @__PURE__ */ jsx(FarmContext.Provider, { value: { currentAnimal, list, dashboardData }, children });
}
const useFarmContext = () => {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error("useFarmContext must be used within a FarmProvider");
  }
  return context;
};
const Header = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-16 bg-green-800 p-4", children: [
    /* @__PURE__ */ jsx(NavLink, { to: "/", end: true, children: "Tableau de Bord" }),
    /* @__PURE__ */ jsx(NavLink, { to: "/farm/animals", end: true, children: "Mes animaux" }),
    /* @__PURE__ */ jsx(NavLink, { to: "/farm/animal", end: true, children: "Animal" })
  ] });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      className: "bg-amber-100",
      children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("div", {
        className: "p-16",
        children
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(FarmProvider, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const FarmDashboard = () => {
  const { dashboardData } = useFarmContext();
  dashboardData ? Math.trunc(100 * dashboardData.cattleInProduction / dashboardData.cattleNumber) : "--";
  dashboardData ? Math.trunc(100 * dashboardData.cattleNotInProduction / dashboardData.cattleNumber) : "--";
  dashboardData ? Math.trunc(100 * dashboardData.cattleNotProducing / dashboardData.cattleNumber) : "--";
  return /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "header-fat", children: /* @__PURE__ */ jsx("h1", { children: "Mon Cheptel" }) }),
          /* @__PURE__ */ jsxs("div", { className: "chip-list", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              "250 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "Animaux" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "28 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "IA restantes" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "29 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "En traitement" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "29 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "Veaux" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "header-fat", children: /* @__PURE__ */ jsx("h1", { children: "Animaux en production" }) }),
          /* @__PURE__ */ jsxs("div", { className: "chip-list", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              "180 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "Animaux" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "11 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "Sous antibio" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "14 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "Période Colostrum" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              "19 ",
              /* @__PURE__ */ jsx("span", { className: "chip-selected", children: "Taries" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsx("div", { className: "header-slim", children: /* @__PURE__ */ jsx("h2", { children: "Performance lait by PERF'LAIT" }) }),
            /* @__PURE__ */ jsx("div", { children: "Edit" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "graph", children: "Graph 1" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsx("div", { className: "header-slim", children: /* @__PURE__ */ jsx("h2", { children: "Performance repro" }) }),
            /* @__PURE__ */ jsx("div", { children: "Edit" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "graph", children: "Graph 1" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsxs("button", { className: "toggle-light", children: [
          "Filtres avancés ",
          /* @__PURE__ */ jsx("span", { children: "V" })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "button-light", children: [
          /* @__PURE__ */ jsx("span", { children: "+" }),
          " Ajouter des indicateurs"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { children: "Cloche" }),
          /* @__PURE__ */ jsx("div", { className: "header-contrast", children: "Alertes" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "alert contrast", children: [
          /* @__PURE__ */ jsx("div", { children: "Prochain rendez-vous vétérinaire" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: "9h00" }),
            /* @__PURE__ */ jsx("div", { children: "15/02/25" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "alert tertiary", children: [
          /* @__PURE__ */ jsx("div", { children: "Traitement en cours à vérifier" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: "Toute la journée" }),
            /* @__PURE__ */ jsx("div", { children: "30/02/25" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "alert gray", children: [
          /* @__PURE__ */ jsx("div", { children: "15 en perte de performance (-2L/j)" }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: "au 10/02/25" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "alert secondary", children: [
          /* @__PURE__ */ jsx("div", { children: "Déclaration PAC J-2" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: "Toute la journée" }),
            /* @__PURE__ */ jsx("div", { children: "28/02/25" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "alert primary flex-col", children: [
          /* @__PURE__ */ jsx("div", { children: "Dernier prélèvement tank" }),
          /* @__PURE__ */ jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsx("div", { children: "6312 L" }),
            /* @__PURE__ */ jsx("div", { children: "|" }),
            /* @__PURE__ */ jsx("div", { children: "Jours de production : 3" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
function meta$4({}) {
  return [{
    title: "Mon Tableau de Bord"
  }, {
    name: "description",
    content: "Tableau de Bord de mon cheptel"
  }];
}
const farm_dashboard = withComponentProps(function FarmDashboardRoute() {
  return /* @__PURE__ */ jsx(FarmDashboard, {});
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: farm_dashboard,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const FarmCreateAnimal = () => {
  useFarmContext();
  const handleChange = (e) => {
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "id",
        value: "",
        onChange: handleChange,
        placeholder: "Enter ID"
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "date",
        name: "birthdate",
        value: "",
        onChange: handleChange,
        placeholder: "Enter Birthdate"
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "birthplace",
        value: "",
        onChange: handleChange,
        placeholder: "Enter Birthplace"
      }
    ),
    /* @__PURE__ */ jsxs("select", { name: "gender", value: "male", onChange: handleChange, children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "Select Gender" }),
      /* @__PURE__ */ jsx("option", { value: "male", children: "Male" }),
      /* @__PURE__ */ jsx("option", { value: "female", children: "Female" })
    ] })
  ] });
};
function meta$3({}) {
  return [{
    title: "Créer Animal"
  }, {
    name: "description",
    content: "Page pour ajouter un animal"
  }];
}
const farm_createAnimal = withComponentProps(function FarmCreateAnimalRoute() {
  return /* @__PURE__ */ jsx(FarmCreateAnimal, {});
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: farm_createAnimal,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const FarmAnimal = () => {
  const { currentAnimal } = useFarmContext();
  return /* @__PURE__ */ jsx("div", { children: currentAnimal ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
    /* @__PURE__ */ jsx("div", { className: "header-1", children: /* @__PURE__ */ jsx("h1", { children: "Mon Animal" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 p-8 bg-green-800 rounded-xl", children: [
      /* @__PURE__ */ jsx("h2", { children: "Identification" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "N° de Boucle: ",
          currentAnimal.identification.pentagNumber
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Date de naissance: ",
          currentAnimal.identification.birthdate.toISOString()
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Lieu de naissance: ",
          currentAnimal.identification.birthplace
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Race: ",
          currentAnimal.identification.race
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Sexe: ",
          Gender[currentAnimal.identification.gender]
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "N° du père: ",
          currentAnimal.identification.fatherPentagNumber
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "N° de la mère: ",
          currentAnimal.identification.motherPentagNumber
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Date d'entrée dans l'élevage: ",
          currentAnimal.identification.enteredFarmDate.toISOString()
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Date de sortie (abattage, vente, mortalité): ",
          currentAnimal.identification.exitedFarmDate.toISOString()
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 p-8 bg-green-800 rounded-xl", children: [
      /* @__PURE__ */ jsx("h2", { children: "Suivi sanitaire et traitements" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsx("h3", { children: "Statut sanitaire" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Nombre de mammites: ",
            currentAnimal.sanitary.status.mastitis
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Problèmes métaboliques: ",
            currentAnimal.sanitary.status.metabolicProblems
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Score d'état corporel (Body Condition Score): ",
            currentAnimal.sanitary.status.BCS
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Boiteries: ",
            currentAnimal.sanitary.status.limping
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { children: "Vaccinations" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2", children: currentAnimal.sanitary.vaccines.map((vaccine) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Type: ",
            vaccine.type
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Date: ",
            vaccine.date.toISOString()
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Veterinarian: ",
            vaccine.veterinarian
          ] })
        ] }, vaccine.type)) }),
        /* @__PURE__ */ jsx("h3", { children: "Traitements Vétérinaires" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2", children: currentAnimal.sanitary.veterinarianTreatments.map((treatment) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Nom du produit: ",
            treatment.productName
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Date d'administration: ",
            treatment.administrationDate.toISOString()
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Durée du traitement en mois: ",
            treatment.durationMonths
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Temps d'attente avant consommation (lait/viande) en mois: ",
            treatment.consumptionDelayMonths
          ] })
        ] }, treatment.productName)) }),
        /* @__PURE__ */ jsx("h3", { children: "Analyse et contrôles sanitaires" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { children: "Résultats d'analyse" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 pt-8", children: currentAnimal.sanitary.controls.analysisResults.map((analysis) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("p", { children: [
                "Type: ",
                analysis.type
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Résultat: ",
                Result[analysis.result]
              ] })
            ] }, analysis.type)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { children: "Dépistages" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 pt-8", children: currentAnimal.sanitary.controls.screenings.map((screening) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("p", { children: [
                "Type: ",
                screening.type
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Date: ",
                screening.date.toISOString()
              ] })
            ] }, screening.type)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "Visites Vétérinaires" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 pt-8", children: currentAnimal.sanitary.veterinarianVisits.map((visit) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Vétérinaire: ",
              visit.vetName
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Date: ",
              visit.date.toISOString()
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Observations: ",
              visit.observations
            ] })
          ] }, visit.date.toISOString())) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 p-8 bg-green-800 rounded-xl", children: [
      /* @__PURE__ */ jsx("h2", { children: "Reproduction" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Statut reproductif: ",
          ReproductionStatus[currentAnimal.reproduction.general.status]
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Age à la première insémination: ",
          currentAnimal.reproduction.general.firstInseminationDate.toISOString()
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Nombre de lactations: ",
          currentAnimal.reproduction.general.lactationNumber
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-16 pt-8", children: currentAnimal.reproduction.reproductions.map((repro) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsxs("h3", { children: [
            "Reproduction ",
            repro.inseminationDate.toISOString()
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Type: ",
              ReproductionType[repro.type]
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Nom du taureau: ",
              repro.genitorName
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "N° du taureau: ",
              repro.genitorPentagNumber
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Numéro de la dose IA: ",
              repro.IANumber
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Observations sur l'IA/la saillie: ",
              repro.IAObservations
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-8", children: [
              /* @__PURE__ */ jsx("h3", { children: "Contrôles de gestation" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-8 p-8", children: repro.gestationControls.map((control) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  "Date: ",
                  control.date.toISOString()
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Résultats: ",
                  GestationResults[control.results]
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Nombre de jours après l'IA: ",
                  control.daysAfterIA
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Observations: ",
                  control.observations
                ] })
              ] }, control.date.toISOString())) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { children: "Cycle de reproduction post-vêlage" }),
              /* @__PURE__ */ jsxs("div", { className: "pt-8", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  "Date de retour en chaleurs: ",
                  repro.postCalvingReproductionCycle.rebreedingDate.toISOString()
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Intensité des chaleurs: ",
                  repro.postCalvingReproductionCycle.rebreedingIntensity
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Delai vêlage - vêlage précédent en mois: ",
                  repro.postCalvingReproductionCycle.calvingInseminationIntervalMonths
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Interval par mois entre les velages: ",
                  repro.postCalvingReproductionCycle.calvingToCalvingIntervalMonths
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Nombre d'inséminations par gestation: ",
                  repro.postCalvingReproductionCycle.inseminationAmount
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Décision de reforme: ",
                  repro.postCalvingReproductionCycle.reformDecision
                ] })
              ] })
            ] })
          ] }, repro.inseminationDate.toISOString())
        ] })) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 p-8 bg-green-800 rounded-xl", children: [
      /* @__PURE__ */ jsx("h2", { children: "Production" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsx("h3", { children: "Lait" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Quantité de lait produite par jour: ",
              currentAnimal.production.milk.dailyLiters
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Production par lactation: ",
              currentAnimal.production.milk.litersByLactation
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Production cumulée à vie: ",
              currentAnimal.production.milk.lifetimeLiters
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Pic de lactation: ",
              currentAnimal.production.milk.lactationPeakLiters
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Persisence de lactation: ",
              currentAnimal.production.milk.lactationPersistence
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Production: ",
              currentAnimal.production.milk.followUp
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsx("h3", { children: "Qualité" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Taux butyreux (TB): ",
              currentAnimal.production.quality.fatRating
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Taux protéique(TP): ",
              currentAnimal.production.quality.proteinRating
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Cellules somatiques: ",
              currentAnimal.production.quality.somaticCells
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Taux d'urée: ",
              currentAnimal.production.quality.ureaLevels
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Éfficacité alimentaire: ",
              currentAnimal.production.quality.alimentaryEfficency
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Présence d'antibiotiques: ",
              currentAnimal.production.quality.antibioticPresence
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsx("h3", { children: "Performance Economique" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Cout alimentaire par litre de lait produit: ",
              currentAnimal.production.economic.alimentaryCostPerProducedLiter
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Revenus par vache: ",
              currentAnimal.production.economic.revenue
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Charges vétérinaire et traitements: ",
              currentAnimal.production.economic.vetCharges
            ] }),
            /* @__PURE__ */ jsx("h4", { children: "Valeur génétique" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("p", { children: [
                "Index laitier: ",
                currentAnimal.production.economic.geneticValue.lacticIndex
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Reproduction: ",
                currentAnimal.production.economic.geneticValue.reproduction
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Santé mammaire: ",
                currentAnimal.production.economic.geneticValue.mammaryHealth
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) : /* @__PURE__ */ jsx("p", { children: "Pas d'animal sélectionné" }) });
};
function meta$2({}) {
  return [{
    title: "Animal"
  }, {
    name: "description",
    content: "Page pour afficher les details d'un animal"
  }];
}
const farm_animal = withComponentProps(function FarmAnimalRoute() {
  return /* @__PURE__ */ jsx(FarmAnimal, {});
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: farm_animal,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const Filters = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-16 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "header-1", children: /* @__PURE__ */ jsx("h1", { children: "Mon Cheptel" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-32 w-fit", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-8 bg-green-800 rounded-xl", children: [
        /* @__PURE__ */ jsx("h2", { children: "Pédigré" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Sexe" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "male", name: "gender", value: "male", checked: true }),
          /* @__PURE__ */ jsx("label", { htmlFor: "male", children: "Mâle" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "female", name: "gender", value: "female" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "female", children: "Femelle" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Père" }),
          /* @__PURE__ */ jsx("input", { type: "text" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Mère" }),
          /* @__PURE__ */ jsx("input", { type: "text" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Race" }),
          /* @__PURE__ */ jsx("input", { type: "text" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Age" }),
          /* @__PURE__ */ jsx("input", { type: "number" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "N° de Boucle" }),
          /* @__PURE__ */ jsx("input", { type: "text" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 bg-green-800 rounded-xl", children: [
        /* @__PURE__ */ jsx("h2", { children: "Suivi de soins" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Date de vêlage" }),
          /* @__PURE__ */ jsx("input", { type: "date" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Date d'insémination" }),
          /* @__PURE__ */ jsx("input", { type: "date" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Vaccin FCO" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "trueFCO", name: "vaccineFCO", value: "true", checked: true }),
          /* @__PURE__ */ jsx("label", { htmlFor: "trueFCO", children: "Oui" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "falseFCO", name: "vaccineFCO", value: "false" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "falseFCO", children: "Non" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Vaccin BRSV" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "trueBSRV", name: "vaccineBSRV", value: "true", checked: true }),
          /* @__PURE__ */ jsx("label", { htmlFor: "trueBSRV", children: "Oui" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "falseBSRV", name: "vaccineBSRV", value: "false" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "falseBSRV", children: "Non" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Vaccin pi3" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "truePI3", name: "vaccinePI3", value: "true", checked: true }),
          /* @__PURE__ */ jsx("label", { htmlFor: "truePI3", children: "Oui" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "falsePI3", name: "vaccinePI3", value: "false" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "falsePI3", children: "Non" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: "Parage" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "trueParage", name: "parage", value: "true", checked: true }),
          /* @__PURE__ */ jsx("label", { htmlFor: "trueParage", children: "Oui" }),
          /* @__PURE__ */ jsx("input", { type: "radio", id: "falseParage", name: "parage", value: "false" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "falseParage", children: "Non" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "p-8 bg-green-800 rounded-xl", children: /* @__PURE__ */ jsx(NavLink, { to: "/farm/animals", end: true, children: "Rechercher" }) })
  ] });
};
function meta$1({}) {
  return [{
    title: "Filtres"
  }, {
    name: "description",
    content: "Page pour afficher les filtres sélectionnables"
  }];
}
const farm_filters = withComponentProps(function FarmFiltersRoute() {
  return /* @__PURE__ */ jsx(Filters, {});
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: farm_filters,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const FarmAnimals = () => {
  const { list } = useFarmContext();
  const [filterSearch, setFilterSearch] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-16 self-center", children: [
    /* @__PURE__ */ jsx("div", { className: "header-1", children: /* @__PURE__ */ jsx("h1", { children: "Animaux selectionnés" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center self-center", children: [
      filterSearch ? (
        // <Filters />
        /* @__PURE__ */ jsxs("div", { className: "flex gap-32 w-fit items-center justify-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-8 bg-green-800 rounded-xl", children: [
            /* @__PURE__ */ jsx("h2", { children: "Pédigré" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Sexe" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "male", name: "gender", value: "male", checked: true }),
              /* @__PURE__ */ jsx("label", { htmlFor: "male", children: "Mâle" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "female", name: "gender", value: "female" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "female", children: "Femelle" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Père" }),
              /* @__PURE__ */ jsx("input", { type: "text" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Mère" }),
              /* @__PURE__ */ jsx("input", { type: "text" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Race" }),
              /* @__PURE__ */ jsx("input", { type: "text" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Age" }),
              /* @__PURE__ */ jsx("input", { type: "number" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "N° de Boucle" }),
              /* @__PURE__ */ jsx("input", { type: "text" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 bg-green-800 rounded-xl", children: [
            /* @__PURE__ */ jsx("h2", { children: "Suivi de soins" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Date de vêlage" }),
              /* @__PURE__ */ jsx("input", { type: "date" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Date d'insémination" }),
              /* @__PURE__ */ jsx("input", { type: "date" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Vaccin FCO" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "trueFCO", name: "vaccineFCO", value: "true", checked: true }),
              /* @__PURE__ */ jsx("label", { htmlFor: "trueFCO", children: "Oui" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "falseFCO", name: "vaccineFCO", value: "false" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "falseFCO", children: "Non" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Vaccin BRSV" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "trueBSRV", name: "vaccineBSRV", value: "true", checked: true }),
              /* @__PURE__ */ jsx("label", { htmlFor: "trueBSRV", children: "Oui" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "falseBSRV", name: "vaccineBSRV", value: "false" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "falseBSRV", children: "Non" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Vaccin pi3" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "truePI3", name: "vaccinePI3", value: "true", checked: true }),
              /* @__PURE__ */ jsx("label", { htmlFor: "truePI3", children: "Oui" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "falsePI3", name: "vaccinePI3", value: "false" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "falsePI3", children: "Non" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "Parage" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "trueParage", name: "parage", value: "true", checked: true }),
              /* @__PURE__ */ jsx("label", { htmlFor: "trueParage", children: "Oui" }),
              /* @__PURE__ */ jsx("input", { type: "radio", id: "falseParage", name: "parage", value: "false" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "falseParage", children: "Non" })
            ] })
          ] })
        ] })
      ) : /* @__PURE__ */ jsx("div", { className: "bg-green-800 rounded-xl w-fit ", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "recherche" }) }),
      /* @__PURE__ */ jsx("button", { className: "bg-green-800 rounded-xl w-fit", onClick: () => setFilterSearch(!filterSearch), children: "Recherche Avancée" }),
      /* @__PURE__ */ jsx("button", { className: "p-8 bg-green-800 rounded-xl", children: /* @__PURE__ */ jsx(NavLink, { to: "/farm/animals", end: true, children: "Rechercher" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-32 gap-y-8 self-center", children: list.map(
      (animal) => /* @__PURE__ */ jsx(NavLink, { to: "/farm/animal", end: true, children: /* @__PURE__ */ jsxs("div", { className: "bg-green-800 rounded-3xl p-8 font-bold", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "N° de Boucle: ",
          animal.pentagNumber
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-4 pt-4", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Sexe: ",
            Gender[animal.gender]
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Age: ",
            animal.age,
            " ",
            animal.age == 1 ? "an" : "ans"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Père: ",
            animal.fatherPentagNumber
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Mère: ",
            animal.motherPentagNumber
          ] })
        ] })
      ] }, animal.id) })
    ) })
  ] });
};
function meta({}) {
  return [{
    title: "Animaux"
  }, {
    name: "description",
    content: "Page pour afficher la liste des animaux"
  }];
}
const farm_animals = withComponentProps(function FarmAnimalsRoute() {
  return /* @__PURE__ */ jsx(FarmAnimals, {});
});
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: farm_animals,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BN1DNq0F.js", "imports": ["/assets/chunk-K6CSEXPM-BiMbIu0n.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-D3KuOSrK.js", "imports": ["/assets/chunk-K6CSEXPM-BiMbIu0n.js", "/assets/with-props-BRVLWYxm.js", "/assets/farm-D2TQkFqx.js"], "css": ["/assets/root-DHvQjs35.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/farm_dashboard": { "id": "routes/farm_dashboard", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/farm_dashboard-DAcjOvPk.js", "imports": ["/assets/with-props-BRVLWYxm.js", "/assets/chunk-K6CSEXPM-BiMbIu0n.js", "/assets/farm-D2TQkFqx.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/farm_createAnimal": { "id": "routes/farm_createAnimal", "parentId": "root", "path": "farm/create-animal", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/farm_createAnimal-y84GEz7s.js", "imports": ["/assets/with-props-BRVLWYxm.js", "/assets/chunk-K6CSEXPM-BiMbIu0n.js", "/assets/farm-D2TQkFqx.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/farm_animal": { "id": "routes/farm_animal", "parentId": "root", "path": "farm/animal", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/farm_animal-McOI3IrV.js", "imports": ["/assets/with-props-BRVLWYxm.js", "/assets/chunk-K6CSEXPM-BiMbIu0n.js", "/assets/farm-D2TQkFqx.js", "/assets/farm-CCkK0R50.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/farm_filters": { "id": "routes/farm_filters", "parentId": "root", "path": "farm/filters", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/farm_filters-DRKsEiNU.js", "imports": ["/assets/with-props-BRVLWYxm.js", "/assets/chunk-K6CSEXPM-BiMbIu0n.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/farm_animals": { "id": "routes/farm_animals", "parentId": "root", "path": "farm/animals", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/farm_animals-DcFgxMMN.js", "imports": ["/assets/with-props-BRVLWYxm.js", "/assets/chunk-K6CSEXPM-BiMbIu0n.js", "/assets/farm-D2TQkFqx.js", "/assets/farm-CCkK0R50.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-8fa1c571.js", "version": "8fa1c571" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/farm_dashboard": {
    id: "routes/farm_dashboard",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/farm_createAnimal": {
    id: "routes/farm_createAnimal",
    parentId: "root",
    path: "farm/create-animal",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/farm_animal": {
    id: "routes/farm_animal",
    parentId: "root",
    path: "farm/animal",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/farm_filters": {
    id: "routes/farm_filters",
    parentId: "root",
    path: "farm/filters",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/farm_animals": {
    id: "routes/farm_animals",
    parentId: "root",
    path: "farm/animals",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
