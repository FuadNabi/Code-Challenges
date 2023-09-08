Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their IDs.

Example

There are two each of type and one sighting of each type. Pick the lower of the two types seen twice: type.

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted
Returns

int: the lowest type ID of the most frequently sighted birds
Input Format

The first line contains an integer, the size of.
The second line is described  as  space-separated integers, each a type number of the bird sighted.

Constraints

Sample Input 0

1 4 4 4 5 3

Sample Output 0
4

Sample Input 1
1 2 3 4 5 4 3 2 1 3 4

Sample Output 1
3
