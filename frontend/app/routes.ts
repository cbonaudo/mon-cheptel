import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("create-animal", "routes/createAnimal.tsx"),
    route("animal", "routes/animal.tsx"),
    route("filters", "routes/filters.tsx"),
    route("animals", "routes/animals.tsx"),
] satisfies RouteConfig;
