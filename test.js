const expect = require('chai').expect;
const Mtrx = require('mtrx');

describe('Тестування бібліотеки mtrx', () => {
    it('#1 Генерування матриці без аргументів', () => {
        const m = new Mtrx();
        expect(Mtrx.isMtrx(m)).to.deep.equal(true);
    });
  
    it('#2 Генерування квадратної матриці з визначеною розмірністю', () => {
        const m = new Mtrx(3);
        expect(m.rows == m.cols).to.deep.equal(true);
    });
    

    it('#3 Отримання значення з матриці з вказанням її позиції', () => {
        const m = new Mtrx([[2,3],[10,8]]);
        const val = m.get(1,0);
        expect(val).to.deep.equal(10);
    });


    it('#4 Обчислення визначника/детермінанту матриці', () => {;
        const m = new Mtrx([[3,1],[2,7]]);
        const d = m.det;
        expect(d).to.deep.equal(19);
    });


    it('#5 Обчислення рангу матриці', () => {
        const m = new Mtrx([[3,1],[2,7]]);
        const r = m.rank;
        expect(r).to.deep.equal(2);
    });


    it('#6 Кофакторинг матриці', () => {
        const m = new Mtrx([[1,2,3],[5,6,7],[10,11,12]]);    
        const cm = m.cof(0,0);
        expect(cm).to.deep.equal([[6,7],[11,12]]);
    });


    it('#7 Порівняння розмівів матриць', () => {
        const m = new Mtrx([[1,2,3],[5,6,7],[10,11,12]]);    
        const n = new Mtrx([[2,6,4],[4,3,2],[0,0,0]]);
        expect(Mtrx.isSameShape(m,n)).to.deep.equal(true);
    });


    it('#8 Обчислення суми двох матриць', () => {
        const m = new Mtrx([[1,1,3],[2,1,2]]);
        const n = new Mtrx([[1,1,2],[0,1,0]]);
        const summ = Mtrx.add(m,n);
        expect(summ).to.deep.equal([[2,2,5],[2,2,2]]);
    });


    it('#9 Множення матриці на число', () => {
        const m = new Mtrx([[1,1,3],[2,1,2]]);
        const num = 2;
        const mul = Mtrx.mul(m,num);
        expect(mul).to.deep.equal([[2,2,6],[4,2,4]]);
    });


    it('#10 Множення двох матриць', () => {
        const m = new Mtrx([[1,2],[2,1]]);
        const n = new Mtrx([[1,1],[1,2]]);
        const mul = Mtrx.mul(m,n);
        expect(mul).to.deep.equal([[3,5],[3,4]]);
    });
});

