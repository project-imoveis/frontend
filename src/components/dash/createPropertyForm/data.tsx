export const unitTypes = {
  comercial: [
    {
      value: "home",
      label: "Casa",
      subType: [
        { value: "UnitSubType_NONE", label: "Normal" },
        { value: "condominium", label: "Casa em condomínio" },
        { value: "single_story_house", label: "Casa térrea" },
        { value: "two_story_house", label: "Sobrado" },
      ],
    },
    {
      value: "clinic",
      label: "Consultório",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
    {
      value: "shed_deposit_warehouse",
      label: "Depósito/galpão/armazém",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
    {
      value: "parking_space",
      label: "Garagem",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
    {
      value: "hotel",
      label: "Hotel/motel/pousada",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
    {
      value: "allotment_land",
      label: "Terreno",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
    {
      value: "business",
      label: "Sala comercial/Loja/box",
      subType: [
        { value: "UnitSubType_NONE", label: "Normal" },
        { value: "retail_center", label: "Centro comercial" },
        { value: "shopping", label: "Shopping" },
        { value: "office", label: "Sala comercial" },
        { value: "gallery", label: "Galeria" },
      ],
    },
    {
      value: "building",
      label: "Prédio/Edifício inteiro",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
  ],
  residential: [
    {
      value: "home",
      label: "Casa",
      subType: [
        { value: "UnitSubType_NONE", label: "Normal" },
        { value: "condominium", label: "Casa em condomínio" },
        { value: "single_story_house", label: "Casa térrea" },
        { value: "two_story_house", label: "Sobrado" },
      ],
    },
    {
      value: "apartment",
      label: "Apartamento",
      subType: [
        { value: "UnitSubType_NONE", label: "Normal" },
        { value: "penthouse", label: "Cobertura" },
        { value: "duplex", label: "Duplex" },
        { value: "kitnet", label: "Kitnet/conjugado" },
        { value: "loft", label: "Loft" },
        { value: "studio", label: "Studio" },
        { value: "flat", label: "Flat" },
      ],
    },
    {
      value: "farm",
      label: "Fazenda/sítio/chácara",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
    {
      value: "allotment_land",
      label: "Terreno",
      subType: [{ value: "UnitSubType_NONE", label: "Normal" }],
    },
  ],
};
