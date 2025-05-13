export interface FamilyInfo {
  cantidad: string
  persona1?: string
  persona2?: string
  persona3?: string
  persona4?: string
  // puedes seguir agregando más si es necesario
}

export const Family: Record<string, FamilyInfo> = {
  Inv001: {
    cantidad: '2 personas',
    persona1: 'Jose Alexander Arce Salas',
    persona2: 'Mariam Andrea Rivera Mora',
  },
  Inv002: {
    cantidad: '4 personas',
    persona1: 'Ana',
    persona2: 'Luis',
    persona3: 'Sofía',
    persona4: 'José',
  },
  Inv003: {
    cantidad: '1 persona',
    persona1: 'Lucía',
  },
  Inv004: {
    cantidad: '3 personas',
    persona1: 'Pedro',
    persona2: 'Clara',
    persona3: 'Tomás',
  },
}
