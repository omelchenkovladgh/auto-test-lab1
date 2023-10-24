const expect = require('chai').expect;
const Mtrx = require('mtrx');

describe('Тестування бібліотеки mtrx', () => {
    it('#1 Генерування матриці без аргументів', () => {
        const m = new Mtrx();
        console.log(m);

        expect(Mtrx.isMtrx(m)).to.deep.equal(true);
    });


    it('#2 Генерування матриці зі значенняи', () => {
        console.log('\n');
        
        const m = new Mtrx([23.030]);
        console.log(m);

        expect(Mtrx.isMtrx(m)).to.deep.equal(true);
    });

  
    it('#3 Генерування квадратної матриці з визначеною розмірністю', () => {
        console.log('\n');

        const m = new Mtrx(3);
        console.log(m);

        expect(m.rows == m.cols).to.deep.equal(true);
    });


    it('#4 Генерування неквадратної матриці з визначеною розмірністю', () => {
        console.log('\n');

        const m = new Mtrx(4,2);
        console.log(m);

        expect(m.rows == m.cols).to.deep.equal(false);
    });

    
    it('#5 Створення матриці з нулями та зміна її значень', () => {
        console.log('\n');

        const m = Mtrx.zeros(2,2);
        console.log(m);

        m.set(0,1,10);
        m.set(1,1,4);
        console.log(m);

        expect(m).to.deep.equal([[0,10],[0,4]]);
    });


    it('#6 Отримання значення з матриці з вказанням її позиції', () => {
        console.log('\n');

        const m = new Mtrx([[2,3],[10,8]]);
        console.log(m);

        const val = m.get(1,0);
        console.log("m[1][0]: " + val);
        
        expect(val).to.deep.equal(10);
    });


    it('#7 Обчислення визначника/детермінанту матриці', () => {
        console.log('\n');

        const m = new Mtrx([[3,1],[2,7]]);
        console.log(m);

        const d = m.det;
        console.log("Визначник: " + d);

        expect(d).to.deep.equal(19);
    });


    it('#8 Обчислення рангу матриці', () => {
        console.log('\n');

        const m = new Mtrx([[3,1],[2,7]]);
        console.log(m);

        const r = m.rank;
        console.log("Ранг: " + r);

        expect(r).to.deep.equal(2);
    });


    it('#9 Кофакторинг матриці', () => {
        console.log('\n');
        
        const m = new Mtrx([[1,2,3],[5,6,7],[10,11,12]]);    
        const cm = m.cof(0,0);
        console.log("Нова матриця:");
        console.log(cm);

        expect(cm).to.deep.equal([[6,7],[11,12]]);
    });


    it('#10 Порівняння розмівів матриць', () => {
        console.log('\n');

        const m = new Mtrx([[1,2,3],[5,6,7],[10,11,12]]);    
        const n = new Mtrx([[2,6,4],[4,3,2],[0,0,0]]);

        expect(Mtrx.isSameShape(m,n)).to.deep.equal(true);
    });


    it('#11 Обчислення суми двох матриць', () => {
        console.log('\n');
        
        const m = new Mtrx([[1,1,3],[2,1,2]]);
        const n = new Mtrx([[1,1,2],[0,1,0]]);
        
        const summ = Mtrx.add(m,n);
        console.log("MatrixSumm:");
        console.log(summ);

        expect(summ).to.deep.equal([[2,2,5],[2,2,2]]);
    });


    it('#12 Множення матриці на число', () => {
        console.log('\n');

        const m = new Mtrx([[1,1,3],[2,1,2]]);
        const num = 2;

        const mul = Mtrx.mul(m,num);
        console.log("MatrixMul:");
        console.log(mul);

        expect(mul).to.deep.equal([[2,2,6],[4,2,4]]);
    });


    it('#13 Множення двох матриць', () => {
        console.log('\n');

        const m = new Mtrx([[1,2],[2,1]]);
        const n = new Mtrx([[1,1],[1,2]]);

        const mul = Mtrx.mul(m,n);
        console.log("MatrixMul:" + mul);
        console.log(mul);

        expect(mul).to.deep.equal([[3,5],[3,4]]);
    });
});

