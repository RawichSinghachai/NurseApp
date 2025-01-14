// Function to analyze weight
export const analysis_weight = (age: number, weight: number): string => {
  // Age 0-6 months
  if (age >= 0 && age <= 0.25) {
    if (weight <= 4) return "น้ำหนักน้อย";
    if (weight > 4 && weight <= 7) return "น้ำหนักปกติ";
    if (weight > 7) return "น้ำหนักมากกว่าปกติ";
  } else if (age > 0.25 && age <= 0.5) {
    if (weight <= 5) return "น้ำหนักน้อย";
    if (weight > 5 && weight <= 8) return "น้ำหนักปกติ";
    if (weight > 8) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 0.5 && age <= 0.75) {
    if (weight <= 6.5) return "น้ำหนักน้อย";
    if (weight > 6.5 && weight <= 10) return "น้ำหนักปกติ";
    if (weight > 10) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 0.75 && age <= 1) {
    if (weight <= 7) return "น้ำหนักน้อย";
    if (weight > 7 && weight <= 11) return "น้ำหนักปกติ";
    if (weight > 11) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 1 && age <= 1.5) {
    if (weight <= 8) return "น้ำหนักน้อย";
    if (weight > 8 && weight <= 12.5) return "น้ำหนักปกติ";
    if (weight > 12.5) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 1.5 && age <= 2) {
    if (weight <= 9) return "น้ำหนักน้อย";
    if (weight > 9 && weight <= 14) return "น้ำหนักปกติ";
    if (weight > 14) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 2 && age <= 2.5) {
    if (weight <= 10) return "น้ำหนักน้อย";
    if (weight > 10 && weight <= 15.5) return "น้ำหนักปกติ";
    if (weight > 15.5) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 2.5 && age <= 3) {
    if (weight <= 11) return "น้ำหนักน้อย";
    if (weight > 11 && weight <= 17) return "น้ำหนักปกติ";
    if (weight > 17) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 3 && age <= 3.5) {
    if (weight <= 11.5) return "น้ำหนักน้อย";
    if (weight > 11.5 && weight <= 18.5) return "น้ำหนักปกติ";
    if (weight > 18.5) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 3.5 && age <= 4) {
    if (weight <= 12.5) return "น้ำหนักน้อย";
    if (weight > 12.5 && weight <= 20) return "น้ำหนักปกติ";
    if (weight > 20) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 4 && age <= 4.5) {
    if (weight <= 13) return "น้ำหนักน้อย";
    if (weight > 13 && weight <= 21.5) return "น้ำหนักปกติ";
    if (weight > 21.5) return "น้ำหนักมากกว่าปกติ";
  } else if (age >= 4.5 && age <= 5) {
    if (weight <= 14) return "น้ำหนักน้อย";
    if (weight > 14 && weight <= 23) return "น้ำหนักปกติ";
    if (weight > 23) return "น้ำหนักมากกว่าปกติ";
  }
  return "";
};

// Function to analyze weight and height
export const analysis_weight_height = (
  age: number,
  height: number,
  weight: number
): string => {
  if (age >= 2 && age <= 5) {
    if (height >= 70 && height < 75) {
      if (weight <= 6) return "ค่อนข้างผอม";
      if (weight > 6 && weight <= 9) return "สมส่วน";
      if (weight > 9) return "อ้วน";
    } else if (height >= 75 && height < 80) {
      if (weight <= 7) return "ค่อนข้างผอม";
      if (weight > 7 && weight <= 10) return "สมส่วน";
      if (weight > 10) return "อ้วน";
    } else if (height >= 80 && height < 85) {
      if (weight <= 8) return "ค่อนข้างผอม";
      if (weight > 8 && weight <= 11.5) return "สมส่วน";
      if (weight > 11.5) return "อ้วน";
    } else if (height >= 85 && height < 90) {
      if (weight <= 9) return "ค่อนข้างผอม";
      if (weight > 9 && weight <= 13) return "สมส่วน";
      if (weight > 13) return "อ้วน";
    } else if (height >= 90 && height < 95) {
      if (weight <= 10) return "ค่อนข้างผอม";
      if (weight > 10 && weight <= 14) return "สมส่วน";
      if (weight > 14) return "อ้วน";
    } else if (height >= 95 && height < 100) {
      if (weight <= 11) return "ค่อนข้างผอม";
      if (weight > 11 && weight <= 16) return "สมส่วน";
      if (weight > 16) return "อ้วน";
    } else if (height >= 100 && height < 105) {
      if (weight <= 12) return "ค่อนข้างผอม";
      if (weight > 12 && weight <= 17) return "สมส่วน";
      if (weight > 17) return "อ้วน";
    } else if (height >= 105 && height < 110) {
      if (weight <= 14) return "ค่อนข้างผอม";
      if (weight > 14 && weight <= 19) return "สมส่วน";
      if (weight > 19) return "อ้วน";
    } else if (height >= 110 && height < 115) {
      if (weight <= 15) return "ค่อนข้างผอม";
      if (weight > 15 && weight <= 21) return "สมส่วน";
      if (weight > 21) return "อ้วน";
    } else if (height >= 115 && height < 120) {
      if (weight <= 17) return "ค่อนข้างผอม";
      if (weight > 17 && weight <= 24) return "สมส่วน";
      if (weight > 24) return "อ้วน";
    } else if (height >= 120 && height < 125) {
      if (weight <= 19) return "ค่อนข้างผอม";
      if (weight > 19 && weight <= 26) return "สมส่วน";
      if (weight > 26) return "อ้วน";
    } else if (height >= 125 && height < 130) {
      if (weight <= 20) return "ค่อนข้างผอม";
      if (weight > 20 && weight <= 29) return "สมส่วน";
      if (weight > 29) return "อ้วน";
    } else if (height >= 130 && height < 135) {
      if (weight <= 21) return "ค่อนข้างผอม";
      if (weight > 21 && weight <= 29) return "สมส่วน";
      if (weight > 29) return "อ้วน";
    } else if (height >= 140 && height < 145) {
      if (weight <= 25.5) return "ค่อนข้างผอม";
      if (weight > 25.5 && weight <= 40) return "สมส่วน";
      if (weight > 40) return "อ้วน";
    }
  }
  return "ไม่อยู่ในเกณฑ์";
};
