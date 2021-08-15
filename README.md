First try at making rock paper scissors, the game works, i'm still not sure
whether the reset function should go in its own button or if i should just
run it at the end of the play function so it resets after each game

-----------------------------------------------------------------------------
Things i learned: 

There's no reason to put the variables used inside a
function inside its parameters. Just referencing the variables inside the
function (Provided they are global variables) is enough and works fine.

Otherwise the first variable inside the parameters seems to take the value from
the onclick event coordinates and the other one returns undefined.


Drawing and thinking the algorithm actually helped me to realize that I could
simplify the game winning conditions to three posibilities instead of six by
using the "&&" operator. Althought at first it seemed trivial for such a
small project, drawing the algorithm was actually incredibly helpful.

Remember that

-----------------------------------------------------------------------------
Things to consider: 

Maybe I could make multiple javascript sheets for the functions to have
shorter less cramped code, althought it wouldn't make much of a difference
in this small project it would build good practice for the future.

(I feel like there's no need for an extra variable for converting the array
to string and it could all fit inside a slice and then to string variable.
I should probably check that out in the future to see if it can be simplified

The reset function is a bit convoluted? I feel like it could be simpler and
less reiterative about all the variables but I'm not sure how to do it) ==> both issues have been solved by creating a randomize element function with variables inside its scope.
