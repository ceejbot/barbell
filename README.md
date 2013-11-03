# Barbell

A [hoodie](http://hood.ie/) app for tracking a 5x5 lifting program.

Still in early development mode. 

## Implementation notes

### Interactions

#### Setup

Interview for name & prefs on first run. Settings gear will revisit all choices.

Display in Metric vs American weights. (All weights recorded in pounds; conversion at moment of display.)

Rest time in milliseconds; defaults to 3 * 60 * 1000.

#### Record a workout

Record a new workout. 

- Show a page with the appropriate workout with suggested starting weights + reminder of reps per set.
- Workout is the next one in the cycle.
- If success in last iteration of the lift, weight is bumped up 5lbs/2.5 kg.

At workout start, first set is shown. Name of lift in big type, followed by total weight. (Can even suggest exactly what weights to put on the bar.) After that "5 reps", then the button pair. This display should comfortably take up most of an iPhone screen.

Each set has a checkmark / cancel button pair next to it. The user presses checkmark to indicate success in all lifts, cancel to indicate failure. If failure, user can optionally enter how many reps were successes.s

When button pressed, rest timer starts. Countdown + "stop and move on" button shown.

At end of rest timer, next set is shown.

At end of workout, total time elapsed + congratulatory message.

#### Edit workouts

- Add/remove lifts from workouts.  
- Add new lifts to available list.  
- Add/remove workouts.   

#### History

View workout history. Graphs for each lift? Some kind of encouraging visualization of progress over time.

### Data tracked

Two workouts: A, B. Each workout has 3 lifts.

Lift data structure: 

- uid: probably auto-generated by couch
- title: string; short, shown everywhere in UI
- 3reps: boolean; this lift gets sets of 3 reps because of intensity

User data:

```javascript
{
    name: 'Human Name',
    tz: offset-from-gmt,
    workouts:
    {
        A: [ uid1, uid2, uid3 ],
        B: [ uid1, uid4, uid5 ]
    },
    lifts:
    {
        uid1: { max: weight-in-lbs, ts: last-time-lifted },
        uid2: { max: weight-in-lbs, ts: last-time-lifted },
        // etc;
    }
}
```

History: Array of workouts.

Workout data structure:

```javascript
{
    label: "A",
    ts: ms-since-epoch,
    lifts:
    {
        uid1:
        {
            weight: weight-in-lbs,
            done: boolean
        },
        uid2: { weight: w, done: bool },
        uid3: { weight: w, done: bool }
    }
}
```

### Defaults

Canned list of well-known lifts.

    back squat, false  
    deadlift,  true  
    bench press, false  
    overhead press, false  
    Pendlay row, false  
    front squat, false  
    overhead squat, false  
    power clean, true  
    good morning, false  
    RFESS, false  
    hip bridge, false  
    kb swings, false 
    kb snatches, false 
    Turkish get-ups, true  
    push-press, false  
    split jerk, true  
    snatch, true  

Default starting point:

__A:__ squat, bench press, deadlift, 45# each.  
__B:__ squat, overhead press, pendlay row, 45# each.   

Default measure: in pounds.

