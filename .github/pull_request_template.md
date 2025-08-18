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
- [ ] Se implementan el **Principio de Responsabilidad Única**.
- [ ] Se implementan el **Principio Abierto/Cerrado**.
- [ ] Se implementan el **Principio de Sustitución de Liskov**.
- [ ] Se implementan el **Principio de Segregación de Interfaces**.
- [ ] Se implementan el **Principio de Inversión de Dependencias**.
- [ ] Código sin los **Bloaters**.
- [ ] Código sin **Object-Orientation Abusers**.
- [ ] Código sin **Change Preventers**.
- [ ] Código sin **Dispensables**.
- [ ] Código sin **Couplers**.
- [ ] Uso de nombres descriptivos, pronunciables y que permitan búsquedas rápidas y predecibles.
- [ ] Constantes en mayúscula y SNAKE_CASE.
- [ ] Reemplazo de números y textos mágicos por constantes bien nombradas.
- [ ] Código fuertemenete tipado, evitando el uso de "var" y "any"(en Typescript).
- [ ] Los nuevos cambios no afectan negativamente al rendimiento actual (de lo contrario, sugerir mejoras).
- [ ] No hay logs ni trazas de debug en el código subido.

## 5️⃣ Evidencia

<!-- Subir capturas de pantalla, logs de ejecución exitosa, resultados de pruebas manuales o automáticas -->

## 6️⃣ Referencias

<!-- Link de la historia de usuario o tarea relacionada -->
