export interface ScheduleResult {
  isWork: string[];
  isRest: string[];
}

export function getWorkSchedule(
  startDate: Date,
  endDate: Date,
  workSchedule: string,
): ScheduleResult {
  const result: ScheduleResult = {
    isWork: [],
    isRest: [],
  };

  const dayCount =
    Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;
  const [workDays, restDays] = workSchedule.split('/').map(Number);

  let isWorkDay = true;
  let remainingWorkDays = workDays;
  let remainingRestDays = restDays;

  for (let i = 0; i < dayCount; i++) {
    const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    const currentDateString = currentDate.toISOString().split('T')[0]; // Отсекаем информацию о времени

    if (isWorkDay && remainingWorkDays > 0) {
      result.isWork.push(currentDateString);
      remainingWorkDays--;
    } else if (!isWorkDay && remainingRestDays > 0) {
      result.isRest.push(currentDateString);
      remainingRestDays--;
    }

    if (remainingWorkDays === 0) {
      isWorkDay = false;
      remainingWorkDays = workDays;
    } else if (remainingRestDays === 0) {
      isWorkDay = true;
      remainingRestDays = restDays;
    }
  }

  return result;
}
