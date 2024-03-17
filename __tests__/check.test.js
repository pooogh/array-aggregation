import func from '../check.js';

describe('yourFunction', () => {
  test('prints "Hello, world!" to the console', () => {
    // Перехватывает вывод в консоль
    const spy = jest.spyOn(console, 'log').mockImplementation();

    // Вызывает вашу функцию
    func();

    // Проверяет, было ли напечатано сообщение в консоль
    expect(spy).toHaveBeenCalledWith('kek');

    // Восстанавливает оригинальный метод console.log
    spy.mockRestore();
  });
});
