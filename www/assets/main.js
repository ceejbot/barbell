var hoodie  = new Hoodie();

hoodie.store.findAll('workout')
.then(function(workouts)
{
	workouts.sort(sortByDate).forEach(addWorkout);
});

function sortByDate(left, right)
{
	return left.created > right.created;
}

function addWorkout(workout)
{
	$('#workouts').append('<li>' + workout.created + '</li');
}

function clearWorkouts()
{
	$('#workouts').html('');
}

hoodie.store.on('add:workout', addWorkout);
hoodie.account.on('signout', clearWorkouts);

// handle creating a new task
$('#todoinput').on('keypress', function(event)
{
	if (event.keyCode == 13) // ENTER
	{
		hoodie.store.add('workout', { title: event.target.value });
		event.target.value = '';
	}
})
