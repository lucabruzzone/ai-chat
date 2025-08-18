## 1️⃣ Descripción

<!-- ¿Qué se necesita y por qué? Explicación de la solución. Y si es necesario agregue comentarios, notas, etc.  -->
<!-- Este PR introduce mejoras y nuevos endpoints de prueba en el webhook que recibe la CTE (Carpeta Tributaria Electrónica) desde Datamart. -->

## 2️⃣ Tipo de cambio

<!-- Marca con "[X]" lo que corresponda  -->

- [ ] **Fix/Incidencia** (soluciona un problema)
- [ ] **Feature** (añade funcionalidad)
- [ ] **Cambio disruptivo** (rompe compatibilidad existente)
- [ ] **Refactor** (mejora interna sin afectar comportamiento)
- [ ] **Docs** (documentación como README, comentarios, etc.)
- [ ] **Tests** (pruebas unitarias o de integración)

## 3️⃣ Cambios agregados
<!-- Lista resumida de los cambios en archivos, métodos, funciones o clases -->
<!-- 
📄 **Ruta/Archivo.cs**
- MétodoXYZ: descripción breve del cambio.
-->

## 4️⃣ Checklist General

#### ✅ Integridad
- [ ] No está duplicado en otro PR.
- [ ] Resuelve completamente la necesidad/tarea asociada.
- [ ] Sin refactorizaciones profundas si no se solicitaron.
- [ ] La cantidad de commits es razonable.
- [ ] La descripción contempla todos los cambios relevantes.

#### 🧪 Validación
- [ ] Cumple con la definición funcional
- [ ] Pasó las pruebas unitarias en local o staging
- [ ] No introduce nuevos errores.
- [ ] CI/CD aprobado (tests, coverages, linters, etc.)

#### 📐 Calidad
- [ ] Cumple con el **Principio de Responsabilidad Única**.
- [ ] Cumple con el **Principio Abierto/Cerrado**.
- [ ] Cumple con el **Principio de Sustitución de Liskov**.
- [ ] Cumple con el **Principio de Segregación de Interfaces**.
- [ ] Cumple con el **Principio de Inversión de Dependencias**.
- [ ] Libre de **Bloaters**.
- [ ] Libre d **Object-Orientation Abusers**.
- [ ] Libre d **Change Preventers**.
- [ ] Libre d **Dispensables**.
- [ ] Libre d **Couplers**.
- [ ] Nombres descriptivos, pronunciables y que permitan búsquedas rápidas y predecibles.
- [ ] Constantes en mayúscula y SNAKE_CASE.
- [ ] Sin números ni textos mágicos.
- [ ] Código fuertemente tipado (evitar `var` o `any`).
- [ ] Los nuevos cambios no afectan negativamente al rendimiento actual (de lo contrario, sugerir mejoras).
- [ ] No hay logs ni trazas de debug.

#### 💬 Legibilidad
- [ ] Comentarios solo en áreas no estándar o muy complejas.
- [ ] Comentarios con lenguaje apropiado y comprensible.
- [ ] Sin comentarios redundantes e irrelevantes.
- [ ] Se actualiza la documentación si los nuevos cambios lo requieren.

## 5️⃣ React (Si aplica)

#### 📦 Estructura y responsabilidades de componentes
- [ ] Los componentes son o todos funcionales o todos clases y siguen la convención de nombres **PascalCase**.
- [ ] No se colocó lógica de negocio directamente en componentes visuales (se usaron hooks o funciones externas).
- [ ] Componentes y funciones están en sus respectivas carpetas (Components, Utils, Views, etc.).

#### 🧠 Manejo de estado y uso de hooks
- [ ] El estado local se maneja con `useState`, `useReducer` o un sistema global si aplica (Redux, Zustand, Context, etc.).
- [ ] Se evitaron `useEffect` mal utilizados (sin dependencias, llamadas innecesarias, o lógica repetida).
- [ ] Se aplicaron `useMemo` y `useCallback` para evitar renders innecesarios en componentes pesados.

#### ♿ Accesibilidad y semántica
- [ ] Se usaron etiquetas HTML semánticas (`<button>`, `<section>`, `<header>`, etc.).
- [ ] Se incluyeron `aria-*` o `role` donde fue necesario (menús, modales, etc.).
- [ ] Se garantiza que elementos interactivos (botones, inputs, etc.) sean accesibles por teclado.

#### 🎨 Estilos y UI
- [ ] Se respetaron las guías de diseño del proyecto (colores, espaciado, tipografía, etc.).
- [ ] No se usaron estilos inline a menos que se justifique (ej: el proyecto usa Tailwind).
- [ ] Se usó correctamente el sistema de estilos adoptado (CSS Modules, Tailwind, Styled Components, etc.).
- [ ] El diseño es responsive o adaptable si corresponde.

#### 🚀 Performance y buenas prácticas de renderizado
- [ ] Se usaron keys únicas y estables en `.map()` (nunca el índice si puede evitarse).
- [ ] Uso de `lazy`, `Suspense` u optimizaciones similares si se renderiza condicionalmente un componente pesado.
- [ ] Los eventos (`onClick`, etc.) están definidos fuera del render o memoizados si es costoso.

#### 🌐 Entorno y navegadores
- [ ] El código fue renderizado y validado en entorno local o staging.
- [ ] El comportamiento fue probado en los siguientes **navegadores**:

  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  - [ ] Brave
  - [ ] Mobile (iOS / Android)

## 6️⃣ Evidencia
<!-- Capturas de pantalla, videos, logs, resultados de pruebas manuales o automáticas -->

## 7️⃣ Referencias
<!-- Link a historia de usuario, ticket o tarea relacionada -->
