const classifyPatient = require('./quiz');

test('ตรวจสอบกรณีปกติ', () => {
    const result = classifyPatient(120, 80, 90);
    expect(result).toBe("White")
});

test('ตรวจสอบกลุ่มเสี่ยง ±', () => {
    const result = classifyPatient(135, 85, 110);
    expect(result).toBe("Green")
});

test('ตรวจสอบป่วย ระดับ 1', () => {
    const result = classifyPatient(170, 95, 145);
    expect(result).toBe("Yellow")
});

test('ตรวจสอบป่วย ระดับ 2', () => {
    const result = classifyPatient(185, 100, 165);
    expect(result).toBe("Orange")
});

test('ตรวจสอบป่วย ระดับ 3', () => {
    const result = classifyPatient(190, 110, 220);
    expect(result).toBe("Red")
});