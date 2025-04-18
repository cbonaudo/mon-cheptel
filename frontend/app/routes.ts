import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/farm_dashboard.tsx"),
    route("farm/create-animal", "routes/farm_createAnimal.tsx"),
    route("farm/animal", "routes/farm_animal.tsx"),
    route("farm/filters", "routes/farm_filters.tsx"),
    route("farm/animals", "routes/farm_animals.tsx"),
    // route("vet/farm-list", "routes/vet_farmList.tsx"),
    // route("vet/farm-dashboard", "routes/vet_farmDashboard.tsx"),
    // route("vet/treatments", "routes/vet_treatments.tsx"),
    // route("vet/animals", "routes/vet_animals.tsx"),
] satisfies RouteConfig;
