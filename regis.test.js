// Модуль для тестирования с помощью Mocha и Chai
const assert = require('chai').assert;

// Описание тестов
describe('Unit Testing for registerUser function', function() {
    
    // Тест: проверка успешной регистрации нового пользователя
    it('Should successfully register a new user', function() {
        // Подготовка данных для теста
        const username = 'testuser';
        const password = 'password123';

        // Вызов функции регистрации пользователя
        const result = registerUser(username, password);

        // Проверка результата
        assert.isTrue(result); // Проверка на истинность (что пользователь успешно зарегистрирован)
    });

    // Тест: проверка неуспешной регистрации пользователя из-за некорректного пароля
    it('Should fail to register user due to invalid password', function() {
        // Подготовка данных для теста
        const username = 'testuser';
        const password = ''; // Некорректный пустой пароль

        // Вызов функции регистрации пользователя
        const result = registerUser(username, password);

        // Проверка результата
        assert.isFalse(result); // Проверка на ложность (что регистрация не удалась из-за некорректного пароля)
    });

    // Тест: проверка неуспешной регистрации пользователя из-за существующего имени пользователя
    it('Should fail to register user due to existing username', function() {
        // Подготовка данных для теста
        const username = 'existinguser'; // Пользователь с таким именем уже существует
        const password = 'password123';

        // Вызов функции регистрации пользователя
        const result = registerUser(username, password);

        // Проверка результата
        assert.isFalse(result); // Проверка на ложность (что регистрация не удалась из-за существующего имени пользователя)
    });
});