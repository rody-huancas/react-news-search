import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { useNoticias } from "../hooks/useNoticias";

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const PAISES = [
  { value: "us", label: "Estados Unidos" },
  { value: "jp", label: "Japón" },
  { value: "mx", label: "México" },
  { value: "br", label: "Brasil" },
  { value: "ar", label: "Argentina" },
];

export const Formulario = () => {
  const { categoria, handleChangeCategoria, handleChangePais, pais } =
    useNoticias();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Categoría</InputLabel>
          <Select
            label="Categoría"
            onChange={handleChangeCategoria}
            value={categoria}
          >
            {CATEGORIAS.map((categoria) => (
              <MenuItem key={categoria.value} value={categoria.value}>
                {categoria.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>País</InputLabel>
          <Select label="País" onChange={handleChangePais} value={pais}>
            {PAISES.map((pais) => (
              <MenuItem key={pais.value} value={pais.value}>
                {pais.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
