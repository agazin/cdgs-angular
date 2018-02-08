export const WEEKDAYS = {
    th: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    en: ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'],
};

export const getWeekDaysByLocale = (locale: string) => WEEKDAYS[locale];
