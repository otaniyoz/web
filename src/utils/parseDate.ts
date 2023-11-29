export default function parseDate(dateString: string): string {
  // expected date formats:
  // 0. year
  // 1. month year
  // 2. month...month year
  // 3. year...year
  // 4. year...
  const dateMap = {'01': ['january', 'январь'], '02': ['february', 'февраль'], '03': ['march', 'март'], '04': ['april', 'апрель'], '05': ['may', 'май'], '06': ['june', 'июнь'], '07': ['july', 'июль'], '08': ['august', 'август'], '09': ['september', 'сентябрь'], '10': ['october', 'октябрь'], '11': ['november', 'ноябрь'], '12': ['december', 'декабрь']};
  const monthTemplate = new RegExp('[\u0430-\u044fa-z]{3,}', 'gi');
  const yearTemplate = new RegExp('[0-9]{4}', 'gi');
  const monthMatch = dateString.match(monthTemplate);
  const month = (monthMatch !== null && monthMatch !== undefined && monthMatch?.length)?monthMatch[0]:'january';
  const year = dateString.match(yearTemplate)[0];
  // https://stackoverflow.com/a/69198602
  for (const k in dateMap) {
    if (dateMap[k as keyof typeof dateMap].includes(month)) {
      return `${year}/${k}/01`;
    }
  }
  return dateString;
}