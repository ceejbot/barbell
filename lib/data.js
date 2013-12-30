// The core data we toss around.

function Lift()
{

}

function Template()
{

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
