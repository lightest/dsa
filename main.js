function revertString(str = "")
{
    // It sucks js strings are immutable.
    let out = new Array(str.length);
    const len = str.length;
    const halfLen = Math.ceil(str.length * .5);

    for (let i = 0; i < halfLen; i++)
    {
        out[ i ] = str[ len - i - 1 ];
        out[ len - i - 1 ] = str[i];
    }

    return out.join("");
}

function reverStringNoob(str = "")
{
    return str.split("").reverse().join("");
}

function isPalindrome(str = "")
{
    const len = str.length;
    const halfLen = Math.floor(len * .5);

    for (let i = 0; i < halfLen; i++)
    {
        if (str[ i ] !== str[ len - i - 1 ])
        {
            return false;
        }
    }

    return true;
}

function nfib(n = 1)
{
    if (n <= 1)
    {
        return n;
    }

    return nfib(n - 1) + nfib(n - 2);
}

const fibLut = [0, 1];
function nfibLut(n = 1)
{
    if (n <= 1)
    {
        return n;
    }

    if (fibLut[ n ] !== undefined)
    {
        return fibLut[ n ];
    }

    if (fibLut[ n - 1 ] === undefined)
    {
        fibLut[ n - 1 ] = nfib(n - 1);
    }

    if (fibLut[ n - 2 ] === undefined)
    {
        fibLut[ n - 2 ] = nfib(n - 2);
    }

    fibLut[ n ] = fibLut[ n - 1 ] + fibLut[ n - 2 ];

    return fibLut[ n ];
}

// TODO: figure out
function nfibLutIterative(n = 1)
{
    if (n <= 1)
    {
        return n;
    }

    let out = 0;

    for (let i = n; n > 1; i--)
    {
        if (fibLut[i - 1] === undefined) {}
    }

    fibLut[ n ] = out;
}

function runAll()
{
    let t = 0;
    console.log("String reversal:");
    let input = [ "adsf123", "uuaaii", "lohpidr", "123456789" ];

    for (let i = 0; i < input.length; i++)
    {
        console.log("in:", input[ i ], "out:", revertString(input[ i ]));
    }

    console.log("\nIs palindrome");
    input = [ "adsf123", "fooboof", "tenet", "sator", "lohpidr", "asdfbsa", "madam" ];

    for (let i = 0; i < input.length; i++)
    {
        console.log("in:", input[ i ], "out:", isPalindrome(input[ i ]));
    }

    console.log("\nFib n:");
    input = [ 0, 1, 2, 5, 7, 9, 10, 11, 12, 13, 15, 18, 20, 22, 24, 26, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 ];

    for (let i = 0; i < input.length; i++)
    {
        t = performance.now();
        console.log("in:", input[ i ], "out:", nfib(input[ i ]));
        console.log("nfib for n", input[ i ], "took:", performance.now() - t, "ms.");
    }

    console.log("\nFib n (with luts):");

    for (let i = 0; i < input.length; i++)
    {
        t = performance.now();
        console.log("in:", input[ i ], "out:", nfibLut(input[ i ]));
        console.log("nfibLut for n", input[ i ], "took:", performance.now() - t, "ms.");
    }
}

// TODO: trees next.

runAll();
