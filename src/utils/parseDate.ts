export default function parseDate(s: string): string {
  const dateMap = {
    '00': ['january', 'январь'],
    '01': ['february', 'февраль'],
    '02': ['march', 'март'],
    '03': ['april', 'апрель'],
    '04': ['may', 'май'],
    '05': ['june', 'июнь'],
    '06': ['july', 'июль'],
    '07': ['august', 'август'],
    '08': ['september', 'сентябрь'],
    '09': ['october', 'октябрь'],
    '10': ['november', 'ноябрь'],
    '11': ['december', 'декабрь']
  };
  const m = s.split(' ')[0];
  for (const k in dateMap) {
    if (dateMap[k].includes(m)) {
      return `${s.split(' ')[1]}/${k}/01`;
    }
  }
  return s;
}