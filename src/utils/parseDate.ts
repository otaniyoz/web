export default function parseDate(s: string): string {
  const dateMap = {
    '01': ['january', 'январь'],
    '02': ['february', 'февраль'],
    '03': ['march', 'март'],
    '04': ['april', 'апрель'],
    '05': ['may', 'май'],
    '06': ['june', 'июнь'],
    '07': ['july', 'июль'],
    '08': ['august', 'август'],
    '09': ['september', 'сентябрь'],
    '10': ['october', 'октябрь'],
    '11': ['november', 'ноябрь'],
    '12': ['december', 'декабрь']
  };
  const m = s.split(' ')[0];
  for (const k in dateMap) {
    if (dateMap[k].includes(m)) {
      return `${s.split(' ')[1]}/${k}/01`;
    }
  }
  return s;
}