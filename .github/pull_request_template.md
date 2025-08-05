## 1️⃣ Descripción

<!-- ¿Qué se necesita y por qué? Describa con detalle los cambios que se hicieron. Si es necesario agregue comentarios, notas, etc.  -->

## 2️⃣ Tipo de cambio

<!-- Marca con "[X]" lo que creas relevante, y el resto bórralo -->

- [ ] **Fix/Incidencia** (cambio permanente que soluciona un problema)
- [ ] **Feature** (cambio permanente que añade funcionalidad)
- [ ] **Cambio disruptivo** (corrección o nueva funcionalidad que provocaría que la actual existente no funcione como se esperaba)
- [ ] **Refactor** (Refactorización que no compromete el funcionamiento actual)
- [ ] **Docs** (Documentación de la funcionalidad actual como readme, comentarios, etc.)
- [ ] **Tests** (Pruebas unitarias o de integración)

## 3️⃣ Checklist General

#### ✅ Integridad del Pull Request
- [ ] Los cambios de este PR no están duplicados en otro PR ya existente.
- [ ] El PR resuelve por completo el problema o necesidad asociada a la tarea.
- [ ] No se hicieron refactorizaciones profundas si no se solicitaron.
- [ ] El PR contiene una cantidad de commits razonables.
- [ ] La descripción del PR contempla todos los cambios relevantes que se hicieron.

#### 🧪 Validación funcional
- [ ] El código cumple con la definición funcional
- [ ] El código pasó las pruebas unitarias en local o staging
- [ ] El nuevo código no introduce nuevos errores.
- [ ] CI/CD aprobado (tests, coverages, linters, etc.)

#### 📐 Calidad del código
- [ ] Se implementan los principios SOLID.
- [ ] El código evita prácticas "code smells" (Revisar artículo Refactoring)
- [ ] Uso de nombres descriptivos e inequívocos.
- [ ] Uso de nombres pronunciables y coherentes.
- [ ] Uso de nombres que permitan búsquedas rápidas y predecibles.
- [ ] Constantes en mayúscula y con SNAKE_CASE.
- [ ] Reemplazo de números y textos mágicos por constantes bien nombradas.
- [ ] Se evita el uso de "var" y en su lugar se usan variables explícitamente tipadas.
- [ ] Los nuevos cambios no afectan negativamente al rendimiento actual (de lo contrario, sugerir mejoras).
- [ ] No hay logs ni trazas de debug en el código subido.

#### 💬 Comentarios y legibilidad
- [ ] Comentarios con lenguaje apropiado y comprensible.
- [ ] Comentarios solo en áreas no estándar o muy complejas.
- [ ] Eliminación de comentarios redundantes e irrelevantes.
- [ ] Se actualiza la documentación si los nuevos cambios lo requieren.

## 4️⃣ React (Si aplica)

#### 📦 Estructura y responsabilidades de componentes
- [ ] Los componentes son funcionales (no clases) y siguen la convención de nombres PascalCase.
- [ ] Cada componente tiene una única responsabilidad clara.
- [ ] No se colocó lógica de negocio directamente en componentes visuales (se usaron hooks o funciones externas).
- [ ] Componentes y funciones están en sus respectivas carpetas (Components, Utils, Views, etc.).
- [ ] Los componentes son reutilizables y no hay duplicación de lógica innecesaria.

#### 🧠 Manejo de estado y uso de hooks
- [ ] El estado local se maneja con `useState`, `useReducer` o un sistema global si aplica (Redux, Zustand, Context, etc.).
- [ ] Se evitaron `useEffect` mal utilizados (sin dependencias, llamadas innecesarias, o lógica repetida).
- [ ] Se aplicaron `useMemo` y `useCallback` para evitar renders innecesarios en componentes pesados.

#### 🧹 Código limpio, mantenible y tipado
- [ ] No hay `console.log`, `debugger` ni comentarios de debugging en el código.
- [ ] Código fuertemente tipado (en TypeScript).
- [ ] Se minimiza el uso de `any` (en TypeScript).
- [ ] Código legible, con ternarios simples y buena indentación.

#### ♿ Accesibilidad y semántica
- [ ] Se usaron etiquetas HTML semánticas (`<button>`, `<section>`, `<header>`, etc.).
- [ ] Se incluyeron `aria-*` o `role` donde fue necesario (menús, modales, etc.).
- [ ] Se garantiza que elementos interactivos (botones, inputs, etc.) sean accesibles por teclado.

#### 🎨 Estilos y UI
- [ ] Se respetaron las guías de diseño del proyecto (colores, espaciado, tipografía, etc.).
- [ ] No se usaron estilos inline a menos que esté justificado.
- [ ] Se usó correctamente el sistema de estilos adoptado (CSS Modules, Tailwind, Styled Components, etc.).
- [ ] El diseño es responsive o adaptable si corresponde.

#### 🚀 Performance y buenas prácticas de renderizado
- [ ] Se usaron keys únicas y estables en `.map()` (nunca el índice si puede evitarse).
- [ ] Uso de `lazy`, `Suspense` u optimizaciones similares si se renderiza condicionalmente un componente pesado.
- [ ] Los eventos (`onClick`, etc.) están definidos fuera del render o memoizados si es costoso.

#### 🌐 Entorno y navegadores
- [ ] El código fue renderizado y validado en entorno local o staging.
- [ ] El comportamiento fue probado en al menos **dos navegadores**:

  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  - [ ] Brave
  - [ ] Mobile (iOS / Android)


## 5️⃣ Evidencia

<!-- Subir capturas de pantalla, logs de ejecución exitosa, resultados de pruebas manuales o automáticas -->

## 6️⃣ Referencias

<!-- Link de la historia de usuario o tarea relacionada -->
