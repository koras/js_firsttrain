/*for (i = 0; i < 8; i++)
{
    for (j = 0; j < 8; j++)
    {
        if (i % 2 == 0 && j % 2 == 0)
            console.log('#');
        if (i % 2 == 0 && j % 2 != 0)
            console.log(' ');
        if (i % 2 != 0 && j % 2 == 0)
            console.log(' ');
        if (i % 2 != 0 && j % 2 != 0)
            console.log("#");
    }
    console.log('\n')
} */
let board = "";

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0)
            board += ' ';
        else
            board += '#';
    }
    board += '\n';
}
console.log(board);
