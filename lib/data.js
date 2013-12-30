// The core data we toss around.

function Human(opts)
{
	_.assign(this, opts);

	this.workouts = this.workouts || [];
	this.lifts = this.lifts || [];
}

Human.prototype.name = '';
Human.prototype.workouts = null;
Human.prototype.lifts = null;

function Lift(opts)
{
	_.assign(this, opts);

}

function Template(opts)
{
	_.assign(this, opts);

}

function Workout(opts)
{
	_.assign(this, opts);

	this.lifts = this.lifts || [];
	this.ts = this.ts || Date.now();
}

Workout.prototype.label = '';
Workout.prototype.ts = null;
Workout.prototype.lifts = null;

module.exports =
{
	Lift:     Lift,
	Template: Template,
	Workout:  Workout
};
