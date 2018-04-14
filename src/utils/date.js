import startOfMonth from 'date-fns/start_of_month'
import _startOfWeek from 'date-fns/start_of_week'
import startOfDay from 'date-fns/start_of_day'
import endOfMonth from 'date-fns/end_of_month'
import _endOfWeek from 'date-fns/end_of_week'
import endOfDay from 'date-fns/end_of_day'

import subDays from 'date-fns/sub_days'
import subWeeks from 'date-fns/sub_weeks'
import subMonths from 'date-fns/sub_months'

const SECONDS_OF_ONE_DAY = 24 * 60 * 60 * 1000

function startOfWeek (date) {
  return _startOfWeek(date, { weekStartsOn: 1 })
}

function endOfWeek (date) {
  return _endOfWeek(date, { weekStartsOn: 1 })
}

export function dateRange (type, prevNum = 0, start = new Date()) {
  let startFn, endFn

  if (type === 'day') {
    startFn = startOfDay
    endFn = endOfDay

    if (prevNum !== 0) {
      start = subDays(start, prevNum)
    }
  } else if (type === 'week') {
    startFn = startOfWeek
    endFn = endOfWeek

    if (prevNum !== 0) {
      start = subWeeks(start, prevNum)
    }
  } else if (type === 'month') {
    startFn = startOfMonth
    endFn = endOfMonth

    if (prevNum !== 0) {
      start = subMonths(start, prevNum)
    }
  } else {
    throw new TypeError(`dateRange: ${type} does not exist`)
  }

  return [
    startFn(start),
    endFn(start)
  ]
}

export function dateRangeByDay (dayNum, start = new Date()) {
  const end = new Date()
  end.setTime(start.getTime() + dayNum * SECONDS_OF_ONE_DAY)
  return [start, end]
}
