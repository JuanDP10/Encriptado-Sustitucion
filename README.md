# 🔐 Encriptado por Sustitución

Este proyecto es una aplicación que permite encriptar y desencriptar texto utilizando un cifrado por sustitución. Los usuarios pueden introducir un texto, especificar una clave de sustitución personalizada (opcional) y generar el texto cifrado o descifrado.

## ✨ Características

- ✅ Permite encriptar texto ingresado por el usuario.
- 🔄 Proporciona la opción de desencriptar texto previamente cifrado.
- 🔑 Soporte para claves de sustitución personalizadas o el uso de una clave por defecto.
- 🖥️ Interfaz amigable y fácil de usar con botones para encriptar, desencriptar y copiar el texto resultado.

## 🔑 Clave por Defecto

Cuando no se proporciona una clave de sustitución personalizada, el programa utiliza la siguiente clave generada automáticamente:

`DEFAULTBCGHIJKMNOPQRSVWXYZ`

Esta clave se genera tomando la palabra "DEFAULT" (sin caracteres repetidos) seguida del resto de las letras del alfabeto en orden alfabético excluyendo las letras ya presentes en "DEFAULT".

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Para la estructura de la aplicación.
- **CSS3**: Para el diseño y estilo visual.
- **JavaScript (ES6)**: Para la lógica de encriptación y desencriptación.

## 📁 Archivos Principales

1. **index.html**: Estructura de la interfaz de usuario.
2. **styles.css**: Estilos visuales de la aplicación.
3. **script.js**: Contiene la clase `SubstitutionCipher` y la lógica de manipulación de eventos.

## 📂 Estructura del Proyecto

```plaintext
Encriptado-Sustitucion/
├── index.html
├── styles.css
├── script.js
```

## 🧩 Clase `SubstitutionCipher`

La clase `SubstitutionCipher` es el corazón del proyecto. Implementa las siguientes funcionalidades:

### Métodos

1. **`constructor(key = 'default')`**:
   - Inicializa el objeto con el alfabeto por defecto y genera la clave personalizada (o usa la clave por defecto).

2. **`generateKey(customKey)`**:
   - Genera la clave de sustitución a partir de una palabra clave personalizada.
   - Elimina caracteres no alfabéticos y duplica las letras.

3. **`encrypt(text)`**:
   - Convierte el texto plano en texto cifrado utilizando la clave de sustitución.

4. **`decrypt(text)`**:
   - Convierte el texto cifrado de vuelta a texto plano utilizando la clave de sustitución invertida.

5. **`transform(text, sourceAlphabet, targetAlphabet)`**:
   - Realiza la transformación de caracteres según los alfabetos de origen y destino.

## 🚀 Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/JuanDP10/Encriptado-Sustitucion.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa el texto que deseas encriptar o desencriptar en el campo correspondiente.
4. (Opcional) Especifica una clave de sustitución personalizada.
5. Haz clic en "ENCRIPTAR" para cifrar el texto o en "DESENCRIPTAR" para descifrarlo.
6. Copia el resultado usando el botón "COPIAR" si es necesario.

## 💡 Ejemplo de Uso

### Caso 1: Sin Clave Personalizada

- **Texto de entrada**: `hola mundo`
- **Clave generada**: `DEFAULTBCGHIJKMNOPQRSVWXYZ`
- **Texto cifrado**: `BMID JSKAM`

### Caso 2: Con Clave Personalizada

- **Texto de entrada**: `hola mundo`
- **Clave personalizada**: `mango`
- **Clave generada**: `MANGOBCDEFHIJKLPQRSTUVWXYZ`
- **Texto cifrado**: `DLIM JUKGL`
  
## 📸 Captura de pantalla
![image](https://github.com/user-attachments/assets/c5f5efc1-d77d-4507-a717-9e041138d974)


## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo `LICENSE` para más detalles.
