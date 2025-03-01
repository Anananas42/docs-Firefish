# Protocolo Firefish

[Firefish Guide](../Firefish%20Guide%20b76f4536601b4088bd1c1b665ad08ddf.md)

[Video Guides](../Video%20Guides%20111cc99422708021a177c79a1815bb8b.md)

[Firefish Protocol](../Firefish%20Protocol%20dce0dc15d32f416d84a075ae6f04dbd4.md)

[FAQs](../FAQs%20c5cfabe806e14d1abf6245a88ef5119f.md)

[What’s New](../What%E2%80%99s%20New%203d042abe2a4c42c0a24d0641c9890382.md)

[Bitcoin: The Ultimate Collateral](../Bitcoin%20The%20Ultimate%20Collateral%20157cc994227080a69d2bdd98f91acfbc.md)

[Media](../Media%2091b0bc3bfda946d1a768ba5613259c64.md)

[Legal](../Legal%206b6c868fcfb74d2bb389c0aa744f9ece.md)

[Deutsch](../Deutsch%20604df8215dd449539ce8f1abab2aaa14.md)

[Italiano](../Italiano%2015acc994227080d397b6dff1bbe61c0c.md)

[Español](../Espan%CC%83ol%201a1cc994227080fdabcee7a36c3ae0e5.md)

[Česky](../C%CC%8Cesky%207adcc66a0ffc46b580bb1f50c5391c0b.md)

[繁體中文](../%E7%B9%81%E9%AB%94%E4%B8%AD%E6%96%87%201a4cc9942270807d9706ef29c958c659.md)

**📩 [Contact Us](mailto:hello@firefish.io?subject=Hello%20Firefish)**

<aside>
🔥

El Protocolo Firefish permite el escrow de Bitcoin para préstamos colateralizados entre pares, liquidados en moneda fiduciaria.

</aside>

<aside>
🔥

El protocolo utiliza las capacidades de scripting de Bitcoin, como los esquemas multifirma y las Transacciones Parcialmente Firmadas de Bitcoin (PSBT).

</aside>

<aside>
🔥

El objetivo del protocolo es eliminar el riesgo y los requisitos de confianza en la interacción entre las partes.

</aside>

### **Sujetos del Protocolo Firefish**

- **Prestatario**: Persona o entidad que posee bitcoin y busca liquidez en moneda fiduciaria.
- **Prestamista**: Persona o entidad con excedente de liquidez en moneda fiduciaria que desea ganar intereses.
- **Liquidador**: Entidad encargada por el prestamista para liquidar la garantía en caso de incumplimiento por parte del prestatario. El prestamista también puede actuar como liquidador.
- **Oracle de Precio**: Un oráculo que certifica el tipo de cambio del bitcoin. Puede ser una institución confiable, un oráculo público o un conjunto de instituciones y oráculos públicos. Actualmente, el Oracle de Precio es operado por Firefish.
- **Oracle de Pago**: Un oráculo que certifica si se ha realizado un pago fiduciario (p. ej., el reembolso del préstamo). Actualmente, el Oracle de Pago es operado por Firefish.
- **Firefish**: Una plataforma que conecta a prestatarios y prestamistas y facilita su interacción segura.

### **Contrato de Depósito en Garantía (Escrow)**

El contrato de depósito en garantía es una parte central del Protocolo Firefish. Permite bloquear el bitcoin como garantía en una dirección específica y realizar acciones adicionales solo cuando:

1. Se cumplen ciertas condiciones (como el reembolso del préstamo).
2. De una forma específica (la salida del contrato solo puede dirigirse a direcciones predeterminadas).

El contrato puede representarse esquemáticamente como sigue:

La primera capa és la transacción tx_escrow, que toma los UTXOs del Prestatario como entrada y los bloquea en una multifirma 3-de-3 con las claves de:

- Oráculo de Precio
- Oráculo de Pago
- Clave efímera del Prestatario (B-EPH)

El resultado de la transacción tx_escrow representa el escrow mismo, y es donde el bitcoin permanece durante el préstamo.

La segunda capa es representada por un conjunto de transacciones prefirmadas (PSBTs) que permiten el resultado the tx_escrow ser gastado, es decir, desbloquear los fondos del colateral y que sean enviados a la dirección predeterminada. Esto ocurre bajo condiciones específicas (como el reembolso del préstamo) y cuando las firmas restantes son añadidas al PSBT.

| **Estado del contrato** | **PSBT usado** | **Descripción** | **Firmas restantes** | **Salida a** |
| --- | --- | --- | --- | --- |
| Reembolso | tx_repayment | Préstamo totalmente reembolsado en la fecha de vencimiento | Oráculo de Pago | Prestatario-B |
| Incumplimiento | tx_default | El prestatario no cumplió con el reembolso | Oráculo de Pago | Liquidador |
| Liquidación | tx_liquidation | Valor insuficiente de la garantía | Oráculo de Pago, Oráculo de Precio | Liquidador |
| Cancelación | tx_repayment | El prestamista no proporcionó los fondos del préstamo en absoluto | Oráculo de Pago | Prestatario-B |
| Recuperación | tx_recover | Si los oráculos o la plataforma no cooperan o dejan de existir, el prestatario puede recuperar la garantía después de un bloqueo temporal establecido, sin necesidad de interactuar con la otra parte | Ninguna, acabado el bloqueo temporal | Prestatario-B |

El Prestatario utiliza dos tipos de claves dentro del protocolo: 1) B representa un par de claves totalmente controladas por el Prestatario (por ejemplo, almacenadas en una billetera de hardware). Todas las salidas del depósito en garantía (escrow) designadas para el prestatario se dirigen aquí. 2) La clave B-EPH, que representa un par de claves efímeras creadas en la aplicación Firefish y utilizadas para firmar durante la configuración del contrato. Estas claves no son necesarias después de completar la configuración y se eliminan.

- Todas las PSBTs están diseñadas para ser pre-firmadas antes de que la transacción tx_escrow sea transmitida por el Prestatario y se financie el escrow. Esto permite al Prestatario tener control sobre todas las formas posibles en las que el contrato de escrow puede gastarse.
- Para construir una transacción, se deben conocer sus entradas y salidas.
- En este contexto, para construir la tx_escrow y las PSBTs, es necesario conocer las entradas de la tx_escrow, que son los UTXOs no gastados del Prestatario que desean utilizarse como garantía.

### **Contrato de Prefinanciación**

Para hacerlo práctico para los Prestatarios que utilizan una variedad de infraestructuras de Bitcoin (billeteras hardware, billeteras software, billeteras custodiales), proponemos utilizar una transacción adicional en la cadena para consolidar y confirmar los UTXOs que se utilizarán para financiar el contrato de escrow.

La transacción adicional on-chain, denominada tx_prefund, precede a la transacción tx_escrow y puede representarse esquemáticamente de la siguiente manera:

![image.png](../Italiano%2015acc994227080d397b6dff1bbe61c0c/Protocollo%20Firefish%2015bcc994227080fcac38fcd53502cc14/image%201.png)

Esta estructura facilita que los Prestatarios interactúen con el protocolo Firefish: envían su colateral en bitcoin a una dirección específica, A_prefund.

A_prefund representa una condición de gasto compleja:

- Una multisig 3-de-3 (clave efímera del Prestatario B-EPH, Oráculo de Precios, Oráculo de Pagos).
- Firma con la clave privada del Prestatario - B (almacenada en su propia infraestructura, típicamente en una billetera de hardware).
- Firma con la clave efímera del Prestatario B-EPH después de un bloqueo temporal establecido.

La rama de la multisig se utiliza en la transacción tx_escrow, mientras que las otras dos opciones proporcionan seguridad adicional y reducen la confianza necesaria entre las partes.

<aside>
🔥

Reconocemos que el contrato de prefinanciación puede ser omitido y que el escrow podría financiarse directamente desde la infraestructura de la billetera del prestatario. Sin embargo, esto requeriría que los usuarios y sus billeteras lleven a cabo operaciones avanzadas, como el control de monedas, la exportación de claves XPUB y la gestión de conjuntos de UTXO. Mediante la integración directa con billeteras (hardware) populares, los usuarios podrían acceder al escrow directamente sin comprometer la experiencia de usuario.

</aside>

Protocolo Firefish, prefinanciación y escrow:

![image.png](../Italiano%2015acc994227080d397b6dff1bbe61c0c/Protocollo%20Firefish%2015bcc994227080fcac38fcd53502cc14/image%202.png)

### **Aplicación Firefish**

El protocolo Firefish está diseñado para minimizar riesgos y reducir la necesidad de tener confianza mutua entre las partes. Para aprovechar completamente la seguridad que ofrecen los contratos de prefinanciación y escrow, los Prestatarios deben ser capaces de construir direcciones y transacciones, o verificar que se han implementado correctamente de acuerdo con el protocolo.

Con el fin de hacer el protocolo accesible a Prestatarios con diferentes niveles de habilidades técnicas y que usan diversos tipos de billeteras, se ha desarrollado la Firefish App. Este es un software de billetera Bitcoin diseñado específicamente, que incluye las siguientes características:

- El software (App) es de código abierto, lo que permite al Prestatario compilarlo y ejecutarlo en su propio hardware (ya sea en un ordenador de escritorio o dentro de un navegador web).
- La App puede construir direcciones y transacciones complejas de acuerdo con el protocolo Firefish.
- La App genera pares de claves efímeras, firma transacciones y almacena los datos necesarios (como los PSBTs).

### **El Proceso**

A continuación, se detalla el proceso simplificado de configuración del escrow y la duración del préstamo:

1. Los participantes del protocolo intercambian de forma segura los datos necesarios (como los detalles del préstamo) y las claves públicas.
2. Utilizando la Firefish App, el Prestatario genera A_prefund (y el correspondiente script de bloqueo).
3. El Prestatario envía el colateral en bitcoin a A_prefund usando su propia billetera.
4. Usando la Firefish App, el Prestatario construye tx_escrow y los PSBTs, y añade sus propias firmas a los PSBTs.
5. Tras la verificación, los Oráculos firman tx_escrow y los PSBTs según lo establecido en el protocolo.
6. El Prestatario verifica que todas las transacciones y firmas están completas. Tras la verificación, firma tx_escrow.
7. El Prestatario descarta la clave B-EPH, asegurando que las opciones de gasto para el escrow se limitan a las definidas por los PSBTs.
8. El escrow queda configurado correctamente.
9. Durante la vigencia del préstamo, si ocurre algún evento (como la liquidación), el Oráculo añade la firma faltante necesaria al PSBT y lo transmite a la red.

### **Beneficios Clave del Protocolo Firefish**

- El escrow tiene una naturaleza determinista. Solo puede ser gastado en la dirección del Prestatario o del liquidador, pero no en ninguna otra.
- El Prestamista no necesita poseer material criptográfico ni interactuar con la red Bitcoin, lo que permite a entidades no nativas de Bitcoin utilizar la plataforma Firefish.
- El Prestatario solo necesita estar en línea e interactuar con la plataforma durante la fase de configuración del escrow. Posteriormente, no es necesario que firmen nada más ni mantengan las claves en línea.
- Si los Oráculos dejan de cooperar durante cualquier fase del préstamo, el Prestatario puede gastar los bitcoins en su propia dirección una vez que expire el bloqueo temporal (timelock).
- La interacción del Prestatario con el protocolo se reduce a dos pasos básicos: 1) proporcionar su dirección de "retorno", y 2) enviar el colateral a otra dirección. La complejidad técnica, como la firma de los PSBTs, es gestionada por la aplicación Firefish, que será completamente de código abierto y, preferiblemente, compilada en el dispositivo del Prestatario.
- Gracias a su simplicidad, Firefish puede ser utilizado tanto por propietarios de billeteras de hardware como por billeteras de Cálculo Multi-Partes (MPC, utilizados por instituciones) e incluso soluciones custodiales (aunque estas últimas no son recomendadas).

### **Posibles Inconvenientes del Protocolo Firefish**

- Como en cualquier sistema de préstamos en criptomonedas, se requiere cierto nivel de confianza en que los Oráculos proporcionen datos correctos dentro de Firefish. Sin embargo, creemos que esta necesidad de confianza puede minimizarse a nivel de implementación (por ejemplo, descentralizando el oráculo de precios, utilizando DLCs y técnicas de anonimización aplicadas al oráculo de pagos).
- El contrato no puede ser cancelado, incluso si el Prestamista y el Prestatario están de acuerdo, sin la cooperación de las entidades Oráculo.
- La complejidad de la solución propuesta y las ventajas en términos de seguridad y beneficios comerciales pueden no ser inmediatamente evidentes.
- El Prestamista debe tener cierto nivel de confianza en el Liquidador (i.e. cuanto a que devolverá los fondos después de liquidar los bitcoins). Este riesgo puede minimizarse, por ejemplo, si el Liquidador proporciona alguna forma de garantía.

← [Atrás](https://www.notion.so/Espa-ol-15ecc99422708052b015faed317e2d50?pvs=21)