CREATE TABLE public."Categoria"
(
    "Adultos" int4range[],
    "CategoriaID" integer NOT NULL DEFAULT nextval('"Categoria_CategoriaID_seq"'::regclass),
    "Jovenes" int4range[],
    "Ninios" int4range[],
    "TerceraEdad" int4range[],
    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("CategoriaID")
)

TABLESPACE pg_default;

ALTER TABLE public."Categoria"
    OWNER to postgres;


CREATE TABLE public."Edad"
(
    "0-12" boolean,
    "13-29" boolean,
    "30-59" boolean,
    "60+" boolean,
    "edadID" integer NOT NULL DEFAULT nextval('"Edad_edadID_seq"'::regclass),
    CONSTRAINT "Edad_pkey" PRIMARY KEY ("edadID")
)

TABLESPACE pg_default;

ALTER TABLE public."Edad"
    OWNER to postgres;


CREATE TABLE public."Personas"
(
    "Nombre" text COLLATE pg_catalog."default",
    "PersonaID" integer NOT NULL DEFAULT nextval('"Personas_PersonaID_seq"'::regclass),
    "Apellido" text COLLATE pg_catalog."default",
    "FechaNacimiento" date[],
    "Peso" integer,
    "Altura" double precision[],
    "Lugar" text COLLATE pg_catalog."default",
    "ZonaHoraria" time with time zone,
    CONSTRAINT "Personas_pkey" PRIMARY KEY ("PersonaID")
)

TABLESPACE pg_default;

ALTER TABLE public."Personas"
    OWNER to postgres;


