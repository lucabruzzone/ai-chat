## 1. Descripción

<!-- ¿Qué se necesita y por qué? Describa con detalle los cambios que se hicieron. Si es necesario agregue comentarios, notas, etc.  -->

## 2. Tipo de cambio

<!-- Marca con "[X]" lo que creas relevante, y el resto bórralo -->

- [ ] **Fix/Incidencia** (cambio permanente que soluciona un problema)
- [ ] **Feature** (cambio permanente que añade funcionalidad)
- [ ] **Cambio disruptivo** (corrección o nueva funcionalidad que provocaría que la actual existente no funcione como se esperaba)
- [ ] **Refactor** (Refactorización que no compromete el funcionamiento actual)
- [ ] **Docs** (Documentación de la funcionalidad actual como readme, comentarios, etc.)
- [ ] **Tests** (Pruebas unitarias o de integración)

## 3. Checklist

#### Integridad del Pull Request
- [ ] Los cambios de este PR no están duplicados en otro PR ya existente.
- [ ] El PR resuelve por completo el problema o necesidad asociada a la tarea.
- [ ] No se hicieron refactorizaciones profundas si no se solicitaron.
- [ ] El PR contiene una cantidad de commits razonables.
- [ ] La descripción del PR contempla todos los cambios relevantes que se hicieron.

#### Validación funcional
- [ ] El código cumple con la definición funcional
- [ ] El código pasó las pruebas unitarias en local o staging
- [ ] El nuevo código no introduce nuevos errores.
- [ ] CI/CD aprobado (tests, coverages, linters, etc.)

#### Calidad del código
- [ ] Uso de nombres descriptivos e inequívocos.
- [ ] Uso de nombres pronunciables y coherentes.
- [ ] Uso de nombres que permitan búsquedas rápidas y predecibles.
- [ ] Constantes globales en mayúscula y con SNAKE_CASE.
- [ ] Reemplazo de números y téxtos mágicos por constantes bien nombradas.
- [ ] Se implementan los principios SOLID.
- [ ] Los nuevos cambios no afectan negativamente al rendimiento actual (de lo contrario, sugerir mejoras).

#### Comentarios y legibilidad
- [ ] Código comentado con lenguaje apropiado y comprensible.
- [ ] Código comentado solo en áreas no estándar o muy complejas.
- [ ] Eliminación de comentarios redundantes e irrelevantes.

## 4. Evidencia

<!-- Subir capturas de pantalla, logs de ejecución exitosa, resultados de pruebas manuales o automáticas -->

## 5. Referencias

<!-- Link de la historia de usuario o tarea relacionada  -->
