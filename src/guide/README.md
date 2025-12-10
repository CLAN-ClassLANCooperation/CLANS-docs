---
title: 指南
icon: lightbulb
---

## 功能亮点

```TypeScript
// 定义学生接口
interface Student {
  id: number;
  name: string;
  scores: number[];
}

// 学生成绩管理类
class GradeManager {
  private students: Student[] = [];

  // 添加学生
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // 计算某个学生平均成绩
  getAverageScore(studentId: number): number | null {
    const student = this.students.find(s => s.id === studentId);
    if (!student) return null;
    const total = student.scores.reduce((a, b) => a + b, 0);
    return total / student.scores.length;
  }

  // 获取全班平均成绩
  getClassAverage(): number {
    const allScores = this.students.flatMap(s => s.scores);
    const total = allScores.reduce((a, b) => a + b, 0);
    return total / allScores.length;
  }
}

// 使用示例
const manager = new GradeManager();
manager.addStudent({ id: 1, name: "Alice", scores: [90, 85, 92] });
manager.addStudent({ id: 2, name: "Bob", scores: [78, 82, 88] });

console.log("Alice 平均成绩:", manager.getAverageScore(1));
console.log("全班平均成绩:", manager.getClassAverage());
```