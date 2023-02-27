/**
 * @param total - максимальное количество цветов
 * @return функция вощвращающая string содержащая в себе hex код цвета
 * */

export default function getUniqueColorGenerator(total = 1000) {
    //начинаем с синего цвета
    let curColor = parseInt("0000FF", 16);
    //высчитываем шаг на который будет изменяться цвет при каждом вызове
    const step = Math.floor(parseInt("FFFF00", 16) / total);

    return function () {
        let val = curColor.toString(16);
        while (val.length < 6) {
            val = "0" + val;
        }

        curColor += step;

        return val.toUpperCase();
    }
}
