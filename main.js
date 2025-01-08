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

function twoSum(nums = [], target = 0)
{
    const lut = {};
    for (let i = 0; i < nums.length; i++)
    {
        if (lut[ nums[ i ] ] !== undefined)
        {
            return [ lut[ nums[ i ] ], i ];
        }

        lut[ target - nums[ i ] ] = i;
    }
}

function mergeSortedArrays(arri, arrj)
{
    let i = 0, j = 0, k = 0;
    const out = new Array(arri.length + arrj.length);

    while (i < arri.length && j < arrj.length)
    {
        if (arri[ i ] < arrj[ j ])
        {
            out[ k ] = arri[ i ];
            i++;
        }
        else
        {
            out[ k ] = arrj[ j ];
            j++;
        }

        k++;
    }

    // Now handle what's left if anything.
    while (i < arri.length)
    {
        out[ k ] = arri[ i ];
        k++;
        i++;
    }

    while (j < arrj.length)
    {
        out[ k ] = arrj[ j ];
        k++;
        j++;
    }

    return out;
}

function longestSubstringLen(str = "")
{
    const lut = {};
    let lastSubstringStart = 0;
    let maxLen = 0;

    for (let i = 0; i < str.length; i++)
    {
        if (lut[ str[ i ] ] !== undefined)
        {
            // Next symbol as the substring start.
            lastSubstringStart = Math.max(lut[ str[ i ] ] + 1, lastSubstringStart);
        }
        lut[ str[ i ] ] = i;
        maxLen = Math.max(maxLen, i - lastSubstringStart + 1);
    }

    return maxLen;
}

function runAll()
{
    let t = 0;
    let tTotal = 0;
    console.log("String reversal:");
    let input = [ "adsf123", "uuaaii", "lohpidr", "123456789" ];
    let target = 0;

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

    tTotal = performance.now();
    for (let i = 0; i < input.length; i++)
    {
        t = performance.now();
        console.log("in:", input[ i ], "out:", nfib(input[ i ]));
        console.log("nfib for n", input[ i ], "took:", performance.now() - t, "ms.");
    }
    console.log("total time:", performance.now() - tTotal, "ms");

    console.log("\nFib n (with luts):");
    tTotal = performance.now();
    for (let i = 0; i < input.length; i++)
    {
        t = performance.now();
        console.log("in:", input[ i ], "out:", nfibLut(input[ i ]));
        console.log("nfibLut for n", input[ i ], "took:", performance.now() - t, "ms.");
    }
    console.log("total time:", performance.now() - t);

    console.log("\nTwo sum:")
    input = [ 2, 7, 11, 15, 13, 9, 1, 0, 5, 16, 42, 69, 420 ]
    target = 7;
    console.log("in:", input, target);
    console.log("out:", twoSum(input, target));

    console.log("\nMerge sorted arrays:");
    input = [ [ 0, 1, 2, 3, 7, 8, 9, 12, 13 ], [ 4, 5, 6, 10, 11, 14, 15 ] ];
    console.log("in:", input);
    console.log("out:", mergeSortedArrays(...input));

    console.log("\nLongest substring:");
    input = "abcdeabcabc";
    console.log("in:", input);
    console.log("out:", longestSubstringLen(input));
    input = "abcdecbcabc";
    console.log("in:", input);
    console.log("out:", longestSubstringLen(input));
    input = "abcdedacabc";
    console.log("in:", input);
    console.log("out:", longestSubstringLen(input));
}

// TODO: trees next.

runAll();
